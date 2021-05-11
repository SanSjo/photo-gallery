import React from "react";
import styled from 'styled-components'

const Image = styled.img`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: transform .2s;
    width: 100%;
    height: auto;
    padding: 0.2rem;
    opacity: 1;

`

export const Gallery = (props) => {

    return (
    
            <>
            <Image src={props.photo} alt={props.alt} style={{
            backgroundImage: `url(${props.photo})`}} />
            </>
    
    )
}