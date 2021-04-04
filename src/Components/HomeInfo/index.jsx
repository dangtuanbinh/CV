import { Box } from "@material-ui/core";
import React from "react";
import Brand from "../Brand";
import "./index.css";
import profile from "../../Assets/Images/profile.jpg";
import HomeIcon from "../HomeIcon";
import { NavLink } from "react-router-dom";
import HomeNavigation from "../HomeNavigation";

const HomeInfo = () => {
  return (
    <>
      <Box className="homeInfo">
        <Box className="homeInfo__brand">
          <Brand />
        </Box>
        <Box className="homeInfo__container">
          <Box className="homeInfo__content">
            <Box className="homeInfo__text">
              <h1>CREATIVE</h1>
              <span>DEVELOPER</span>
              <h4>PASSION TO FRONTEND</h4>
              <NavLink to="/" className="homeInfo__link">
                <button>My Projects</button>
              </NavLink>
            </Box>
            <Box className="homeInfo__image">
              <img src={profile} alt="profile" />
            </Box>
          </Box>
        </Box>
        <HomeIcon />
       
      </Box>
    </>
  );
};

export default HomeInfo;
