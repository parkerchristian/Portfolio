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
        <section>
          <h1>PROJECTS</h1>
          <span>(Hover for details)</span>
          <Project />
        </section>
      </div>
    );
  }
}
