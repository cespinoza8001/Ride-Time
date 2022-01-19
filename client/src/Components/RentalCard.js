import React, { useState, useEffect } from "react";
import { Card, CardGroup } from 'react-bootstrap'
import styled from 'styled-components'


function RentalCard({
  rental: { id, year, make, model, price, city, state, image_url, user_id },
}) {

    const [userInfo, setUserInfo] = useState("");

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
      {/* <button onClick={() => onFavorite(rental)} className={`emoji-button favorite ${favorite  ? "active" : ""}`}>
            {favorite ? "★" : "☆"}
          </button> */}
            {/* <button className="deleteButton" onClick={handleDeleteClick}>Delete</button> */}
        </Card.Body>    
    </Card>
    </CardGroup>
    </ListStyle>
    
  );
}

export default RentalCard;

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