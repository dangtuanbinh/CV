import { Box, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import Brand from "../Brand";
import "./index.css";
import ViewListIcon from "@material-ui/icons/ViewList";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactlessIcon from "@material-ui/icons/Contactless";
import HomeIcon from "@material-ui/icons/Home";
import { Animated } from "react-animated-css";

const useStyles = makeStyles({
  list: {
    width: 250,
    marginTop: 50,
  },
  fullList: {
    width: "auto",
  },
});
const Header = (anchor) => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <NavLink
            exact
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/"
          >
            <HomeIcon />
            <span>Home</span>
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/Project"
          >
            <AccountTreeIcon />
            <span>Portfolio</span>
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/Info"
          >
            <AccountCircleIcon />
            <span>About Me</span>
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/Contact"
          >
            <ContactlessIcon />
            <span>Contact</span>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <Box className="header">
        <Animated animationIn="slideInDown" animationInDuration="1300">
          <div className="header__brand">
            <Brand />
          </div>
        </Animated>

        <Box className="header__navigation">
          <Box className="header__drawer">
            <Animated animationIn="slideInDown" animationInDuration="1000">
              <ViewListIcon onClick={toggleDrawer(anchor, true)} />
            </Animated>

            <SwipeableDrawer
              anchor="right"
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </Box>

          <Box className="header__nav">
            <Box className="header__nav__container">
              <Animated animationIn="slideInRight" animationInDuration="1300">
                <NavLink
                  exact
                  activeClassName="activeLink"
                  to="/"
                  className="header__nav__link"
                >
                  <HomeIcon />
                </NavLink>
              </Animated>

              <Animated animationIn="slideInRight" animationInDuration="1700" animationInDelay="2">
                <NavLink
                  activeClassName="activeLink"
                  to="/Project"
                  className="header__nav__link"
                >
                  <AccountTreeIcon />
                </NavLink>
              </Animated>
              <Animated animationIn="slideInRight" animationInDuration="2100">
                <NavLink
                  activeClassName="activeLink"
                  to="/Info"
                  className="header__nav__link"
                >
                  <AccountCircleIcon />
                </NavLink>
              </Animated>

              <Animated animationIn="slideInRight" animationInDuration="2500">
                <NavLink
                  activeClassName="activeLink"
                  to="/Contact"
                  className="header__nav__link"
                >
                  <ContactlessIcon />
                </NavLink>
              </Animated>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
