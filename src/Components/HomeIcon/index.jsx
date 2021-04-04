import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const HomeIcon = () => {
  return (
    <>
      <Box className="homeIcon">
        <Box className="homeIcon__container">
          <a
            href="https://www.linkedin.com/in/tuan-binh-dang-54298910b/"
            className="homeIcon__link"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/dangtuanbinh" className="homeIcon__link">
            <GitHubIcon />
          </a>
          <a href="https://github.com/dangtuanbinh" className="homeIcon__link">
            <FacebookIcon />
          </a>
          <a href="https://github.com/dangtuanbinh" className="homeIcon__link">
            <InstagramIcon />
          </a>
        </Box>
      </Box>
    </>
  );
};

export default HomeIcon;
