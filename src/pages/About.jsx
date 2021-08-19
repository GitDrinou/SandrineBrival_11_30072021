import React, { Component } from 'react'
import '../sass/About.scss'
import { handleClickShow } from '../utils/function/event'

/**
 * About component
 * @returns the about page 
 * using handleClickShow function to display or not the content. By default all block are not diplayed.
 */

class About extends Component {
      render() {  
         return (
            <div className="aboutWrapper">
               <div className='aboutContainer'>           
                     <div className="brandContainer-about"></div>
                     <div className="reliab-header">
                        <span>Fiabilité</span>
                        <span id="chevron-reliab" className="chevron top" onClick={handleClickShow}></span> 
                     </div>
                     <div className="reliab-content" id='reliabContent'>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
                     <div className="resp-header">
                        <span>Respect</span>
                        <span id="chevron-resp" className="chevron top" onClick={handleClickShow}></span> 
                     </div>
                     <div id="respContent" className="resp-content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div>
                     <div className="serv-header">
                        <span>Service</span>
                        <span id="chevron-serv" className="chevron top" onClick={handleClickShow}></span> 
                     </div>
                     <div id="servContent" className="serv-content">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</div>
                     <div className="secu-header">
                        <span>Securité</span>
                        <span id="chevron-secu" className="chevron top" onClick={handleClickShow}></span> 
                     </div>
                     <div id="secuContent" className="secu-content">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</div> */}
               </div>
            </div>        
         )
      }
}

export default About