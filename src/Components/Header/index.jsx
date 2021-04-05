import { Box, List, ListItem, SwipeableDrawer } from "@material-ui/core";
import React, { useState } from "react";
import Brand from "../Brand";
import "./index.css";
import ViewListIcon from "@material-ui/icons/ViewList";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactlessIcon from "@material-ui/icons/Contactless";
import HomeIcon from "@material-ui/icons/Home";

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
            <h3>Home</h3>
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/Project"
          >
            <AccountTreeIcon />
            <h3>Portfolio</h3>
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/Info"
          >
            <AccountCircleIcon />
            <h3>About Me</h3>
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/Skill"
          >
            <AppsIcon />
            <h3>Skills</h3>
          </NavLink>
        </ListItem>
        <ListItem button>
          <NavLink
            activeClassName="activeLink"
            className="header__drawer__link"
            to="/Contact"
          >
            <ContactlessIcon />
            <h3>Contact</h3>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
  return (
    <>
      <Box className="header">
        <Box className="header__brand">
          <Brand />
        </Box>
        <Box className="header__navigation">
          <Box className="header__drawer">
            <ViewListIcon onClick={toggleDrawer(anchor, true)} />
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
              <NavLink
                exact
                activeClassName="activeLink"
                to="/"
                className="header__nav__link"
              >
                <HomeIcon />
              </NavLink>
              <NavLink
                activeClassName="activeLink"
                to="/Project"
                className="header__nav__link"
              >
                <AccountTreeIcon />
              </NavLink>
              <NavLink
                activeClassName="activeLink"
                to="/Info"
                className="header__nav__link"
              >
                <AccountCircleIcon />
              </NavLink>

              <NavLink
                activeClassName="activeLink"
                to="/Skill"
                className="header__nav__link"
              >
                <AppsIcon />
              </NavLink>
              <NavLink
                activeClassName="activeLink"
                to="/Contact"
                className="header__nav__link"
              >
                <ContactlessIcon />
              </NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
