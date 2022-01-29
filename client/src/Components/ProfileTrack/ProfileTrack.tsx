import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import './ProfileTrack.css';
const percentage = 90;

function ProfileTrack({ labname, labdetails, score }: any) {
  console.log('abc');

  return (
    <div>
      <div className='main_flex'>
        <div className='main_col'>
          <div className='labdetails'>
            <p className='textname'>Track1</p>
            <div className='trackdetails'>
              <p>
                {labname}
                <span className='lab margin-20'>{labdetails}</span>
                <span className='lab margin-20'>{score}</span>
              </p>
            </div>
          </div>
          <div className='circular'>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileTrack;
