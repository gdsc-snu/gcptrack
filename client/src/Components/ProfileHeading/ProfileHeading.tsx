import React from 'react';
import profile from '../../Assets/Images/profile.svg';

import './ProfileHeading.css';

function ProfileHeading() {
  return (
    <div>
      <img src={profile} alt='profile' />
    </div>
  );
}

export default ProfileHeading;
