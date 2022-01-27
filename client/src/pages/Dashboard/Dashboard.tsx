import Header from "../../Components/Header/Header"
import LeaderboardCard from "../../Components/leaderboardCard/LeaderboardCard"
import './Dashboard.css'

const Dshboard = () => {
    return(
        <>
            <Header/>
            <p className="winnerText"> Winners</p>
            <div className='centerDiv'>
            <p className="winnerText"> All Users</p>
            <div className="tableTitle"> <p>Rank</p> <p className='name'>Name</p><p>Rating</p><p>Milestone</p><p>Score</p></div>
            <LeaderboardCard/>            
            <LeaderboardCard/>
            <LeaderboardCard/>
            <LeaderboardCard/>
            <LeaderboardCard/>
            <LeaderboardCard/>
            </div>
        </>
    )
}

export default Dshboard