import React, { useState, useEffect } from 'react';
import RentalCard from "./RentalCard"
import SearchBar from './SearchBar';
import NavigationBar from './NavigationBar';
import styled from 'styled-components';



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
          <ContainerStyle>
          <SearchBar onSearch={onSearch}/>
              {renderRentals}
          </ContainerStyle>
      )
}

export default RentalContainer;

const ContainerStyle = styled.div`
   
    background-color: grey;
      `