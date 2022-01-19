import React from 'react'
import './HomePage.css'
import Button from './Button'
import NavigationBar from './NavigationBar'


function HomePage({ currentUser, setCurrentUser }){
    return(
        <React.Fragment>
        <div className='home-container'>
            <img src='./images/RT-home-image.jpg' className='home-image'/>
            <h1 className='title'>Adventure Awaits</h1>
            <h3>View rentals in your area</h3>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
        </div>
        </React.Fragment>
    )
}


export default HomePage;