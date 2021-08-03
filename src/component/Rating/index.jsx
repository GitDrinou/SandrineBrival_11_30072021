import StarFull from '../../assets/star-full.svg'
import StarEmpty from '../../assets/star-empty.svg'
import 'font-awesome/css/font-awesome.min.css'


function Rating({rating}) {
    const fullStar = [...Array(rating)].map((star, index) => <i className="full-star fa fa-star " />)
    const emptyStarNumber = 5-rating
    const emptyStar = [...Array(emptyStarNumber)].map((star, index) => <img src={StarEmpty} key={index} alt="" />)
    
    return (
        <div className="ratingList">
            {fullStar}
            {emptyStar}
        </div>
    )
}

export default Rating