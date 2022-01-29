import React from 'react';
import './Track.css';

import ProfileTrack from './ProfileTrack';

function Trackdetails() {
  return (
    <>
      {[...Array(5)].map((index) => {
        index += 1;
        return (
          <div className='tracks'>
            <ProfileTrack />
          </div>
        );
      })}
    </>
  );
}

export default Trackdetails;
