import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledTitleLink = styled(Link)`
    text-decoration: none;
    color: white;
`

function Card({ title, id }) {

    return  (
        <div className="cardContainer">
            <StyledTitleLink to={`/location/${id}`}>
                <div className="cardContent">
                    <span>{title}</span>
                </div>
            </StyledTitleLink>            
        </div>
    )   
}

export default Card