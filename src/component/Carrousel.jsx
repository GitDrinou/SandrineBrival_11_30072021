import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "../css/carousel.css"

function Carrousel({id, cover, pictures}) {
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
                    
                <Carousel
                    infiniteLoop={true}
                    showStatus = {false}
                    showIndicators = {false}
                    showThumbs = {false}
                >
                    {pictures.map((picture, index) =>
                        <div key={{id}-{index}}>
                            <img src={picture} alt={picture} className="slidePicture" />
                        </div>                        
                    )}
                </Carousel>
                )}              
            </div>        
        </div>
    )
}

export default Carrousel