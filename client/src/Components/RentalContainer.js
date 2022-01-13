import React, { useState, useEffect } from 'react';
import RentalCard from "./RentalCard"


function RentalContainer(){
    
    const [rentals, setRentals] = useState([])

    useEffect(() => {
        fetch('api/rentals')
        .then(resp => resp.json())
        .then((rentals) =>{
            setRentals(rentals)
        })
      }, [])

      const renderRentals = rentals.map(rental => {
          return <RentalCard key={rental.id} rental={rental} />
      })


      return(
          <div>
              {renderRentals}
          </div>
      )
}

export default RentalContainer;