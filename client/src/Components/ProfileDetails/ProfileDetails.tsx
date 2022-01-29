import React from 'react';
// import profile from '../../Assets/Images/profile.svg';

import './ProfileDetails.css';

function ProfileDetail({ imageurl, name, personaldetail, score, badges }: any) {
  return (
    <div className='main'>
      <div className='profilecard'>
        <img className='image' src={imageurl} alt='' />
        <div className='profileinfo'>
          <h3 className='profilename'>{name}</h3>
          <h3>{personaldetail}</h3>
          <div className='profilescore'>
            <h4>
              Score : {score}
              <span className='profilebadges'> Badges : {badges}/50</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
