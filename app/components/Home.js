import React, { Component } from 'react';
import YouTube from 'react-youtube';
import styles from './Home.css';


export default class Home extends Component {
  render() {
	  const opts = {
		  playerVars: {
			  autoplay:1
		  }
	  };

    return (
      <div>
        <div className={styles.container}>
		  <div className={styles.drag}> </div>
		  <YouTube videoId="cfHp96Y7GzI" opts={opts} />
        </div>
      </div>
    );
  }
}
