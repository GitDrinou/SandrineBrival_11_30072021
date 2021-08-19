import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
/**
 * Card component 
 * @param {props} title, id
 * @returns : displaying a card with a link to a specific location
 * using Link component from react-router-dom 
 * initialize location id as parameter
 */

function Card({ title, id }) {

    return  (
        <div className="cardContainer">
            <Link to={`/location/${id}`} className="cardLink">
                <div className="cardContent">
                    <span>{title}</span>
                </div>
            </Link>            
        </div>
    )   
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired 
}


export default Card