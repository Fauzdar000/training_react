import React from 'react'
import { useContext } from 'react'
import Message from './Message'
const ChildAcontext = () => {
    const {context,setMessage} = useContext(Message)

  return (
    <div>
      <h1>Child A {context}</h1>
      <button onClick={() => setMessage("Message updated from child A Context")} > update message

      </button>

    </div>
  )
}

export default ChildAcontext