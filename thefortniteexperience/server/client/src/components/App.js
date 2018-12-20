import React from "react";
import NavBar from "./NavBar";
import TwitchClip from "./TwitchClip";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const App = () => {
  return (
    <div>
      <NavBar />
      <Grid container spacing={24}>
        <Grid item xs={2}>
          <Paper item xs={3} />
        </Grid>
        <Grid item xs={3}>
          <TwitchClip />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
