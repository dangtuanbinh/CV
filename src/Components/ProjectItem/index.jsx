import { Box } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import "./index.css";
import { useHistory } from "react-router-dom";

const useTilt = (active) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }
    const state = {
      rect: ref.current.getBoundingClientRect(),
      mouseX: undefined,
      mouseY: undefined,
    };
    const resizeObserver = new ResizeObserver((entries) => {
      state.rect = ref.current.getBoundingClientRect();
    });
    const handleMouseMove = e => {
      state.mouseX = e.clinetX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.heihgt;
      ref.current.style.setProperty("--px", px);
      ref.current.style.setProperty("--py", py);
    };
    ref.current.addEventListener("mousemove", handleMouseMove);
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.unobserve(ref.current);
      ref.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ref, active]);
  return ref;
};

const ProjectItem = (props) => {
  const history = useHistory();
  const gotoDetail = () => {
    if (props.project.id) {
      history.push(`/Detail/${props.project.id}`);
    }
  };
  const active = props.offset === 0 ? true : null;
  // const ref = useTilt(active);
  return (
    <>
      <Box
        className="projectItem"
        style={{
          "--offset": props.offset,
          "--dir": props.offset === 0 ? 0 : props.offset > 0 ? 2 : -2,
          backgroundImage: `url(${props.project.image})`
        }}
        // ref={active ? ref : null}
        data-active={active}
        onClick={gotoDetail}
      >
        
      </Box>
    </>
  );
};

export default ProjectItem;
