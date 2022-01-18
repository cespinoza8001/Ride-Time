import React, { useState, useEffect } from "react";
import { Card, Row, Col } from 'react-bootstrap'

function RentalCard({
  rental: { id, year, make, model, price, city, state, image_url, user_id },
}) {

    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        console.log(user_id)
        fetch(`api/users/${user_id}`)
          .then((resp) => resp.json())
          .then((data) => {
              console.log(data)
            setUserInfo({
              username: data.username,
            });
          });
      }, [user_id]);

  return (
    <Card border="dark" style={{ width: '20rem'}}>
        <Card.Img src={image_url} alt="rentalimage"/>
        <Card.Body>
          <Card.Title>{year} {make} {model}</Card.Title>
          <Card.Text>Location: {city},{state}</Card.Text>
          <Card.Text>Price: ${price}/day</Card.Text>
          <Card.Text>User: {userInfo.username}</Card.Text>
      {/* <button onClick={() => onFavorite(listing)} className={`emoji-button favorite ${favorite  ? "active" : ""}`}>
            {favorite ? "★" : "☆"}
          </button>
          <div>
            <button className="deleteButton" onClick={handleDeleteClick}>Delete</button> */}
        </Card.Body>    
    </Card>
    
  );
}

export default RentalCard;
