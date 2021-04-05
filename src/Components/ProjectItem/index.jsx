import { Box } from "@material-ui/core";
import React from "react";
import "./index.css";
import { useHistory } from "react-router-dom";

const ProjectItem = (props) => {
  const history = useHistory();
  const gotoDetail = () => {
    if(props.project.id){
        history.push(`/Detail/${props.project.id}`)
    }
  };
  return (
    <>
      <Box className="projectItem">
        <Box
          onClick={gotoDetail}
          className="projectItem__image"
          style={{ backgroundImage: `url(${props.project.image})` }}
        ></Box>
      </Box>
    </>
  );
};

export default ProjectItem;
