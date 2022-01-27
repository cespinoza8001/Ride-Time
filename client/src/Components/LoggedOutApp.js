import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './LoginPage.css'
import styled from 'styled-components'

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function LoggedOutApp({ setCurrentUser }) {
  return (
    <div className='login-container'>
    <img src='./images/nightbike.jpg' className='login-image'/>
    <LoginStyle>
    <h1>RideTime</h1>
    </LoginStyle>
      <Routes>
        <Route
          exact
          path="/"
          element={<LoginForm setCurrentUser={setCurrentUser} />}
        />

        <Route
          exact
          path="/signup"
          element={<SignupForm setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </div>
  );
}

export default LoggedOutApp;

const LoginStyle = styled.div`

  h1 {
    color: #fff;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
    font-style: italic;
    letter-spacing: 1px;
    font-size: 120px;
    text-decoration: underline;
    margin: auto;
    padding: 5px;
    display: block;
    font-weight: bold;
    display: center;
    flex-direction: column;
    align-items: center;
    height: 1vh;
    animation: pulsate 2.5s infinite alternate; 
  }

  @keyframes pulsate {
  100% {
    /* Larger blur radius */
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa;
  }
  0% {
    /* Smaller blur radius */
    text-shadow:
      0 0 2px #fff,
      0 0 4px #fff,
      0 0 6px #fff,
      0 0 10px #0fa,
      0 0 45px #0fa,
      0 0 55px #0fa,
      0 0 70px #0fa,
      0 0 80px #0fa;
  }
}

`
