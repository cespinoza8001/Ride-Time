import React, { useState, useEffect } from "react";

function RentalCard({
  rental: { id, year, make, model, cc, image_url, user_id },
}) {

    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        fetch(`api/users/${user_id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setUserInfo({
              username: data[0].username,
            });
          });
      }, [user_id]);

  return (
    <div>
      <div>
        <img src={image_url} alt="rentalimage" width="500" height="400" />
        <div>
          <h4>
            {year}, {make}, {model}
          </h4>
          <h4>CC: {cc}</h4>
          <h4>{userInfo.username}</h4>
        </div>
      </div>
      {/* <button onClick={() => onFavorite(listing)} className={`emoji-button favorite ${favorite  ? "active" : ""}`}>
            {favorite ? "★" : "☆"}
          </button>
          <div>
            <button className="deleteButton" onClick={handleDeleteClick}>Delete</button> */}
    </div>
    // </div>
  );
}

export default RentalCard;
