import './Header.css'
import  headerImg from '../../pictures/gdscLogo.svg'
import  collegeLogo from '../../pictures/collegeLogo.svg'

const Header = () => {
    return(
        <div className='headerDiv' > 
            <img src={headerImg} className='headerImage' alt='gdscLogo'/>
            <p> GCP Leaderboard </p>
            <img src={collegeLogo} className='collegeImage'alt='collegeLogo'></img>
        </div>
    )
}

export default Header