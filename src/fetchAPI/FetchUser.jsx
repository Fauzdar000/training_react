
import React, { useEffect, useState } from 'react'

const FetchUser = () => {
    const [user, setuser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data)=> setuser(data))
        .catch((error) => console.log(error))
        
    },[])


  return (
    <div>
        <h1>
            Fetch User
        </h1>
        <ul >
            {user.map((user) =>
            ( <li key={user.id}>{user.name} , {user.email} , {user.address.street} , {user.phone} ,{user.company.name}</li> 

            ))}
        </ul>







    </div>
  )
}

export default FetchUser