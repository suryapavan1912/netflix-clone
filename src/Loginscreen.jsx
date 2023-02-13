import React, { useState } from 'react'
import './Loginscreen.css'
import Signin from './signin'
function Loginscreen() {

const [signin,setsignin] = useState(false)

  return (
    <div className='loginscreen' >
      <div className='loginscreen_fade'></div>
      <img className='loginscreen__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
          alt=''
      />
      <button onClick={(e)=>{setsignin(true)}}>Sign in</button>

      {signin?
      <Signin />
      :
      <div className='loginscreen_flex'>
        <div className='loginscreen_flexx'>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h3>Watch anywhere. Cancel at any time.</h3>
          <h5>Ready to watch? Enter your email to create or restart your membership</h5>
          <input type='text' placeholder='Email Address'/>
          <button onClick={(e)=>{setsignin(true)}}>GET STARTED</button>
        </div>
      </div>
      }
      
      
    </div>
  )
}

export default Loginscreen