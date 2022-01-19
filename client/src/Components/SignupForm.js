import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

function SignupForm({ setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("api/signup", configObj).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          console.log(user);
          setCurrentUser(user);
        });
      } else {
        resp.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <SignUpStyle>
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <p>
          <label htmlFor="username">Username </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </p>
        <p>
          <button type="submit">Sign Up</button>
        </p>
        <p>Have an account?</p>
        <p>
          <Link to="/">Log In</Link>
        </p>
      </form>
    </SignUpStyle>
  );
}

export default SignupForm;


const SignUpStyle = styled.div`
display: flex;
justify-content: center;
  h1 {
    font-size: 40px;
    margin: 2px;
  }
  form {
    width: 30%;
    margin: 250px;
    padding: 10px;
    border: 5px solid palevioletred;
    border-radius: 10px;
  }
  label {
    font-size: 20px;
    justify-content: left;
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
        height: 50px;
        background-color: white;
        padding: 5px;
    }
`