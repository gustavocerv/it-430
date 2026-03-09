import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { setLoggedIn } = useOutletContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(process.env.REACT_APP_API_URL_BASE + "/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (data.success) {
        const token = data.token;
        const decoded = JSON.parse(atob(token.split(".")[1])); // simple decode
        sessionStorage.setItem("username", decoded.username);
        sessionStorage.setItem("first_name", decoded.first_name);
        sessionStorage.setItem("last_name", decoded.last_name);
        sessionStorage.setItem("customer_id", decoded.customer_id);
        sessionStorage.setItem("family_id", decoded.family_id);
        sessionStorage.setItem("user_type", decoded.user_type);

        setLoggedIn(true);
        navigate("/");
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError("Login failed.");
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "50px auto", padding: "20px", backgroundColor: "#f4f4f4", borderRadius: "8px" }}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ padding: "10px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: "10px", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        <button type="submit" style={{ padding: "10px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
