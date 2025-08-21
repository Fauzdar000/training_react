import React from 'react'

const ChildA = ({setMessage}) => {
  return (
    <div>
<h2>Child A</h2>
<button onClick={()=>setMessage(prevtext =>prevtext === "Hello from Child A" ? 'hello from parent component' : "Hello from Child A")}> update Message</button>


    </div>
  )
}

export default ChildA