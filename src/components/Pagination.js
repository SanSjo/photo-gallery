import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 1rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 20px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: background-color 250ms;
    margin: 5rem;
    &:hover {
        background-color: pink;
    }
    @media (max-width: 768px){
        margin: 1rem;
    }
`
export const Pagination = (props) => {
    return(
        <div>
            <div className="pagination-buttons-container">
                {props.currentPage > 1 ? <Button onClick={() => props.nextPage(props.currentPage - 1)}>Previous</Button> : ""}

                {props.currentPage < props.pages + 1 ? <Button onClick={() => props.nextPage(props.currentPage + 1)}>Next</Button> : ""}
            </div>
        </div>
    )
}

export default Pagination