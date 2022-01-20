import {useState, useEffect} from 'react'
import AccountRentalCard from "./AccountRentalCard"

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
        <div>
        <h3>Your Rentals:</h3>
            {renderRentals}
        </div>
    )
}

export default AccountRentalContainer;