import React, { PureComponent } from 'react';
import styles from './Containers.css';
import resume from '../../assets/Resume.png';
import pdf from '../../assets/Resume.pdf';
import parker from '../../assets/footertag.png';

export default class Resume extends PureComponent {
  render() {
    return (
      <div id="resume" className={styles.Resume}>
        <a href="#main">
          <button>Top</button>
          
        </a>
        <section>
          <a href={pdf}>
            <img src={resume}/>
          </a>
        </section>
        <footer>
          <a href="#main">
            <img src={parker}></img>
          </a>
        </footer>
      </div>
    );
  }
}
