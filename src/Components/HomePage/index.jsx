import { Box } from "@material-ui/core";
import React from "react";
import HomeInfo from "../../Components/HomeInfo";
import Header from "../Header";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Box className="homePage">
          <Header />
          <HomeInfo />
      </Box>
    </>
  );
};

export default HomePage;
