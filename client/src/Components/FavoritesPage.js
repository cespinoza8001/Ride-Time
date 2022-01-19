import React, { useState, useEffect } from 'react';
import FavoritesContainer from './FavoritesContainer';



function FavoritesPage({ currentUser }) {
    const [userData, setUserData] = useState('')
   

    useEffect(() => {
        fetch(`api/me`)
        .then(resp => resp.json())
        .then(data => setUserData(data))
    }, [currentUser.id])


    if (!!userData === false) return <h3>Loading...</h3>

    return (
            <div className="post-container">
                <h3>Your Favorites:</h3>
                <FavoritesContainer currentUser={currentUser.id} />
            </div>
    );
  }
  
  export default FavoritesPage;