import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"




function Carrousel({id, cover, pictures}) {
    let counter = 0
    for(let index=0; pictures[index]; index ++) {
        counter += 1
    }
    
    return (
        <div className="slideWrapper">
            {counter === 1 ? (
                <img src={cover} alt="Carrousel name" />
            ) : ( 
                <div className="slideContainer">                    
                    {pictures.map((picture, index) =>
                        <div className="slidePicture fade" key={index}>
                            <img src={picture} alt={picture} />
                        </div>                        
                    )}
                    <FontAwesomeIcon icon={faChevronLeft} size="5x" style={{ color: 'red'}} className="prevArrow" />
                    <FontAwesomeIcon icon={faChevronRight} size="5x" style={{ color: 'red' }} className="nextArrow" />
                </div>
            )}            
        </div>
    )
}

export default Carrousel