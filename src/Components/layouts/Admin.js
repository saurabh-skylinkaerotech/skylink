import React from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Routes, useLocation } from "react-router-dom";

import DemoNavbar from "../components/Navbars/DemoNavbar";
import Footer from "../components/Footer/Footer.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin.js";

import routes from "routes.js";

var ps;

function Dashboard(props) {
  return (
    <div className="wrapper">
      <div className="main-panel" ref={mainPanel}>
      </div>
    </div>
  );
}

export default Dashboard;
