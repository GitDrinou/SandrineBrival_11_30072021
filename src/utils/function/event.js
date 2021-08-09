
export function handleClickShow(e) {
    const elt = e.target
    const eltId = elt.getAttribute("id")  
    console.log(eltId.split('-')[1])  
    let txtContent =""
    switch (eltId.split('-')[1]) {
        case "descr":
            txtContent = document.getElementById('descrContent')
            break;
        case "equip":
            txtContent = document.getElementById('equipContent')
            break;  
        case "reliab":
            txtContent = document.getElementById('reliabContent')
            break;    
        case "resp":
            txtContent = document.getElementById('respContent')
            break;            
        case "serv":
            txtContent = document.getElementById('servContent')
            break;                    
        case "secu":
            txtContent = document.getElementById('secuContent')
            break;   
        default:
            break;
    }

    e.preventDefault()
    
    if (elt.classList.contains('top')) {
        elt.classList.replace('top', 'bottom')
        txtContent.style.display='block'
    }
    else {
        elt.classList.replace('bottom', 'top')            
        txtContent.style.display='none'
    }
}
