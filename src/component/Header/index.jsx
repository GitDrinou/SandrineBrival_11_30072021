import HeaderLogo from '../../assets/logo-header.svg'
import { Link } from 'react-router-dom'
import '../../css/style.css'
import { ROUTE_ABOUT, ROUTE_HOME } from '../../utils/constant/router'


function Header() {   

    return (        
        <div className='headContainer'> 
            <Link to={ROUTE_HOME}>
                <img src={HeaderLogo} alt='Kasa' />
            </Link>
            <nav className='navContainer'>
                <Link 
                    to={ROUTE_HOME} 
                    className="header-link"
                >Accueil</Link>
                <Link 
                    to={ROUTE_ABOUT} 
                    className="header-link"
                >A Propos</Link>               
            </nav>
        </div>
    )
}

export default Header