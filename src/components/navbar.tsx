import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamBuilder from "./teambuilder";
import "../styles/navbar.css";
import logo from "./images/pkball2.png";

const Nav: React.FunctionComponent = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <img src={logo} alt="" className="logo mx-2" />
        <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center" href="/">
          R E A C T | P O K E D E X
        </a>
      </nav>
      <TeamBuilder />
    </div>
  );
};

export default Nav;
