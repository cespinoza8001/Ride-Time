import React, { useState, useEffect } from 'react';
import FavoritesContainer from './FavoritesContainer';
import styled from 'styled-components';



function FavoritesPage({ currentUser }) {
    const [userData, setUserData] = useState('')
   

    useEffect(() => {
        fetch(`api/me`)
        .then(resp => resp.json())
        .then(data => setUserData(data))
    }, [currentUser.id])


    if (!!userData === false) return <h3>Loading...</h3>

    return (
            <ContainerStyle>
                <h3 className='post-container'>Your Favorites:</h3>
                <FavoritesContainer currentUser={currentUser.id} />
            </ContainerStyle>
    );
  }
  
  export default FavoritesPage;


  const ContainerStyle = styled.div`
   
    

    .post-container {
        font-style: italic;
        letter-spacing: 1px;
        font-size: 60px;
        text-decoration: underline;
    }
      `
