import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";

const SkillPage = () => {
  return (
    <>
      <Box className="skillPage">
        <Box className="skillPage__left">
          
        </Box>

        <Box className="skillPage__right">
          <h5>MY SKILLS</h5>
          <Box className="skillPage__right__container">
            <Box className="skillPage__right__item">
              <h6>HTML5</h6>
            </Box>
            <Box className="skillPage__right__item">
              <h6>CSS3</h6>
            </Box>
            <Box className="skillPage__right__item">
              <h6>JAVASCRIPT</h6>
            </Box>
            <Box className="skillPage__right__item">
              <h6>REACTJS</h6>
            </Box>
          </Box>
          <h6>...ALSO I HAVE KNOWLEDGE IN:</h6>
          <Box className="skillPage__right__container">
            <Box className="skillPage__right__item">
              <h6>HTML5</h6>
            </Box>
            <Box className="skillPage__right__item">
              <h6>CSS3</h6>
            </Box>
            <Box className="skillPage__right__item">
              <h6>JAVASCRIPT</h6>
            </Box>
            <Box className="skillPage__right__item">
              <h6>REACTJS</h6>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SkillPage;
