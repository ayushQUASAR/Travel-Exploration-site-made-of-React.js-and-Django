import React, { useEffect, useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import "./flightpop.css"
import flight_img from "../img/SG.png"
import {auth} from '../firebase'
const Flightpop = ({ prop }) => {

  
  const[user,setUsername]=useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        // setIslogged(true);
        setUsername(user)
        // setUserName(user.displayName);
      } else 
      setUsername("");
    });
  }, []);
  console.log(user)
  const { deptime, depDate, formattedDate, formattedTime, setBooknow, arcode, depcode } = prop
  const requestData = {
    Price:5456,
    Checkin_time: formattedDate,
    Checkout_time: depDate,
    User_name:user,
    name:arcode,
    dest:depcode,
  };
  console.log(requestData)

  const sendData = () => {
    fetch('http://127.0.0.1:8000/api/Booking/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        //           // Add other headers if needed
      },

      mode: 'cors',
      body: JSON.stringify(requestData),
    }).then((res) =>
      res.json()
    ).then((data) => {
      console.log(data)

    }).catch((error) => console.log(error))
  }
  return (
    <div className='Hotel-popup'>
      <div onClick={() => setBooknow(false)} className="cancel"><CancelIcon /></div>
      <h2>Booking Section</h2>

      <div className="flight-name"></div>
      <div className="flight-book-details">
        <div className="flight-left">
          <div>{arcode}</div>
          <div className="ftime">Arrival Time:{formattedTime}</div>
          <div className="fdate">Date:{formattedDate}</div>
        </div>
        <div className="flight-left">
          <img src={flight_img} alt="" />
        </div>
        <div className="flight-right">
          <div>{depcode}</div>
          <div className="ftime">Departure Time:{deptime}</div>
          <div className="fdate"> Date:{depDate}</div>
        </div>


      </div>
      <div className="flight-price"> Rs 5456</div>
      <div className="btn" onClick={() => { sendData() }}>Book</div>
    </div>
  )
}

export default Flightpop