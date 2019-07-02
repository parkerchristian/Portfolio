import React from 'react';
import styles from '../Components.css';
import marvelImg from '../../../assets/marvelImg.png';
import btweImg from '../../../assets/btweImg.png';
import sleepsterImg from '../../../assets/napsterImg.png';
import workerImg from '../../../assets/worker.png';

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
            <p>Node / AWS</p>
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

function Napster() {
  return (
    <>
      <h1 className={styles.title}>Sleepster</h1>
      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <img src={sleepsterImg} />
          </div>
          <div className={styles.flipcardback}>
            <h1>
              <p>Backend App</p>
              Built with:
            </h1>
            <p>Node JS / TCP Servers / AWS / MongoDB</p>
            <p>
              <a href="https://github.com/happy-trailblazers/sleepster-client">Live Site</a>
            </p>
            <p>
              <a href="https://github.com/happy-trailblazers">Github</a>
            </p><br/>
            <p>Sleepster is a Napster clone. Users login into our server stored on MongoDB. You can login using your iTunes or select your own folder to share and store any music or files.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function BTWE() {
  return (
    <>
      <h1 className={styles.title}>Before The Week Ends</h1>
      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <img src={btweImg} />
          </div>
          <div className={styles.flipcardback}>
            <h1>Built with:</h1>
            <p>Vanilla JavaScript</p>
            <p>HTML / CSS</p>
            <p>
              <a href="https://parkerchristian.github.io/detective-game">Live Site</a>
            </p>
            <p>
              <a href="https://github.com/parkerchristian/detective-game">Github</a>
            </p><br/>
            <p>Pick a character and choose a name to solve this classic `Who Dun It` Noir murder mystery. Solve puzzles to unlock new clues to catch the killer before the week ends!</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Final() {
  return (
    <>
      <h1 className={styles.title}>Workür</h1>
      <div className={styles.flipcard}>
        <div className={styles.flipcardinner}>
          <div className={styles.flipcardfront}>
            <img src={workerImg} />
          </div>
          <div className={styles.flipcardback}>
            <h1>
              <p>Full Stack App</p>
              Built with:
            </h1>
            <p>React / Redux / MongoDB</p>
            <p>
              <a href="https://workur.netlify.com/">Live Site</a>
            </p>
            <p>
              <a href="https://github.com/jobtographer">Github</a>
            </p><br/>
            <p>Users sign in with Auth Zero with data stored in Mongo Data Base. Job seekers can save all their job search details and progress on one site. </p>
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

// function Napster() {
//   return (
//     <>
//       <h1>Napster Clone: Sleepster</h1>
//       <img src={sleepsterImg} />
//     </>
//   );
// }

// 'https://github.com/happy-trailblazers'

// function BTWE() {
//   return (
//     <>
//       <h1>Before The Week Ends</h1>
//       <img src={btweImg} />
//     </>
//   );
// }

// function Final() {
//   return (
//     <>
//       <h1>Workür</h1>
//       <figcaption>
//         <img src={workerImg} />
//       </figcaption>
//     </>
//   );
// }
// 'https://parkerchristian.github.io/detective-game'
// 'https://github.com/parkerchristian/detective-game'
