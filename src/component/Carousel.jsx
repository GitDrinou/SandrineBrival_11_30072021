import '../sass/Carousel.scss'
import { useRef } from 'react'
import { useCerousel } from '../utils/hooks/useCarousel'

function Carousel({id, cover, pictures}) {
    const currentPicture = useRef(null)
    const { goToPreviousPicture, gotToNextPicture } = useCerousel( currentPicture, pictures)
    let counter = 0
    for(let index=0; pictures[index]; index ++) {
        counter += 1
    }
    
    return (
        <div className="slideWrapper">
            <div className="slideContainer">  
                {counter === 1 ? (
                    <img src={cover} alt="Carrousel" />
                ) : ( 
                    <div>
                        <button onClick={goToPreviousPicture} className="btn-left"><i className="fas fa-angle-left"></i></button>
                        <img src={currentPicture} ref={currentPicture} alt="" className="slidePicture"/>
                        <button onClick={gotToNextPicture} className="btn-right"><i className="fas fa-angle-right"></i></button>
                    </div>
                )}              
            </div>        
        </div>
    )
}

export default Carousel