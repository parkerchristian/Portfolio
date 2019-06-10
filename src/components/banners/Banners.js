import React from 'react';
import { Link } from 'react-router-dom';
import './Banners.css';
// import headshot from '../../../assets/headshot.png';
import lkin from '../../../assets/linkedin.png';
import gthb from '../../../assets/github.jpg';
import logo from '../../../assets/cube.png';
import parker from '../../../assets/P.png';
const github = 'https://github.com/parkerchristian';
const linkedin = 'https://www.linkedin.com/in/parker-christian-helland';

export function Sidebar() {
  return (
    <aside>
      <header>
        <Link to="/">
          <figure>
            <img src={logo} />
          </figure>
        </Link>
        <h1><img src={parker} /></h1>
      </header>
      {/* <Info /> */}
      <nav>
        <a href={github}><img src={gthb} /></a>
        <a href={linkedin}><img src={lkin} /></a>
      </nav>
    </aside>
  );
}

export function Footer() {
  return (
    <footer>
      <img src={parker}></img>
    </footer>
  );
}
