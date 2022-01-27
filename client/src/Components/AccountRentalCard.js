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
    <Card border="dark" style={{ width: '25rem' }} className='cardColor'>
        <Card.Img src={image_url} alt="rentalimage" className="rental-image"/>
        <Card.Body>
          <Card.Title className='rental-info'>{year} {make} {model}</Card.Title>
          <Card.Text className='rental-location'>{city},{state}</Card.Text>
          <Card.Text className='rental-price'>${price}/day</Card.Text>
          <Card.Text className='rental-user'>{userInfo.username}</Card.Text>
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
      font-size: 25px;
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

    .rental-user {
      @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
      font-family: 'Josefin Sans', cursive;
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