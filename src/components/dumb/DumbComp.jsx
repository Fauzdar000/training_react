import React from 'react'
import { useState } from 'react'


const DumbComp = ({message,onChange }) => {
  return (
    <div>
        {/* <img src={image} alt="" /> */}

      <h2> {message} </h2>
      <button onClick={onChange}> change message</button>


    </div>
  )
}

export default DumbComp