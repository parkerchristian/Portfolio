import React from 'react';
import './Banners.css';
// import headshot from '../../../assets/headshot.png';
import lkin from '../../../assets/linkedinblack.png';
import gthb from '../../../assets/github.jpg';
import logo from '../../../assets/cube2.png';
import parker from '../../../assets/footertag.png';
import email from '../../../assets/email1.png';
const github = 'https://github.com/parkerchristian';
const linkedin = 'https://www.linkedin.com/in/parker-christian-helland';

export function Sidebar() {
  return (
    <aside>
      <header>
        <a href="#main">
          <figure>
            <img src={logo} />
          </figure>
        </a>
        {/* <h1><img src={parker} /></h1> */}
      </header>
      {/* <Info /> */}
      <nav>
        <a href="mailto:hellandp@gmail.com"><img src={email} style={{ background: 'white', borderRadius: '15%' }}/></a>
        <a href={github}><img src={gthb} style={{ borderRadius: '100%', background: 'black' }} /></a>
        <a href={linkedin}><img src={lkin} style={{ background: 'white', borderRadius: '20%' }}/></a>
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
