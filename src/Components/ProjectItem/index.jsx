import { Box } from "@material-ui/core";
import React, { useState } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ProjectModal from "../ProjectModal/index";

const ProjectItem = (props) => {
  const history = useHistory();
  const [modalShow, setModalShow] = useState(false);
  

   
  const active = props.offset === 0 ? true : null;
  // const ref = useTilt(active);

  return (
    <>
      <Box
        className="projectItem"
        data-active={active}
        style={{
          "--offset": props.offset,
          "--dir": props.offset === 0 ? 0 : props.offset > 0 ? 1 : -1,
        }}
        // ref={active ? ref : null}
      >
        <Box
          onClick={() => setModalShow(true)}
          className="projectItem__image"
          style={{ backgroundImage: `url(${props.project.image})` }}
        ></Box>
        <Box className="projectItem__text">
          <Badge badgeContent={props.project.type} color="secondary">
            <h5>{props.project.name}</h5>
          </Badge>

          <p>-{props.project.description}</p>
        </Box>
        <ProjectModal nextMove={props.next} projectItem={props} show={modalShow} onHide={() => setModalShow(false)} />
      </Box>
    </>
  );
};

export default ProjectItem;
