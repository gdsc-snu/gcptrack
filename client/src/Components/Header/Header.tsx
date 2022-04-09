import "./Header.css";
import headerImg from "../../pictures/gdscLogo.svg";
import collegeLogo from "../../pictures/collegeLogo.svg";

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="nav-left">
        <img src={headerImg} className="headerImage" alt="gdscLogo" />
        <p className="nav-text"> GCP Leaderboard </p>
      </div>
      <img src={collegeLogo} className="collegeImage" alt="collegeLogo"></img>
    </div>
  );
};

export default Header;
