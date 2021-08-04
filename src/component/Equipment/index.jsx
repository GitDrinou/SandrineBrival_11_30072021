import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Equipment({equipment}) {
    return (
        <div className="equipWrapper">
            <div className="equip-header">
                <span>Equipements</span>
                <FontAwesomeIcon icon={faChevronDown} size="lg" style={{ color: '#FFFFFF' }} />
            </div>
            <div className="equip-content">
                <ul>
                    {equipment.map((eq, index) => 
                        <li key={index}>
                            {eq}
                        </li>
                    )}
                </ul>                
            </div>
        </div>
    )
}

export default Equipment