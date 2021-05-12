import React from "react";
import styled from 'styled-components'


const ImageContainer = styled.div`
    height: 25rem;
    width: 100%;
    background: rgba(12, 12, 12, 0.756);
    opacity: 1;
    position: relative;
    bottom: 0%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   
`

const Text = styled.a`
    display: flex;
    align-items:center;
    justify-content: center;
    padding: 2rem;
    opacity: 0;
    height: 25rem;
    margin: 0;
    text-decoration: none;
    color: #000;
    font-family: 'Montserrat';
    z-index: 2;
    background: rgba(12, 12, 12, 0.400);
    &:hover {
        opacity: 1;
    }

   
`
const ProfileImg = styled.img`
    border-radius: 100%;
    margin-right: 1rem;
`


export const Gallery = (props) => {
    return (

            <div>
                <ImageContainer  style={{backgroundImage: `url(${props.photo})`}} >      
                    <Text href={props.portfolio}>
                        <ProfileImg src={props.profileImg}></ProfileImg>{" "}{props.photographer} 
                    </Text>        
                </ImageContainer>
            </div>
    
    )
}