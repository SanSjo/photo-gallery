import React from 'react';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
    @media (max-width: 768px){
        width: 15rem;
        margin-bottom: 2rem;
    }
`
const Input = styled.input`
    font-size: 1.6rem;
    padding: 0.5rem 2rem;
    line-height: 2.8rem;
    border-radius: 20px;
    background-color: white;
    margin-bottom: 2rem;
    width: 40rem;
    &:focus {
        outline: none !important;
    }
    @media (max-width: 768px){
        width: 10rem;
    }
`
const Button = styled.button`
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 1rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 40px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: background-color 250ms;
    margin-bottom: 2rem;
    &:hover {
        background-color: pink;
    }
`
const SearchPhotos = (props) => {
    return (
      <>
        <Form onSubmit={props.handleSearch}> 
          <Input
            type="text"
            name="text"
            placeholder="Search photo..."
            value={props.searchPhoto}
            onChange={props.onInputChange}
            autoComplete="off"
          />
          <Button type="submit" >
          <i class="fas fa-search"></i>
          </Button>
        </Form>
      </>
    );
  }

  export default SearchPhotos;