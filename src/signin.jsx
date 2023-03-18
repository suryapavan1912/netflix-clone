import React, { useRef } from 'react'
import './signin.css'
import { getAuth, signInWithEmailAndPassword , createUserWithEmailAndPassword  } from "firebase/auth";

function Signin() {

const auth = getAuth();
const refuser = useRef(null);
const refpassword = useRef(null);

function signIn(){
  signInWithEmailAndPassword(auth, refuser.current.value, refpassword.current.value)
    .catch((err) => {
      alert(err.message)
    });
}

function regester(){
  createUserWithEmailAndPassword(auth, refuser.current.value, refpassword.current.value)
    .catch((err) => {
      alert(err.message)
    });
}



  return (
    <div className='signin'>
      <div className='signin_in'>
        <h1>Sign In</h1>
        <input ref={refuser} type='text' placeholder='Email' />
        <input ref={refpassword} type='password' placeholder='Password' />
        <button type='submit' onClick={signIn}>Sign in</button>
        <p>New to Netflix? <span onClick={regester}>Sign Up now.</span></p>
      </div>
    </div>
  )
}

export default Signin