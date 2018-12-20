import React, { Component } from "react";
import Iframe from "react-iframe";

class TwitchClip extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <Iframe
          url="https://clips.twitch.tv/embed?autoplay=false&clip=ApatheticClumsyCarrotGingerPower&muted=false"
          width="1280px"
          height="720px"
        />
      </div>
    );
  }
}

export default TwitchClip;
