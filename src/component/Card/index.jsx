import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledTitleLink = styled(Link)`
    text-decoration: none;
    color: white;
`

function Card({ title, id }) {
    return  (
        <div className="cardContainer">
            <div className="cardContent">
                <StyledTitleLink to="/location/"><span>{title}</span></StyledTitleLink>
            </div>            
        </div>
    )   
}

export default Card