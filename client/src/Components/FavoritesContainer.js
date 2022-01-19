import React, { useState, useEffect } from 'react';
import FavoritesCard from './FavoritesCard';



function FavoritesContainer({ currentUser }) {

    const [rentals, setRentals] = useState([])

    useEffect(() => {
        fetch('api/favorites')
        .then(resp => resp.json())
        .then((rentals) => {
            const favs = rentals.filter(rental => rental.user_id === currentUser)
            setRentals(favs)
        })
    }, [])

    const renderPosts = rentals.map(fav => {
        return <FavoritesCard key={fav.id} fav={fav} currentUser={currentUser}/>
    })



    return (
        <div>
            {renderPosts}
        </div>
    )
}


export default FavoritesContainer;