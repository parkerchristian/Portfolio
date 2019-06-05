import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import Portfolio from '../containers/Portfolio';
import Sidebar from './banners/Banners';

export default function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Portfolio />
        <Portfolio />
      </Switch>
    </Router>
  );
}
