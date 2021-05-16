import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import background from "../../Assets/Images/background2.png";
import profilePic from "../../Assets/Images/profilePic.png";
import HomeIcon from "../HomeIcon";
import { NavLink } from "react-router-dom";
import { Animated } from "react-animated-css";

const HomeInfo = () => {
  return (
    <>
      <Box className="homeInfo">
        <Box className="homeInfo__container">
          <Box className="homeInfo__sideIcon">
            <HomeIcon />
          </Box>
          <Box className="homeInfo__content">
            <Box className="homeInfo__text">
              <h1>CREATIVE</h1>
              <span>DEVELOPER</span>
              <h4>PASSION TO FRONTEND</h4>
              <NavLink to="/Project" className="homeInfo__link">
                <button>My Projects</button>
              </NavLink>
            </Box>
            <Box className="homeInfo__image">
              <img src={background} alt="profile" />
              <Box className="homeInfo__image__profilePic">
                <img src={profilePic} alt="profilePic" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="homeInfo__bottomIcon">
          <HomeIcon />
        </Box>
      </Box>
    </>
  );
};

export default HomeInfo;
