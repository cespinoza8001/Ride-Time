import React, { useState, useEffect } from "react";
import { Card, CardGroup } from 'react-bootstrap'
import styled from 'styled-components'



function FavoritesCard({
    fav: {id, username, rental, user_id, rental_id}, currentUser
  }) {
    const [userInfo, setUserInfo] = useState("");
    const [rentalInfo, setRentalInfo] = useState("");
    const [isFavorited, setIsFavorited] = useState(true);
  
    useEffect(() => {
            fetch(`api/users/${user_id}`)
              .then((resp) => resp.json())
              .then((data) => {
                setUserInfo({
                  username: data.username,
                });
              });
      
      fetch(`api/rentals/${rental_id}`)
      .then(resp => resp.json())
      .then(data => {
          setRentalInfo({
              year: data.year,
              make: data.make,
              model: data.model,
              image_url: data.image_url,
              price: data.price,
              city: data.city,
              state: data.state,
              user_id: data.user_id
          })
      })
    }, [user_id]);
  
  
      const handleClick = () => {
        console.log('hello')
        fetch('api/favorites', {
          method: 'POST',
          headers: {"Content-Type": 'application/json'},
          body: JSON.stringify({
            user_id: currentUser,
            rental_id: rental_id 
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
            return (rental.user_id === currentUser) && (rental.rental_id === rental_id)
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

      return (
        <ListStyle>
        <CardGroup className="m-5 d-block">
        <Card border="dark" style={{ width: '25rem' }}>
            <Card.Img src={rentalInfo.image_url} alt="rentalimage" className="rental-image"/>
            <Card.Body>
              <Card.Title>{rentalInfo.year} {rentalInfo.make} {rentalInfo.model}</Card.Title>
              <Card.Text>Location: {rentalInfo.city},{rentalInfo.state}</Card.Text>
              <Card.Text>Price: ${rentalInfo.price}/day</Card.Text>
              {/* <Card.Text>User: {userInfo.username}</Card.Text> */}
              {isFavorited ? (
              <button
                onClick={((e) => handleUnfavorite(e))}
                className="emoji-button favorite active"
              >
                ★
              </button>
            ) : (
              <button id={id}
                onClick={handleClick}
                className="emoji-button favorite"
              >
                ☆
              </button>
            )}
            </Card.Body>    
        </Card>
        </CardGroup>
        </ListStyle>
        
      );
    }
    
    export default FavoritesCard;
    
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