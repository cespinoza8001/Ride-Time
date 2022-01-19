import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";

function LogOutPage({ setCurrentUser, currentUser }){

    const handleLogout = () => {
        setCurrentUser(null);
        fetch("api/logout", { method: "DELETE" });
      };

      const navigate = useNavigate();

      const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
      }


    return(
        <React.Fragment>
        {/* <NavigationBar/> */}
        <div className='home-container'>
            <img src='./images/RT-home-image.jpg' className='home-image'/>
            <h1 className='title'>Thank you for visiting!</h1>
            <button onClick={() => {
          handleLogout();
          routeChange();
        }}>Logout</button>
        </div>
        </React.Fragment>
    )
}


export default LogOutPage;