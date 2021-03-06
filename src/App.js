import React, {useState} from 'react'
import './index.css';
import {Gallery} from './components/Gallery';
import SearchPhotos from './components/SearchPhotos';
import Pagination from './components/Pagination'
import styled from 'styled-components'

const Header = styled.header`
  height: 30rem;
  display: flex;
  justify-content: center;
  background: #282c34;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

const Title = styled.h1`
  font-size: 4.5rem;
  font-family: 'Montserrat';
  padding: 0;
  color: #fff;
  @media (max-width: 768px){
    text-align: center;
}
`
const SubTitle = styled.h2`
  margin-top: -2rem;
  margin-bottom: 3rem;
  color: #fff;
  font-family: 'Montserrat';
`
const GalleryContainer = styled.div`
  column-count: 3;
  column-gap: 0.2rem; 
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  background: #282c34;
`


const clientId = '8898219ed3a1348f7824ed49c81895f8e31b0ac598e39e7337b2d34d6ede8c1f';


const App = () => {
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1)
  const [searchPhoto, setSearchPhoto] = useState("");
  const [result, setResult] = useState([]);
  console.log(result)

const onInputChange = (event) => {
  setSearchPhoto(event.target.value)
}

const handleSearch = (event) => {
  event.preventDefault()
  fetch(`https://api.unsplash.com/search/photos?per_page=40&query=${searchPhoto}&client_id=${clientId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(result)
          setResult(json.results);
          setTotalResults(json.total)
      })
    }


  const nextPage = (pageNumber) => {
      fetch(`https://api.unsplash.com/search/photos?per_page=40&query=${searchPhoto}&client_id=${clientId}&page=${pageNumber}`)
      .then(res => res.json())
        .then(json => {
          setResult(json.results);
          setCurrentPage(pageNumber)
  
        });
    }

    const numberPages = Math.floor(totalResults / 20);

    return (
      <div className="App">
        <Header>
          <Container>
            <Title>Find your favorite image</Title>
            <SubTitle>The sky is the limit</SubTitle>
            <SearchPhotos handleSearch={handleSearch} onInputChange={onInputChange} searchPhoto={searchPhoto} result={result} alt={result.alt_description} />
          </Container>
        </Header>

      
        <GalleryContainer>
            {result.map((photo) => (
              <div key={photo.id}>
                <Gallery 
                photo={photo.urls.regular} 
                photographer={photo.user.name} 
                title={photo.description}
                profileImg={photo.user.profile_image.medium}
                portfolio={photo.user.portfolio_url}/>
              </div>
              ))}
        </GalleryContainer>
    
        
        <PaginationContainer>
            {totalResults > 20 ? <Pagination pages={numberPages} nextPage={nextPage} currentPage={currentPage}/> : ""}

        </PaginationContainer>
      </div>
    );
}

export default App;
