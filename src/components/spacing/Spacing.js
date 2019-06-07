import React from 'react';
import styles from '../../containers/Containers.css';

export default function Spacing() {
  const css = {
    width: '100%',
    background: 'white',
    height: '2em',
    textAlign: 'center',
    fontSize: '2em'
  };
  return (
    <>
      <div style={css}>ART TECH SCIENCE</div>
      <div className={styles.Spacing}></div>
      <div style={css}>ART TECH SCIENCE</div>
    </>
  );
}
