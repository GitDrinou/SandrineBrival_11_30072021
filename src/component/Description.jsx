import {handleClickShow} from '../utils/function/event'

/**
 * Description component
 * @param {props} description
 * @returns the location description
 * using handleClickShow function for displaying or not the content. By default content is not displayed.
 */

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