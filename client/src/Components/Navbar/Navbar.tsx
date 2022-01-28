import React from 'react';
import gdsclogo from '../../Assets/Icons/gdsclogo.svg';
import profile from '../../Assets/Images/profile.svg';

import './Navbar.css';

function Navbar() {
  return (
    <>
      <div className='navbar'>
        <img src={gdsclogo} alt='gdsclogo'></img>
        <p className='heading'>GCP Leaderboard</p>
        <img src={profile} alt='profile' className='profileImg' />
      </div>
    </>
  );
}

export default Navbar;
