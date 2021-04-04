import { Box } from "@material-ui/core";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./index.css";
import { NavLink } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactlessIcon from "@material-ui/icons/Contactless";
import HomeIcon from "@material-ui/icons/Home";

const HomeNavigation = () => {
  return (
    <>
      <Box className="homeNavigation">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Box className="homeNavigation__navbar">
                <NavLink
                  exact
                  activeClassName="activeLink"
                  to="/"
                  className="homeNavigation__link"
                >
                  <HomeIcon />
                </NavLink>
                <NavLink
                  activeClassName="activeLink"
                  to="/Info"
                  className="homeNavigation__link"
                >
                  <AccountCircleIcon />
                </NavLink>
                <NavLink
                  activeClassName="activeLink"
                  to="/Project"
                  className="homeNavigation__link"
                >
                  <AccountTreeIcon />
                </NavLink>
                <NavLink
                  activeClassName="activeLink"
                  to="/Skill"
                  className="homeNavigation__link"
                >
                  <AppsIcon />
                </NavLink>
                <NavLink
                  activeClassName="activeLink"
                  to="/Contact"
                  className="homeNavigation__link"
                >
                  <ContactlessIcon />
                </NavLink>
              </Box>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Box>
    </>
  );
};

export default HomeNavigation;
