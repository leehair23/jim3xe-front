import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

// import AdbIcon from "@mui/icons-material/Adb";

const leftNavBarItems = {
  home: {
    id: "home",
    name: "Home",
    linkTo: "/",
  },
  browse: {
    id: "browse",
    name: "Browse",
    linkTo: "/browse",
  },
  about: {
    id: "about",
    name: "About",
    linkTo: "/about",
  },
  random: {
    id: "random_post",
    name: "Random",
    linkTo: "/posts",
  },
};

const rightNavBarItems = {
  user: {
    id: "user",
    name: "User Profile",
    linkTo: "/user-settings",
  },
  signout: {
    id: "signout",
    name: "Sign out",
    linkTo: "/",
  },
};

const NavBar = () => {
  const [anchorNav, setAnchorNav] = useState(null);
  const [anchorUser, setAnchorUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          {/* For small screen  */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={leftNavBarItems.home.linkTo}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Jim3XE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu_navbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu_navbar"
              anchorEl={anchorNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={!!anchorNav}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Object.keys(leftNavBarItems).map((item) => (
                <MenuItem
                  key={leftNavBarItems[item].id}
                  onClick={handleOpenNavMenu}
                >
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                      to={leftNavBarItems[item].linkTo}
                    >
                      {leftNavBarItems[item].name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* For big screen */}
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={leftNavBarItems.home.linkTo}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Jim3XE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.keys(leftNavBarItems).map((item) => (
              <Button
                key={leftNavBarItems[item].id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography textAlign="center">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={leftNavBarItems[item].linkTo}
                  >
                    {leftNavBarItems[item].name}
                  </Link>
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Default Image" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu_navbar"
              anchorEl={anchorUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={!!anchorUser}
              onClose={handleCloseUserMenu}
            >
              {Object.keys(rightNavBarItems).map((item) => (
                <MenuItem
                  key={rightNavBarItems[item].id}
                  onClick={handleCloseUserMenu}
                >
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      to={rightNavBarItems[item].linkTo}
                    >
                      {rightNavBarItems[item].name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
