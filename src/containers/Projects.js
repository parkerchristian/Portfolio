import React, { PureComponent } from 'react';
import styles from './Containers.css';
import Project from '../components/projects/Project';

export default class Projects extends PureComponent {
  render() {
    return (
      <div id="projects" className={styles.Projects}>
        <a href="#main">
          <button>Top</button>
        </a>
        <center style={{ justifySelf: 'center' }}>(Hover for details)</center>
        <section>
          <Project />
        </section>
      </div>
    );
  }
}
