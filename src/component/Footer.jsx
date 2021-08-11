import FooterLogo from '../assets/logo-footer.svg'

function Footer() {
    return (
        <footer>
            <img src={FooterLogo}  alt='Logo de bas de page' />
            <span>&copy; 2020 Kasa/ All rights reserved</span>
        </footer>
    )
}

export default Footer