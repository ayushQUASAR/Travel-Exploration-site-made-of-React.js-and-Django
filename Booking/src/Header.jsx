import React, { useState, useEffect } from 'react'
import "./style/header.css"
import Login from './components/Login/Login'
import { NavLink } from 'react-router-dom'
import { auth } from './firebase'

import { getAuth, signOut } from "firebase/auth"

const Header = () => {

  const [first, setfirst] = useState(false)
  const [islogged, setIslogged] = useState(false);
  const loginToggle = () => {
    setfirst(!first);
    console.log(first)
  }

  const [userName, setUserName] = useState("");
  const handleLogout = async () => {
   
      try {
        await signOut(auth);
        setIslogged(false)
        // You can redirect the user or perform other actions after logout
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        setIslogged(true);
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <div className="head">

        <div className="title"> <NavLink className="top-link" to="/">SAFAR   </NavLink></div>

        <div className="opn">
          {islogged ? <>    <div className='auth' onClick={handleLogout}>
            Logout
          </div>
          
          
          <NavLink to="/Profile"><div className='Profile-div'>Profile</div></NavLink></> : <NavLink to="/Login">     <div className="auth" onClick={loginToggle}>LogIn</div></NavLink>}
          <div className="contact" >CONTACT</div>

        </div>
      </div>
      {/* { first && <Login  />} */}
    </>
  )
}

export default Header