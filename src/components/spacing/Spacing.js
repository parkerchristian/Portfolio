import React from 'react';
import styles from '../../containers/Containers.css';

export default function Spacing() {
  const css = {
    width: '100%',
    background: 'white',
    height: '2em',
    fontSize: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '.5em',
  };
  return (
    <>
      <div style={css}><span>ART TECH SCIENCE</span></div>
      <div className={styles.Spacing}></div>
      <div style={css}><a href="#projects" style={{ color: 'black' }}>PROJECTS</a></div>
    </>
  );
}
