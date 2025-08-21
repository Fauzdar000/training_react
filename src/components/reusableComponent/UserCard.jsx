
import React from 'react'
import './UserCard.css'
const UserCard = ({ name , age , email,image}) => {
  return (
    <div className="container">
    <div className='usercard' >
      <img src={image} alt="" />
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>



    </div>
    </div>


  )
}

export default UserCard