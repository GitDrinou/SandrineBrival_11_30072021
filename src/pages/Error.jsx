import '../sass/Error.scss'
import { Link } from 'react-router-dom'

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