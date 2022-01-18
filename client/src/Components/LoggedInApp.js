import RentalContainer from "./RentalContainer";
import { Route, Routes } from "react-router-dom";


function LoggedInApp({ setCurrentUser, currentUser }) {
    const handleLogout = () => {
      setCurrentUser(null);
      fetch("api/logout", { method: "DELETE" });
    };
    return (
      <div>
        Welcome {currentUser.username}!
        <p>
          <button onClick={handleLogout}>Logout</button>
        </p>
        {/* <Routes>
        <Route
          exact
          path="/rentals"
          element={<RentalContainer currentUser={currentUser} />}
        />
        </Routes> */}
      </div>
    );
  }
  
  export default LoggedInApp;