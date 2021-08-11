import {handleClickShow} from '../utils/function/event'

function Description({description}) {   

    return (
        <div className="descrWrapper">
            <div className="descr-header">
                <span>Description</span>
                <span id="chevron-descr" className="chevron top" onClick={handleClickShow}></span>
            </div>
            <div id="descrContent" className="descr-content">{description}</div>
        </div>
    )
}

export default Description