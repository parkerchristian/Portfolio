import React, { PureComponent } from 'react';
import styles from './Containers.css';
import Project from '../components/projects/Project';

export default class Projects extends PureComponent {
  render() {
    return (
      <div id="projects" className={styles.Projects}>
        <center>(Hover for details)</center>
        <span className={styles.Click}>(Click for deatils)</span>
        <a href="#main">
          <button>Top</button>
        </a>
        <section>
          <Project />
        </section>
        <span className={styles.Click}>(Click for deatils)</span>
      </div>
    );
  }
}
