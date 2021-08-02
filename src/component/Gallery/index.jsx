import { useFetch } from '../../utils/hooks'
import Card from '../Card'

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