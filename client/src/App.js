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
    fetch("api/users", {
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
    <div className="App">
    <Router>
        {currentUser ? (
          <LoggedInApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
        ) : (
          <LoggedOutApp setCurrentUser={setCurrentUser} />
        )}
      </Router>
    </div>
  );
}

export default App;
