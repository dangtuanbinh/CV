import { Box } from "@material-ui/core";
import React from "react";
import Header from "../../Components/Header";
import SkillPage from "../../Components/SkillPage";
import "./index.css";

const Skill = () => {
  return (
    <>
      <Box className="skill">
        <Header />
        <SkillPage />
      </Box>
    </>
  );
};

export default Skill;
