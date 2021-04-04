import { Box } from "@material-ui/core";
import React from "react";

import HomeInfo from "../../Components/HomeInfo"
import HomeNavigation from "../../Components/HomeNavigation"
import "./index.css";

const HomePage = () => {
  return (
    <>
      <Box className="homePage">
        <HomeInfo className="homePage__info"/>
        <HomeNavigation className="homePage__navigation"/>
      </Box>
    </>
  );
};

export default HomePage;
