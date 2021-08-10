import { DEFAULT_RATING } from '../../utils/constant/variables'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function Rating({rating}) {
    const fullStar = [...Array(rating)].map((star, index) => (<FontAwesomeIcon icon={faStar} key={index} size="lg" className="rates" />))
    const emptyStarNumber = DEFAULT_RATING-rating
    const emptyStar = [...Array(emptyStarNumber)].map((star, index) => (<FontAwesomeIcon icon={faStar} key={index} size="lg" className="rates-less" />))
    
    return (
        <div className="ratingList">
            {fullStar}
            {emptyStar}
        </div>
    )
}

export default Rating