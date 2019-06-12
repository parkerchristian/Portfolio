import React, { PureComponent } from 'react';
import styles from './Containers.css';
import resume from '../../assets/Resume1.png';
import parker from '../../assets/footertag.png';

export default class Resume extends PureComponent {
  render() {
    return (
      <div id="resume" className={styles.Resume}>
        <a href="#main">
          <button>Top</button>
        </a>
        <section>
          <a href="../../assets/Resume1.pdf">
            <img src={resume}/>
          </a>
        </section>
        <footer>
          <img src={parker}></img>
        </footer>
      </div>
    );
  }
}