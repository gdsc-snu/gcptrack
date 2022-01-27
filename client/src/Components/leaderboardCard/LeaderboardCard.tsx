import './leaderboardCard.css'
import image from '../../pictures/collegeLogo.svg'
import percent from '../../pictures/percent.svg'

const LeaderboardCard = () => {
    return(
        <div className="outerDiv"> 
            <p>#1</p>
            <div className='name'>
                <img src={image} alt='profileimage' className='margin'/>
                <p className='margin'>Name</p>
            </div>
            <p> * * * * *</p>
            <img src={percent} alt='replace'/>
            <p> 1256</p>
        </div>
    )
}

export default LeaderboardCard