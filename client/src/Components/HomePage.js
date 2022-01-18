import React from 'react'
import './HomePage.css'
import Button from './Button'


function HomePage(){
    return(
        <div className='home-container'>
            <img src='./images/RT-home-image.jpg' className='home-image'/>
            <h1 className='title'>Adventure Awaits</h1>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    GET STARTED
                </Button>
        </div>
    )
}


export default HomePage;