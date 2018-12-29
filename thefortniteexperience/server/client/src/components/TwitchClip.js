import React, { Component } from 'react';
import Iframe from 'react-iframe';
import axios from 'axios';
import keys from '../config/dev';

class TwitchClip extends Component {
	componentDidMount() {
		this.state = [];
		axios
			.get('https://api.twitch.tv/helix/streams?game_id=33214', {
				headers: {
					'Client-Id': keys.twitchClientID
				}
			})
			.then(res => {
				console.log(res);
			});
	}

	render() {
		return (
			<div style={{ marginTop: 10 }}>
				<Iframe
					url="http://clips.twitch.tv/embed?autoplay=false&clip=DarkQuaintEagleSmoocherZ&muted=false"
					width="1280px"
					height="720px"
					allowFullScreen
				/>
			</div>
		);
	}
}

export default TwitchClip;
