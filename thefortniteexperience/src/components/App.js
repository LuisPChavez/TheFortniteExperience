import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const styles = {
  AppBar: {
    backgroundColor: "#808080"
  },
  image: {
    height: 200,
    width: 400
  }
};

const App = () => {
  return (
    <AppBar style={styles.AppBar}>
      <Toolbar>
        <Button>
          <image src="https://www.logolynx.com/images/logolynx/f7/f76cd4e78ef9ca3ea1ecb140c39fb733.jpeg" />
        </Button>
        <Button variant="contained" color="primary">
          Hello World!
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default App;
