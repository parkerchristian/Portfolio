import React from 'react';
import { Link } from 'react-router-dom';
import './Banners.css';
import headshot from '../../../assets/headshot.png';
import lkin from '../../../assets/linkedin.png';
import gthb from '../../../assets/github.jpg';
const github = 'https://github.com/parkerchristian';
const linkedin = 'https://www.linkedin.com/in/parker-christian-helland';

export default function Sidebar() {
  return (
    <aside>
      <header>
        <Link to="/">
          <img src={headshot} />
        </Link>
        <h1>Parker Helland</h1>
      </header>
      {/* <Info /> */}
      <footer>
        <a href={github}><img src={gthb} /></a>
        <a href={linkedin}><img src={lkin} /></a>
      </footer>
    </aside>
  );
}
