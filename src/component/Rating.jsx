import { DEFAULT_RATING } from '../utils/constant/variables'
import FullStar from '../assets/star-full.svg'
import EmptyStar from '../assets/star-empty.svg'

/**
 * Rating component
 * @param {props} rating 
 * @returns the illustration location rate
 * using iteration to display the rignt number of star illustration (full and/or empty star)
 */

function Rating({rating}) {

    const fullStar = [...Array(rating)].map((star, index) => (<img src={FullStar} alt="" key={index} className="rates" />))
    const emptyStarNumber = DEFAULT_RATING-rating
    const emptyStar = [...Array(emptyStarNumber)].map((star, index) => (<img src={EmptyStar} alt="" key={index} className="rates" />))

    return (
        <div className="ratingList">
            {fullStar}
            {emptyStar}
        </div>
    )
}

export default Rating