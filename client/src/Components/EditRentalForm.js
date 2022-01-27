import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

function EditRentalForm({currentUser, setCurrentUser, id}) {

    const [editData, setEditData] = useState({
        year: "",
        make: "",
        model: "",
        city: "",
        state: "",
        image_url: "",
        price: ""
    })

    // useEffect(() => {
    //     fetch(`http://localhost:9292/users/${loginId.loginId}`)
    //     .then(resp => resp.json())
    //     .then(data => setEditData(data[0]))
    // }, [loginId])
    
    const [isSelected, setIsSelected] = useState(false)

    const handleNewEditClick = () => {
        setIsSelected(true)
    }

    const handleEdit = (e) => {
        e.preventDefault()
        console.log(id)
        fetch(`api/rentals/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(editData),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))

        setIsSelected(false)
        setEditData({
            year: "",
            make: "",
            model: "",
            city: "",
            state: "",
            image_url: "",
            price: ""
        })
        window.location.reload(false)
    }

    const handleChange = (e) => {
            setEditData({
                ...editData,
                [e.target.id]: e.target.value
            })
    }

    return (
        <div>
            <div>
        {isSelected ? 
            <LoginStyle>
            <form className="edit-form" onSubmit={handleEdit}>
            <h2>Edit Your Rental!</h2>
            <label>
                Year:
                <input
                type="text"
                className="fix"
                id="year"
                placeholder="Update the year..."
                value={editData.year}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Make:
                <input
                type="text"
                id="make"
                className="fix"
                placeholder="Update the make..."
                value={editData.make}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Model:
                <input
                type="text"
                id="model"
                placeholder="Update the model..."
                value={editData.model}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                City:
                <input
                type="text"
                id="city"
                placeholder="Update your City..."
                value={editData.city}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                State:
                <input
                id="state"
                placeholder="Update your State..."
                value={editData.state}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Price:
                <input
                id="price"
                placeholder="Update the price..."
                value={editData.price}
                onChange={(e) => handleChange(e)}
                />
            </label>
            <label>
                Rental Image:
                <input
                type="text"
                id="image_url"
                placeholder="Update your bikes image..."
                onChange={(e) => handleChange(e)}
                />
            </label>
            <button type="submit">Share!</button>
            </form>
            </LoginStyle>
        :
        <EditButtonStyle>
            <button onClick={handleNewEditClick}>Edit Your Rental</button>
        </EditButtonStyle>
        
        }
        </div>
        </div>
    )
}

export default EditRentalForm


const EditButtonStyle = styled.div`
    
button {
    background-color: #222;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px 24px;
    border-radius: 10px;
    text-decoration: none;
    margin: 20px 20px;
    cursor: pointer;
    box-shadow: 5px 5px grey;
}
`
const LoginStyle = styled.div`
display: flex;
justify-content: center;
  h2 {
    font-size: 20px;
    margin: 1px;
  }
  form {
    width: 100%;
    margin: 5px;
    padding: 5px;
    border: 3px solid black;
    border-radius: 5px;
    background-color: lightgrey;
  }
  label {
    font-size: 25px;
    justify-content: left;
  }
  input {
        display: block;
        justify-content: center;
        /* margin: auto; */
        margin: 30px;
        position: relative;
        left: 20px;
        width: 70%;
        font-family: arial;
        border-radius: 5px;
        font-size: 15px;
        text-shadow: none;
        height: 25px;
        background-color: white;
        padding: 5px;
    }
    button {
        background-color: black;
        border: none;
        color: white;
        font-weight: bold;
        padding: 12px 16px;
        border-radius: 10px;
        text-decoration: none;
        margin: 15px 2px;
        cursor: pointer;
      }
`