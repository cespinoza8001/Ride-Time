import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import NavigationBar from './NavigationBar'

function NewRentalForm({ currentUser }) {

    const [rentalData, setRentalData] = useState({
        year: "",
        make: "",
        model: "",
        image_url: '',
        price: "",
        city: "",
        state: "",
        user_id: currentUser.id
    })

    const [isSelected, setIsSelected] = useState(false)


    const handlePost = (e) => {
        e.preventDefault()
        console.log(rentalData)
        
        fetch('api/list', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(rentalData),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        setIsSelected(false)
        window.location.reload(false)
        
    }

    const handleChange = (e) => {
        setRentalData({
            ...rentalData,
            [e.target.id]: e.target.value,
        })
    }

    return (
        <React.Fragment>
        <div>
            <FormStyle>
            <form className="post-form" onSubmit={handlePost}>
            <h2>Rent Your Bike!</h2>
            <label>
                Year:
                <input
                type="text"
                id="year"
                placeholder="Model Year"
                value={rentalData.year}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Make:
                <input
                id="make"
                placeholder="Your Bike's Make"
                value={rentalData.make}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Model:
                <input
                id="model"
                placeholder="Your Bike's Model"
                value={rentalData.model}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Image URL:
                <input
                type="text"
                id="image_url"
                placeholder="Give an image link"
                value={rentalData.image_url}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                Price:
                <input
                type="text"
                id="price"
                placeholder="Price per day"
                value={rentalData.price}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                City:
                <input
                id="city"
                placeholder="Enter Your City"
                value={rentalData.city}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <label>
                State:
                <input
                id="state"
                placeholder="Enter Your State"
                value={rentalData.state}
                onChange={(e) => handleChange(e)}
                required
                />
            </label>
            <button type="submit">List For Rent!</button>
            </form>
        </FormStyle>
        </div>
        </React.Fragment>
    )
}

export default NewRentalForm;

const FormStyle = styled.div`
display: flex;
justify-content: center;
    h2 {
        font-size: 24px;
        margin: 2px;
    }
    form {
        width: 40%;
        margin: 10px;
        padding: 10px;
        border-radius: 15px;
        background-color: black;
        color: white;
        font-weight: bold;
        box-shadow: 7px 7px grey;
    }
    label {
        font-size: 16px;
        justify-content: left;
    }
    textarea {
        resize: none;
        display: block;
        margin: auto;
        width: 90%;
        height: 120px;
        font-family: arial;
        border-radius: 5px;
        position: relative;
        right: 5px;
        padding: 5px;
    }
    input {
        display: block;
        justify-content: center;
        /* margin: auto; */
        margin: 0px;
        position: relative;
        left: 20px;
        width: 90%;
        font-family: arial;
        border-radius: 5px;
        font-size: 12px;
        text-shadow: none;
        height: 20px;
        background-color: white;
        padding: 5px;
    }
    #img {
        text-align-last: center;
        margin: auto;
        padding: 5px;
        font-weight: bold;
    }
    button {
        background-color: white;
        border: none;
        color: black;
        font-weight: bold;
        padding: 8px 16px;
        border-radius: 10px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
      }
`

const ButtonStyle = styled.div`
    
button {
    background-color: black;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    margin: 9px 6px;
    cursor: pointer;
    box-shadow: 5px 5px grey;
    position: relative;
    bottom: 25px;
}
`