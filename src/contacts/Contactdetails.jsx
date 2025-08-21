import React from 'react'
import { Contacts } from './ContactData'
import { useNavigate, useParams } from 'react-router-dom'


const Contactdetails = () => {
  const { contactId } = useParams();
    const contact = Contacts.find((contact) => contact.id === parseInt(contactId));
    const navigate = useNavigate();
const HandleClick =()=>{
  navigate('/contact');

}

  return (
    <div>
        <h1>Id: {contact.id}</h1>
         <h1>Id: {contact.name}</h1>
          <h1>Id: {contact.email}</h1>
          <button onClick={HandleClick} >go back</button>

    </div>
  )
}

export default Contactdetails