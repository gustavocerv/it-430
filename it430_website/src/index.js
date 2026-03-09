import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Activities from "./routes/Activities";
import Families from "./routes/Families";
import Tasks from "./routes/Tasks";
import Goals from "./routes/Goals";
import Priorities from "./routes/Priorities";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Login from "./routes/Login";
import Users from "./routes/Users";
import "./App.css";

const AppHeader = ({ loggedIn, setLoggedIn }) => {
  const navigate = useNavigate();
  const firstName = sessionStorage.getItem("first_name") || "";
  const lastName = sessionStorage.getItem("last_name") || "";

  const handleSignOut = () => {
    sessionStorage.clear();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <header style={{
      position: "relative",
      textAlign: "center",
      padding: "60px 20px 40px",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      color: "#fff",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
    }}>
      {/* Navbar */}
      <div style={{ position: "absolute", top: "20px", left: "20px" }}>
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>

      {/* Sign In / Sign Out button */}
      <div style={{ position: "absolute", top: "25px", right: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
        {loggedIn && <span style={{ fontWeight: 600 }}>{firstName} {lastName}</span>}
        <button
          onClick={loggedIn ? handleSignOut : () => navigate("/login")}
          style={{ padding: "8px 16px", backgroundColor: "#000", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}
        >
          {loggedIn ? "Sign Out" : "Sign In"}

        </button>
      </div>

      {/* Main title */}
      <h1 style={{ fontSize: "3rem", margin: 0, fontWeight: 700 }}>Anchor Point</h1>
      <p style={{ fontSize: "1.3rem", marginTop: "12px", fontWeight: 400, color: "rgba(255,255,255,0.9)" }}>
        Anchored in what matters most: FAMILY
      </p>
      <p style={{ fontSize: ".9rem", marginTop: "12px", fontWeight: 400, color: "rgba(255,255,255,0.9)" }}><br/>API: {process.env.REACT_APP_API_URL_BASE}</p>
    </header>
  );
};

const AppLayout = () => {
  const [loggedIn, setLoggedIn] = React.useState(!!sessionStorage.getItem("username"));

  return (
    <>
      <AppHeader loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <div style={{ paddingTop: "20px" }}>
        <Outlet context={{ loggedIn, setLoggedIn }} />
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "activities", element: <Activities /> },
      { path: "tasks", element: <Tasks /> },
      { path: "goals", element: <Goals /> },
      { path: "priorities", element: <Priorities /> },
      { path: "families", element: <Families /> },
      { path: "users", element: <Users /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
