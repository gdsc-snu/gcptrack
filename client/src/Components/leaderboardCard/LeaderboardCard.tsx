import './leaderboardCard.css'
import image from '../../pictures/collegeLogo.svg'
import percent from '../../pictures/percent.svg'
import StarRating from '../StarRating/StarRating';

const LeaderboardCard = () => {
    return (
        <div className="outerDiv">
            <p>#1</p>
            <div className='name'>
                <img src={image} alt='profileimage' className='margin' />
                <p className='margin'>Name</p>
            </div>
            <div className='star'>
                <StarRating />
            </div>
            <img src={percent} alt='replace' />
            <p> 1256</p>
        </div>
    );
}

export default LeaderboardCard;