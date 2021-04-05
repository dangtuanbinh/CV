import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";

const ProjectItem = (props) => {
  return (
    <>
      <Box className="projectItem">
        <Box
          className="projectItem__image"
          style={{ backgroundImage: `url(${props.project.image})` }}
        ></Box>
      </Box>
    </>
  );
};

export default ProjectItem;
