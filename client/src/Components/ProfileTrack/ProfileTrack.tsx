import React from 'react';
// import 'react-circular-progressbar/dist/styles.css';
import './ProfileTrack.css';

function ProfileTrack({ labname, labdetails, score }: any) {
  return (
    <div>
      <div className='main_flex'>
        <div className='main_col'>
          <div className='labdetails'>
            <div className='trackdetails'>
              <p>
                {labname}
                <span className='lab margin-20'>{labdetails}</span>
                <span className='lab margin-20'>{score}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTrack;
