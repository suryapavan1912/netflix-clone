import React, { useEffect } from 'react';
import './App.css';
import Homescreen from './Homescreen';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Loginscreen from './Loginscreen';
import Profilescreen from './Profilescreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { LogIn, Logout, selectuser } from './features/userSlice';

function App() {

let user = useSelector(selectuser)
const dispatch = useDispatch()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userauth) => {
    if(userauth){
      dispatch(LogIn({uid : userauth.uid , email : userauth.email}));
    }
    else{
      dispatch(Logout());
    }
  });
  return unsubscribe;
}, [dispatch])


  return (
    <Router>
    { !user ? 
      <Loginscreen /> 
      :
      <Routes>
        <Route exact path='/' element={<Homescreen />} />
        <Route exact path='/profile' element={<Profilescreen />} />
        <Route exact path='/signIn' element={<Loginscreen />} />
      </Routes>
    }
    </Router>
  );
}

export default App;
