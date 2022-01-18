import RentalContainer from "./RentalContainer";
import { Route, Routes } from "react-router-dom";


function LoggedInApp({ setCurrentUser, currentUser }) {
    const handleLogout = () => {
      setCurrentUser(null);
      fetch("api/logout", { method: "DELETE" });
    };
    return (
      <div>
          <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }
  
  export default LoggedInApp;