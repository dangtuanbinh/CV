import { Box } from "@material-ui/core";
import React, { useState } from "react";
import "./index.css";
import ProjectItem from "../ProjectItem";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ProjectPage = () => {
  const projectList = useSelector((state) => {
    return state.project.projectList;
  });
  const [projectIndex, setProjectIndex] = useState(0);
  const previous = () => {
    setProjectIndex((projectIndex +1) % projectList.length);
  };
  const next = () => {
    setProjectIndex(
      projectIndex === 0 ? projectList.length - 1 : projectIndex - 1
    );
  };
  return (
    <>
      <Box className="projectPage">
        <Box className="projectPage__container">
          {[...projectList, ...projectList, ...projectList].map((project, index) => {
            let offset = projectList.length + (projectIndex - index);
            return <ProjectItem project={project} key={index} offset={offset}/>;
          })}
          <Box className="projectPage__button">
            <ArrowBackIosIcon  onClick={previous}/>
            <ArrowForwardIosIcon  onClick={next} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectPage;
