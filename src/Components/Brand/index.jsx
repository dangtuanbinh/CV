import { Box } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import BlurOnIcon from "@material-ui/icons/BlurOn";
import "./index.css";

const Brand = () => {
  return (
    <>
      <Box className="brand">
        <NavLink to="/" className="brand__link">
          <BlurOnIcon />
          <span>ROBINDANG</span>
        </NavLink>
      </Box>
    </>
  );
};

export default Brand;
