import HeaderLogo from '../../assets/logo-header.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../css/style.css'
import { ROUTE_HOME } from '../../utils/constant/router'


const StyledNavLink = styled(Link)`
    color: #FF6060;
    text-decoration: none;    
    font-size: 24px;
    text-align: center;
    font-family: 'Montserrat',Arial,sans-serif;
`
const StyledNavLinkActived = styled(Link)`
    color: #FF6060;
    text-decoration: none;    
    font-size: 24px;
    text-align: center;
    font-family: 'Montserrat',Arial,sans-serif;
    border-bottom: 2px solid #FF6060;
`
const currentPath = document.location.pathname

function Header() {   
    
    let linkHome = <StyledNavLink to={ROUTE_HOME}>Accueil</StyledNavLink>
    let linkAbout = <StyledNavLink to="/aboutTo">A Propos</StyledNavLink>
    switch (currentPath) {
        case "/":
            linkHome = <StyledNavLinkActived to={ROUTE_HOME}>Accueil</StyledNavLinkActived>
            break;
        case "/about":
            linkAbout = <StyledNavLinkActived to="/about">A Propos</StyledNavLinkActived>
            break;    
        default:
            linkHome = <StyledNavLink to={ROUTE_HOME}>Accueil</StyledNavLink>
            linkAbout = <StyledNavLink to="/about">A Propos</StyledNavLink>
            break;
    }
    
    return (
        
        <div className='headContainer'>
            <Link to={ROUTE_HOME}>
                <img src={HeaderLogo} alt='Kasa' />
            </Link>
            <nav className='navContainer'>
                {linkHome}
                {linkAbout}                
            </nav>
        </div>
    )
}

export default Header