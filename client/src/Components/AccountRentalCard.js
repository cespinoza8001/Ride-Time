import React, { useState, useEffect } from "react";
import { Card, CardGroup } from 'react-bootstrap'
import styled from 'styled-components'
import EditRentalForm from "./EditRentalForm";


function AccountRentalCard({
  rental: { id, year, make, model, price, city, state, image_url, user_id }, currentUser
}) {

    const [userInfo, setUserInfo] = useState("");
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        console.log(user_id)
        fetch(`api/users/${user_id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setUserInfo({
              username: data.username,
            });
          });
      }, [user_id]);

      const handleClick = () => {
        console.log('hello')
        fetch('api/favorites', {
          method: 'POST',
          headers: {"Content-Type": 'application/json'},
          body: JSON.stringify({
            user_id: currentUser,
            rental_id: id 
          }),
        })
        .then(res => res.json())
        .then(() => {
          console.log('success')
          setIsFavorited(true)
        })
    }
  
      
  
      const handleUnfavorite = (e) => {
        fetch('api/favorites')
        .then(resp => resp.json())
        .then(data => {
  
          const var1 = data.filter(rental => {
            return (rental.user_id === currentUser) && (rental.id === id)
          })
          
          if (var1 !== []) {
            var1.forEach(fav => {
              fetch(`api/favorites/${fav.id}`, {
                method: 'DELETE'
              })
              .then(resp => resp.json())
              .then(data => window.location.reload(false))
          })
        }
      })
        setIsFavorited(false)
        
      }

      function handleDelete() {
        fetch(`api/rentals/${id}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(() => handleDelete(id))
      }

      console.log(id)
  return (
    <ListStyle>
    <CardGroup className="m-5 d-block">
    <Card border="dark" style={{ width: '25rem' }}>
        <Card.Img src={image_url} alt="rentalimage" className="rental-image"/>
        <Card.Body>
          <Card.Title>{year} {make} {model}</Card.Title>
          <Card.Text>Location: {city},{state}</Card.Text>
          <Card.Text>Price: ${price}/day</Card.Text>
          <Card.Text>User: {userInfo.username}</Card.Text>
            <button onClick={handleDelete}>🗑️</button>
            <EditRentalForm id={id}/>
        </Card.Body>    
    </Card>
    </CardGroup>
    </ListStyle>
    
  );
}

export default AccountRentalCard;

const ListStyle = styled.div`
    display: inline-block;
    padding: 5px;
    margin: 10px;
    text-align: center;
    background-color: #222;
    border-radius: 20px;
    animation-name: undoColorChange;
    animation-duration: 0.75s;
    @keyframes undoColorChange {
        from {background-color: #b742d4; transform: scale(1.05,1.05);}
        to {background-color: #222;}
      }
      
    @keyframes colorChange {
        from {background-color: #222;}
        to {background-color: #b742d4; transform: scale(1.05,1.05);}
      }

    .rental-image {
      height: 300px
    }
      `