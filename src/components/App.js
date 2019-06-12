import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from '../containers/Main';
import { Sidebar } from './banners/Banners';
import Projects from '../containers/Projects';
import Spacing from '../components/spacing/Spacing';
import Resume from '../containers/Resume';

export default function App() {
  const css = {
    width: '100%',
    background: 'white',
    height: '2em',
    fontSize: '2em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    letterSpacing: '.5em'
  };
  return (
    <Router>
      <Sidebar />
      <Main />
      <Spacing />
      <Projects />
      <div style={css}><a style={{ color: 'black' }} href="#resume">resumé</a></div>
      <Resume />
      {/* <Footer /> */}
    </Router>
  );
}
