import { DEFAULT_RATING } from '../../utils/constant/variables'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Rating({rating}) {
    const fullStar = [...Array(rating)].map((star, index) => (<FontAwesomeIcon icon={faStar} key={index} size="lg" style={{ color: '#FF6060' }} />))
    const emptyStarNumber = DEFAULT_RATING-rating
    const emptyStar = [...Array(emptyStarNumber)].map((star, index) => (<FontAwesomeIcon icon={faStar} key={index} size="lg" style={{ color: '#E3E3E3' }} />))
    
    return (
        <div className="ratingList">
            {fullStar}
            {emptyStar}
        </div>
    )
}

export default Rating