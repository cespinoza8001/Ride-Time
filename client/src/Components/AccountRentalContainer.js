import {useState, useEffect} from 'react'
import AccountRentalCard from "./AccountRentalCard"
import styled from 'styled-components';

function AccountRentalContainer({ currentUser }) {

    const [rentals, setRentals] = useState([])

    
    useEffect(() => {
            fetch(`api/rentals`)
            .then(resp => resp.json())
            .then((rentals) => {
                setRentals(rentals.filter(rental => {
                    return rental.user_id === currentUser.id
                }))
            })
    }, [])


    // const filteredPosts = posts.filter(post => {
    //     return post.header.includes(search)
    // });

    const renderRentals = rentals.map(rental => {

        return <AccountRentalCard key={rental.id} rental={rental} currentUser={currentUser}/>
    })



    return (
        <ContainerStyle>
        <h3 className='my-rentals'>Your Rentals:</h3>
            {renderRentals}
        </ContainerStyle>
    )
}

export default AccountRentalContainer;

const ContainerStyle = styled.div`
   
    background-color: ;

    .my-rentals {
        font-style: italic;
        letter-spacing: 1px;
        font-size: 60px;
        text-decoration: underline;
    }
      `