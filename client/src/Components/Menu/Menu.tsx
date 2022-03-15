import "./Menu.css";
import leaderboardLogo from "../../pictures/LeaderboardLogo.svg";
// import leaderboardOpen from '../../pictures/leaderboardOpen.svg'
import AdminInfo from "../../pictures/AdminInfo.svg";
import ClubInfo from "../../pictures/ClubInfo.svg";

const Menu = () => {
  return (
    <div className="menuDiv">
      <img src={leaderboardLogo} className="menuImage top" alt="leaderboard" />
      <img src={AdminInfo} className="menuImage" alt="adminInfo" />
      <img src={ClubInfo} className="menuImage" alt="clubInfo" />
    </div>
  );
};

export default Menu;
