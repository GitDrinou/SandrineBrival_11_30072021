/**
 * handleClickShow function
 * @param {DOM element} 
 *  using switch to display the right content
 */

export function handleClickShow(e) {
   const elt = e.target
    const eltId = elt.getAttribute("id").split('-')[1]  
    console.log(eltId)
    // for Debugg : console.log(eltId.split('-')[1])  
        
    if (elt.classList.contains('top')) {
        elt.classList.replace('top', 'bottom')
        document.getElementById(`${eltId}Content`).style.display='block'
    }
    else {
        elt.classList.replace('bottom', 'top')            
        document.getElementById(`${eltId}Content`).style.display='none'
    }
}
