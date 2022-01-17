import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import RentalContainer from './Components/RentalContainer';
import LoggedInApp from "./Components/LoggedInApp";
import LoggedOutApp from "./Components/LoggedOutApp";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  console.log(currentUser);
  useEffect(() => {
    fetch("api/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>;
  }


  return (
    <Router>
    <div className="App">
        {currentUser ? (
          <LoggedInApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <LoggedOutApp setCurrentUser={setCurrentUser} />
        )}
    </div>
    </Router>
  );
}

export default App;
