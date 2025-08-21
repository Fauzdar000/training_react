import React from 'react'
import Message from './Message'
import ChildAcontext from './ChildAcontext'
import ChildBcontext from './ChildBcontext'

const ParentContext = () => {
    const [message,setMessage] = React.useState("Hello from parent Context")
  return (

    <Message.Provider value={{message,setMessage}}>

        <div 
        style={{
            backgroundColor:"#f4f4f4",
         padding:"20px"
        }}
        >

            <ChildAcontext/>
            <ChildBcontext/>



    </div>
    </Message.Provider>
    
  )
}

export default ParentContext