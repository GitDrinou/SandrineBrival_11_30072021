import '../sass/Gallery.scss'
import { useFetch } from '../utils/hooks/useFetch'
import Card from './Card'

/**
 * Gallery component
 * @returns a list of location card
 * using personalized hooks useFetch for data to display
 */

function Gallery() {

    const { data } = useFetch('./datas/data.json')

    return (
        <div className="galleryContainer">
            {data && data.map((location, index) => (
                <Card 
                    key={`${location.title}-${index}`}
                    title={location.title}
                    id= {location.id}
                />
            ))}

        </div>
    )
}

export default Gallery