import React, { Component } from 'react';
import YouTube from 'react-youtube';
import styles from './Home.css';


export default class Home extends Component {
  render() {
	  const opts = {
		  width: 854,
		  height: 480,
		  playerVars: {
			  autoplay:1,
			  enablejsapi:1,
			  modestbranding:1,
			  showinfo:0
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
