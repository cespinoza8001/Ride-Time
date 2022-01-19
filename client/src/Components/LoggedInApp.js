import RentalContainer from "./RentalContainer";
import { Route, Routes } from "react-router-dom";
import HomePage from './HomePage'
import NewRentalForm from './NewRentalForm';
import LogOutPage from './LogOutPage';
import React, { useState } from 'react';
import NavigationBar from "./NavigationBar";
import FavoritesPage from "./FavoritesPage";





function LoggedInApp({ setCurrentUser, currentUser }) {

  const [search, setSearch] = useState("")

  function handleSearch(newSearch){
    console.log(newSearch)
    setSearch(newSearch)
  }


    const handleLogout = () => {
      setCurrentUser(null);
      fetch("api/logout", { method: "DELETE" });
    };
    return (
      <div>
      <NavigationBar/>
          <Routes>
        <Route
          exact
          path="/"
          element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
        />
        </Routes>
    <Routes>
        <Route
          exact
          path="/rentals"
          element={<RentalContainer currentUser={currentUser} search={search} onSearch={handleSearch}/>}
        />
        </Routes>
      <Routes>
        <Route
          exact
          path="/newrental"
          element={<NewRentalForm currentUser={currentUser} />}
        />
        </Routes>
        <Routes>
        <Route
          exact
          path="/favorites"
          element={<FavoritesPage currentUser={currentUser} />}
        />
        </Routes>
      <Routes>
        <Route
          exact
          path="/logout"
          element={<LogOutPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
        />
        </Routes>
      </div>
    );
  }
  
  export default LoggedInApp;