import React from 'react'
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice'
import { auth } from './Firebase'
import './Profilescreen.css'
import {NavLink, useNavigate} from 'react-router-dom'

function Profilescreen() {

const navigate = useNavigate()

let user = useSelector(selectuser)
  return (
    <div className='profilescreen'>
        <NavLink to='/'>
        <img className='loginscreen__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
            alt=''
        />
        </NavLink>
        <img className='profilescreen__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
            alt=''
        />
        <div className='profilescreen_mid'>
            <div>
                <h1>Edit Profile</h1>
                <hr />
                <div className='profilescreen_break'>
                    <div>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                            alt=''
                        />
                    </div>
                    <div className='profilescreen__right'>
                        <div className='profilescreen__right1'>
                            <div >
                                <p>{user.email}</p>
                            </div>
                            <h5>Plans (Current Plan:Premium)</h5>
                            <hr />
                        </div>
                        <h6>Renewal Date: 04/01/2023</h6>
                        <div>
                            <div className='flex_box'>
                                <div>
                                    <p>Netflix Standard</p>
                                    <h6>1080p</h6>
                                </div>
                                <div>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                            
                            <div className='flex_box'>
                                <div>
                                    <p>Netflix Basic</p>
                                    <h6>480p</h6>
                                </div>
                                <div>
                                    <button>Subscribe</button>
                                </div>
                            </div>

                            <div className='flex_box'>
                                <div>
                                    <p>Netflix Premium</p>
                                    <h6>4K+HDR</h6>
                                </div>
                                <div>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <button onClick={()=>{auth.signOut();navigate('/')}}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profilescreen