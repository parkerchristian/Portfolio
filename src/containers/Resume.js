import React, { PureComponent } from 'react';
import styles from './Containers.css';
import resume from '../../assets/resumePic.png';

export default class Resume extends PureComponent {
  render() {
    return (
      <div id="resume" className={styles.Resume}>
        <a href="#main">
          <button>Top</button>
        </a>
        <section>
          <a href="../../assets/Resume.pdf">
            <img src={resume}/>
          </a>
        </section>
      </div>
    );
  }
}
