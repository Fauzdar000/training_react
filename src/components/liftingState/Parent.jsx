import React from 'react'
import ChildA from './ChildA'
import ChildB from './ChildB'
const Parent = () => {

  const [message, setMessage] = React.useState('hello from parent component')
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildA setMessage={setMessage} />
      <ChildB message={message} />

    </div>
  )
}

export default Parent