import React from 'react'
import { useContext } from 'react'
import Message from './Message'

const ChildBcontext = () => {
    const {message} = useContext(Message)
  return (
    <div>
        <h2>Child B context</h2>
        <p>message : {message}</p>
    </div>
  )
}

export default ChildBcontext