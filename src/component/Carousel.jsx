import '../sass/Carousel.scss'

function Carousel({id, cover, pictures}) {
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
                    pictures.map((picture, index) => 
                                <img key={index} src={picture} alt={picture} className="slidePicture" />
                    )    
                )}              
            </div>        
        </div>
    )
}

export default Carousel