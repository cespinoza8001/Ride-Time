import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import RentalContainer from './Components/RentalContainer';
import LoggedInApp from "./Components/LoggedInApp";
import LoggedOutApp from "./Components/LoggedOutApp";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import HomePage from './Components/HomePage'
import NewRentalForm from './Components/NewRentalForm';

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
    <React.Fragment>
    <NavigationBar/>
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
    <Routes>
        <Route
          exact
          path="/home"
          element={<HomePage currentUser={currentUser} />}
        />
        </Routes>
    <Routes>
        <Route
          exact
          path="/rentals"
          element={<RentalContainer currentUser={currentUser} />}
        />
        </Routes>
      <Routes>
        <Route
          exact
          path="/newrental"
          element={<NewRentalForm currentUser={currentUser} />}
        />
        </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
