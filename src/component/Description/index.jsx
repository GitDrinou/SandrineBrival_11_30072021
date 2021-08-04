import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Description({description}) {
    return (
        <div className="descrWrapper">
            <div className="descr-header">
                <span>Description</span>
                <FontAwesomeIcon icon={faChevronDown} size="lg" style={{ color: '#FFFFFF' }} />
            </div>
            <div className="descr-content">{description}</div>
        </div>
    )
}

export default Description