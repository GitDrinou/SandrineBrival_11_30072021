import HeaderLogo from '../assets/logo-header.svg'
import { Link } from 'react-router-dom'
import { ROUTE_ABOUT, ROUTE_HOME } from '../utils/constant/router'
import { useLocation } from 'react-router-dom'
import '../sass/Header.scss'

/**
 * Header component
 * @returns the header of application 
 * using Link component
 * using useLocation hooks to define the current pathname
 * using ROUTE global constant 
 */

function Header() {   
    const { pathname } = useLocation()
    // use for Debugg : console.log({pathname})
    return (        
        <div className='headContainer'> 
            <Link to={ROUTE_HOME}>
                <img src={HeaderLogo} alt='Kasa' />
            </Link>
            <nav className='navContainer'>
                <Link 
                    to={ROUTE_HOME} 
                    className={pathname === ROUTE_HOME ? "header-link-actived" : "header-link" }
                >Accueil</Link>
                <Link 
                    to={ROUTE_ABOUT} 
                    className={pathname === ROUTE_ABOUT ? "header-link-actived" : "header-link" }
                >A Propos</Link>               
            </nav>
        </div>
    )
}

export default Header