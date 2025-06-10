import React from 'react'

function Header(props) {
  return (
    <header>
        <h1 className='font-bold py-2 text-2xl'>Hello {props.username}!</h1>
        <p >I help you manage your activities :</p>
    </header>
  )
}

export default Header