import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  const { NavBarStyle, ButtonStyle, Title } = styles;
  return (
    <div>
      <AppBar position="relative" style={NavBarStyle}>
        <Toolbar>
          <Grid container justify="space-between">
            <Button>
              <HomeIcon />
            </Button>
            <Typography variant="h4" style={Title}>
              The Fortnite Experience
            </Typography>
            <Button variant="text" size="medium" style={ButtonStyle}>
              Sign Up
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = {
  NavBarStyle: {
    backgroundColor: "#20A5FD"
  },
  ButtonStyle: {
    color: "#ffffff",
    backgroundColor: "#000000",
    marginRight: 50
  },
  Title: {
    color: "#ffffff"
  },
  HomeIcon: {
    backgroundColor: ""
  },
  GridStyle: {
    flexGrow: 1
  }
};

export default NavBar;
