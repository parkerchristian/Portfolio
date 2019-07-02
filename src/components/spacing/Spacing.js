import React from 'react';
import styles from '../../containers/Containers.css';

export default function Spacing() {
  return (
    <>
      <div className={styles.WhiteTextTop}><span>ART TECH SCIENCE</span></div>
      <div className={styles.Spacing}></div>
      <div className={styles.WhiteTextProjects}><a href="#projects" style={{ color: 'black' }}>PROJECTS</a></div>
    </>
  );
}
