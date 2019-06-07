import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Main from '../containers/Main';
import { Sidebar, Footer } from './banners/Banners';
import Projects from '../containers/Projects';
import Spacing from '../components/spacing/Spacing';
import Resume from '../containers/Resume';

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Main />
      <Spacing />
      <Projects />
      <Resume />
      <Footer />
    </Router>
  );
}
