import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "../App.css";
import { IconContext } from "react-icons";

function Navbar({ loggedIn, setLoggedIn }) {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleSignOut = () => {
    sessionStorage.clear();
    setSidebar(false);
    setLoggedIn(false);
    navigate("/"); // Navigate to home after sign out
  };

  const itemsToShow = loggedIn
    ? [
        ...SidebarData,
        {
          title: "Sign Out",
          path: "#",
          icon: <AiIcons.AiOutlineLogout />,
          cName: "nav-text",
          onClick: handleSignOut,
        },
      ]
    : [
        { title: "Home", path: "/", icon: <AiIcons.AiFillHome />, cName: "nav-text" },
        { title: "Sign In", path: "/login", icon: <AiIcons.AiOutlineLogin />, cName: "nav-text" },
      ];

  return (
    <IconContext.Provider value={{ color: "undefined" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {itemsToShow.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path} onClick={item.onClick ? item.onClick : null}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
