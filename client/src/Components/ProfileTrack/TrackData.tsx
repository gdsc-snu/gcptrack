import React from 'react';
import './TrackData.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import { LabDetails } from '../../data/labdetails';
import ProfileTrack from './ProfileTrack';
const percentage = 90;

const TrackData = () => {
  return (
    <>
      <div>
        <div className='labdetailcss'>
          <div className='scrolllab'>
            <div className='main_Box'>
              <p className='trackName'>Track1</p>
              {LabDetails.map((labdetail) => (
                <ProfileTrack {...labdetail} />
              ))}
            </div>
            <div className='circular'>
              <CircularProgressbar value={percentage} text={`${percentage}%`} />
            </div>

            <div className='track2'>
              <div className='main_Box'>
                <p className='trackName'>Track1</p>
                {LabDetails.map((labdetail) => (
                  <ProfileTrack {...labdetail} />
                ))}
              </div>
              <div className='circular'>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
            </div>

            <div className='track2'>
              <div className='main_Box'>
                <p className='trackName'>Track1</p>
                {LabDetails.map((labdetail) => (
                  <ProfileTrack {...labdetail} />
                ))}
              </div>
              <div className='circular'>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackData;
