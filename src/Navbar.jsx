import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {

const [tog,settog] = useState(false)

function onscrolling(){
    if(window.scrollY > 100){
        settog(true)
    }
    else{settog(false)
    }
}

useEffect(() => {
    window.addEventListener('scroll',onscrolling)
},[])

  return (
    <div className={`nav ${tog && 'nav__bar'} `}>
        <NavLink to='/profile'><img className='nav__avatar'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                alt=''
                onClick={()=>{ console.log('Hi Hi')}}
            />
        </NavLink>
        <img className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
            alt=''
        />
    </div>
  )
}

export default Navbar;