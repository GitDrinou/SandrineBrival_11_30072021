import { useParams } from 'react-router-dom'
import Carrousel from '../../component/Carrousel'
import { useFetch } from '../../utils/hooks'

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
                    />
                    <div class="location-header">
                        <h1>{location.title}</h1>
                        <div className="location-header-host"></div>
                    </div>                    
                </div>
                        
            ))}
        </div>
        
    )
}

export default Location