import { Box } from "@material-ui/core";
import React, { useState } from "react";
import "./index.css";
import ProjectItem from "../ProjectItem";

const ProjectPage = () => {
  const [projects, setProjects] = useState([
    {
      id: "1",
      name: "Mello",
      description: "A social media that targeting to cat owner",
      role: "Frontend Developer",
      image: "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603043/social_vcatdf.jpg",
      status: "Ongoing",
      technique: "HTML5, CSS3, Javscript, Reactjs",
      addition:
        "Context API, React-Boostrap, Material UI, Firebase Cloud Service, Responsive",
      webLink: "mellow-83a7f.web.app",
    },
    {
      id: "2",
      name: "CyberPunk",
      description: "An online programming course",
      role: "Frontend Developer, team-leader",
      image: "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603241/course_d7nyks.jpg",
      status: "Ongoing",
      technique: "HTML5, CSS3, Javscript, Reactjs",
      addition:
        "Redux, React-Boostrap, Material UI, Firebase Deploy Servive ,Responsive",
      webLink: "cyber-e0d08.web.app/",
    },
    {
      id: "3",
      name: "Dressing room",
      description: "An app allow user to change clothes online",
      role: "Frontend Developer",
      image: "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603237/clothe_co7pxo.jpg",
      status: "Completed",
      technique: "HTML5, CSS3, Javscript, Reactjs",
      addition: "Redux, React-Boostrap, Material UI, Firebase Deploy Service",
      webLink: "mellow-83a7f.web.app/",
    },
    {
      id: "4",
      name: "Employees Management",
      description: "A web app allow user to manage employees",
      role: "Frontend Developer",
      image: "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603241/management_qvbnnh.jpg",
      status: "Complete",
      technique: "HTML5, CSS3, Javscript",
      addition: "Bootstrap, Firebase Deploy Service",
      webLink: "mellow-83a7f.web.app/",
    },
    {
      id: "5",
      name: "Uber Calculation",
      description: "An app allows user to calculate Uber cost",
      role: "Frontend Developer",
      image: "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603243/uber_no3abg.jpg",
      status: "Complete",
      technique: "HTML5, CSS3, Javscript, Reactjs",
      addition:
        "Context API, React-Boostrap, Material UI, Firebase Cloud Service",
      webLink: "mellow-83a7f.web.app/",
    },
  ]);

  return (
    <>
      <Box className="projectPage">
        <Box className="projectPage__container">
          {projects.map((project, index) => {
            return (
              <ProjectItem project={project} key={index} />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default ProjectPage;
