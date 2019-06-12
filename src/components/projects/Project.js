import React from 'react';
import styles from '../Components.css';
import marvelImg from '../../../assets/marvelImg.png';
import btweImg from '../../../assets/btweImg.png';
import sleepsterImg from '../../../assets/napsterImg.png';

export default function Project() {
  return (
    <ul className={styles.Project}>
      <li><Marvel /></li>
      <li><Napster /></li>
      <li><BTWE /></li>
      <li><Final /></li>
    </ul>
  );
}

function Marvel() {
  return (
    <>
      <h1 className={styles.title}>Marvel Matches</h1>
      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <img src={marvelImg} />
          </div>
          <div className={styles.flipcardback}>
            <h1>Built with:</h1>
            <p>Vanilla JavaScript</p>
            <p>HTML / CSS</p>
            <p>
              <a href="https://marvel-matches.netlify.com/">Live Site</a>
            </p>
            <p>
              <a href="https://github.com/parkerchristian/marvel-matches">Github</a>
            </p><br/>
            <p>Users sign in with FireBase Auth which is stored in Firebase Data Base. Search Marvel&apos;s Api, favorite multiple characters then compare which comics they appear in together.</p>
          </div>
        </div>
      </div>
    </>
  );
}

// function Marvel() {
//   return (
//     <>
//       <h1>Marvel Matches</h1>
//       <img src={marvelImg} />
//     </>
//   );
// }

function Napster() {
  return (
    <>
      <h1>Napster Clone: Sleepster</h1>
      <img src={sleepsterImg} />
    </>
  );
}

// 'https://github.com/happy-trailblazers'

function BTWE() {
  return (
    <>
      <h1>Before The Week Ends</h1>
      <img src={btweImg} />
    </>
  );
}

function Final() {
  return (
    <>
      <h1>Final Project</h1>
      <figcaption>
        <h2>COMING SOON!! 6/21/19</h2>
      </figcaption>
    </>
  );
}
// 'https://parkerchristian.github.io/detective-game'
// 'https://github.com/parkerchristian/detective-game'
