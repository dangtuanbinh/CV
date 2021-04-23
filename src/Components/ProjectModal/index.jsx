import { Badge, Box } from "@material-ui/core";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import "./index.css";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
const ProjectModal = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  console.log(props.projectItem)

  return (
    <>
      <Box className="projectModal">
        <div onClick={(e) => e.stopPropagation()}>
          <Modal
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body>
              <Box className="projectModal__content">
                <Box className="projectModal__image">
                  <img src={props.projectItem.project.image} alt="project" />
                </Box>

                <Box className="projectModal__text">
                  <Box className="projectModal__title">
                    <Badge
                      badgeContent={props.projectItem.project.type}
                      color="secondary"
                    >
                      <h5>{props.projectItem.project.name}</h5>
                    </Badge>
                    <span>
                      Status:{" "}
                      <strong>{props.projectItem.project.status}</strong>
                    </span>
                  </Box>
                  <span>-{props.projectItem.project.description}</span>
                  <Box className="projectModal__expand">
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                    <span>More detail</span>
                  </Box>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <Box className="projectModal__expand__item ">
                      <h5>Techniques: </h5>
                      <span>{props.projectItem.project.technique}</span>
                    </Box>
                    <Box className="projectModal__expand__item ">
                      <h5>Addition: </h5>
                      <span>{props.projectItem.project.addition}</span>
                    </Box>
                  </Collapse>
                </Box>

                <Box onClick={props.onHide} className="projectModal__close">
                  <CloseIcon />
                </Box>
              </Box>
            </Modal.Body>
            <Modal.Footer>
              <Box className="projectModal__button">
                <a href={props.projectItem.project.webLink}>Preview</a>
              </Box>
      
            </Modal.Footer>
          </Modal>
        </div>
      </Box>
    </>
  );
};

export default ProjectModal;
