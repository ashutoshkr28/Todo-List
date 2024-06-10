import React from 'react'

const WelcomeMessage = ({todo}) => {
  return (
    <>
    {todo.length === 0 && <h2>😍Have a Noice Day😍</h2>}
      
    </>
  )
}

export default WelcomeMessage
