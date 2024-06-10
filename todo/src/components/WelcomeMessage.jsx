import React from 'react'

const WelcomeMessage = ({todoItem}) => {
  return (
    <>
    {todoItem.length == 0 && <h2>😍Have a Noice Day😍</h2>}
      
    </>
  )
}

export default WelcomeMessage
