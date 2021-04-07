import { Box } from "@material-ui/core";
import React, { useState } from "react";
import "./index.css";
import ProjectItem from "../ProjectItem";
import { useSelector } from "react-redux";

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
          {projectList.map((project, index) => {
            let offset = (projectIndex - index) % Math.round(projectList.length/2)
            return <ProjectItem project={project} key={index} offset={offset}/>;
          })}
          <Box className="projectPage__button">
            <h5>{projectIndex}</h5>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectPage;
