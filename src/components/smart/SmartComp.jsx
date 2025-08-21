import React from 'react'
import { useState } from 'react'
import DumbComp from '../dumb/DumbComp'




const SmartComp = () => {

    const [text,settext] =  useState('hello , from smart comp')

    const changeMesssage = () => {
        settext( prevText => prevText  === 'hello , from smart comp' ?'message has been change' :'hello , from smart comp' )
    }
  return (
    <div style={{backgroundColor:'#f2f2f2' , padding:'10px' }}>

<DumbComp message={text} onChange={changeMesssage} />

    </div>
  )
}

export default SmartComp