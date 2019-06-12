import React, { PureComponent } from 'react';
import styles from './Containers.css';

export default class Main extends PureComponent {
  render() {
    return (
      <div id="main" className={styles.Main}>
        <section>
          <h1>Parker Helland</h1>
          <h4>Portland Based Software Developer</h4>
          <a href="#projects">
            <button>Dev Projects</button>
          </a>
          <a href="#resume">
            <button>resumé</button>
          </a>
          <h5><a href="http://www.jarreddecker.com">Jarred Decker</a></h5>
        </section>
      </div>
    );
  }
}
