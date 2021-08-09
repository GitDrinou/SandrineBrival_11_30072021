import {handleClickShow} from '../../utils/function/event'

function Equipment({equipment}) {
    return (
        <div className="equipWrapper">
            <div className="equip-header">
                <span>Equipements</span>
                <span id="chevron-equip" className="chevron top" onClick={handleClickShow}></span>
            </div>
            <div className="equip-content" id="equipContent">
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