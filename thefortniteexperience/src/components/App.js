import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";

const styles = {
  AppBar: {
    backgroundColor: "#808080"
  },
  image: {
    height: 135,
    width: 240
  }
};

const App = () => {
  return (
    <AppBar style={styles.AppBar}>
      <Toolbar>
        <Button>
          <HomeIcon />
        </Button>
        <Button variant="contained" color="primary">
          Hello World!
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default App;
