import '../sass/Home.scss'
import Gallery from '../component/Gallery'

/**
 * Home component
 * @returns the home page
 * using Galeery component
 */

function Home() {  
    return (
        <div className="homeWrapper">
            <div className='homeContainer'>           
                <div className="brandContainer">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
                <Gallery />
            </div>
       </div>        
    )
}

export default Home