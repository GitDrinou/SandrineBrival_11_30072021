import { useState, useEffect } from 'react'
import Card from '../Card'

function Gallery() {

    const [data, setData] = useState([])

    const getData = () => {
        fetch('./datas/data.json',
        { headers : 
            {
                'Content-type': 'application/json',
                'Accept' : 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                response.json().then( function(myJson) {
                    console.log(myJson)
                    setData(myJson)
                })
            } else {
                console.log(response.status)
                const errorMsg = `${response.status} : ${response.statusText}`
                return <div className='error'>{errorMsg}</div>
            }
        })
    }

    useEffect(() => {
        getData()
    }, [])

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