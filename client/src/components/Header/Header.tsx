import './Header.css'
import  headerImg from '../../pictures/header.svg'

const Header = () => {
    return(
        <div> 
            <img src={headerImg} className='headerImage'/>
        </div>
    )
}

export default Header