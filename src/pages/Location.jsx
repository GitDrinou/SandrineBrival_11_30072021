import { useParams } from 'react-router-dom'
import Carrousel from '../component/Carrousel'
import Rating from '../component/Rating'
import Description from '../component/Description'
import { useFetch } from '../utils/hooks'
import Equipment from '../component/Equipment'

function Location() {

    const { idLocation } = useParams()
    const { data } = useFetch('../datas/data.json')
    const myLocation = data?.filter(loc => loc.id === idLocation)
    
    return(
        <div className="locationWrapper">
            {myLocation && myLocation.map((location, index) => (
                <div  key={`${location.title}-${index}`} className="locationContainer">
                    <Carrousel 
                        id = {idLocation}
                        cover = {location.cover}
                        pictures = {location.pictures}
                    />
                    <div className="location-header">
                        <div className="location-header-info">
                            <h1>{location.title}</h1>
                            <span>{location.location}</span> 
                        </div>                       
                        <div className="location-header-host">
                            <span>{location.host['name']}</span>
                            <img src={location.host['picture']} alt="Hôte illustration" />
                        </div>                        
                    </div>
                    <div className="location-header-tagsRates">
                        <div className="tagsList">
                            <ul>
                                { 
                                    location['tags'].map((tag, index) => (
                                        <li key={`${index}-${idLocation}`}>{tag}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Rating rating={parseInt(location.rating)} />
                    </div>  
                    <div className="location-content">
                        <Description description={location['description']} />
                        <Equipment equipment={location['equipments']} />
                    </div>                
                </div>
                        
            ))}
        </div>
        
    )
}

export default Location