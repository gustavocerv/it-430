import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  { title: "Home", path: "/", icon: <AiIcons.AiFillHome />, cName: "nav-text" },
  { title: "Activities", path: "/activities", icon: <FaIcons.FaCar />, cName: "nav-text" },
  { title: "Tasks", path: "/tasks", icon: <IoIcons.IoIosCheckbox />, cName: "nav-text" },
  { title: "Goals", path: "/goals", icon: <FaIcons.FaList />, cName: "nav-text" },
  { title: "Priorities", path: "/priorities", icon: <IoIcons.IoMdList />, cName: "nav-text" },
  { title: "Families", path: "/families", icon: <IoIcons.IoMdPeople />, cName: "nav-text" },
];
