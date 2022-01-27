import React, { useState, useEffect } from 'react';
import RentalCard from "./RentalCard"
import SearchBar from './SearchBar';






function RentalContainer({ search, onSearch, currentUser }){
    
    const [rentals, setRentals] = useState([])

    useEffect(() => {
        fetch('api/rentals')
        .then(resp => resp.json())
        .then((rentals) =>{
            setRentals(rentals)
        })
      }, [])

      const filteredRentals = rentals.filter(rental => {
        return rental.city.toLowerCase().includes(search.toLowerCase())
    });

      const renderRentals = filteredRentals.map(rental => {
          return <RentalCard key={rental.id} rental={rental} currentUser={currentUser.id}/>
      })


      return(
          <div>
          <SearchBar onSearch={onSearch}/>
              {renderRentals}
            </div>   
      )
}

export default RentalContainer;


