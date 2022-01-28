import React, { useState, useEffect } from "react";
import { Card, CardGroup, Button } from 'react-bootstrap'
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
              .then(data => console.log(data))
          })
          window.location.reload(false)
        }
      })
        setIsFavorited(false)
        
      }

      return (
        <ListStyle>
        <CardGroup className="m-5 d-block">
        <Card border="dark" style={{ width: '25rem' }} className='cardColor'>
            <Card.Img src={rentalInfo.image_url} alt="rentalimage" className="rental-image"/>
            <Card.Body>
              <Card.Title className='rental-info'>{rentalInfo.year} {rentalInfo.make} {rentalInfo.model}</Card.Title>
              <Card.Text className='rental-location'>{rentalInfo.city},{rentalInfo.state}</Card.Text>
              <Card.Text className='rental-price'>${rentalInfo.price}/day</Card.Text>
              {isFavorited ? (
              <Button
                variant='danger'
                onClick={handleUnfavorite}
                className="emoji-button favorite active"
              >
                ★
              </Button>
            ) : (
              <Button id={id}
                variant='success'
                onClick={handleClick}
                className="emoji-button favorite"
              >
                ☆
              </Button> 
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
        background-color: ;
        border-radius: 15px;
        animation-name: undoColorChange;
        animation-duration: 0.75s;
        @keyframes undoColorChange {
            from {background-color: #42EDFF; transform: scale(1.05,1.05);}
            to {background-color: ;}
          }
          
        @keyframes colorChange {
            from {background-color: ;}
            to {background-color: #42EDFF; transform: scale(1.05,1.05);}
          }
    
        .rental-image {
          height: 300px
        }

        .rental-info {
          font-style: italic;
          letter-spacing: 1px;
          font-size: 23px;
          text-decoration: underline;
        }

        .rental-location {
          @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
          font-family: 'Josefin Sans', cursive;
          font-size: 20px;
        }

        .rental-price {
          @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
          font-family: 'Josefin Sans', cursive;
          font-size: 20px;
        }

        .cardColor {
           background-color: white;
           cursor: pointer;
        }

        .cardColor:hover {
          transform: scale(1.03);
          box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
        }
          `