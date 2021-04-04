import { Box } from "@material-ui/core";
import React from "react";
import HomePage from "../../Components/HomePage";
import "./index.css";

const Home = () => {
  return (
    <>
      <Box className="home">
        <HomePage />
      </Box>
    </>
  );
};

export default Home;
