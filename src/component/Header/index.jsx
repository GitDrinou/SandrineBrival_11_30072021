import HeaderLogo from '../../assets/logo-header.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../css/style.css'


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
    
    const navHomeLink = currentPath === '/' ? (
        <StyledNavLinkActived to="/">Accueil</StyledNavLinkActived>
        ) : (
            <StyledNavLink to="/">Accueil</StyledNavLink> 
        )
    const navAboutLink = currentPath === '/about' ? (
        <StyledNavLinkActived to="/about">A Propos</StyledNavLinkActived>
        ) : (
            <StyledNavLink to="/about">A Propos</StyledNavLink> 
        )

    return (
        

        <div className='headContainer'>
            <Link to="/">
                <img src={HeaderLogo} alt='Kasa' />
            </Link>
            <nav className='navContainer'>
                {navHomeLink}
                {navAboutLink}
            </nav>
        </div>
    )
}

export default Header