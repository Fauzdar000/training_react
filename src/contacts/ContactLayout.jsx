import React from 'react'
import { Outlet } from 'react-router-dom'

const ContactLayout = () => {
  return (
    <div>
        <h1>contact</h1>
        <Outlet/>
    </div>
  )
}

export default ContactLayout