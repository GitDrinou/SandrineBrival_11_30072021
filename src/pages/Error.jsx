import '../sass/Error.scss'
import { Link } from 'react-router-dom'

/**
 * Error component
 * @returns display 404 error page
 * using Link component for redirect to Home page
 */

function Error() {
    return (
        <div className="errorWrapper">
            <span className="errorTitle">404</span>
            <span className="errorMessage">Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/" className="errorBackLink">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error