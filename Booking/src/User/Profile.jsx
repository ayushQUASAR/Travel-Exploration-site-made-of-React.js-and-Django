import React, { useEffect, useState } from 'react';
import '../User/profile.css'
import { NavLink } from 'react-router-dom';


import { getAuth, signOut } from "firebase/auth"
import { auth } from '../firebase';
const Profile = () => {
  // Sample data (replace with actual data from your application)
 
 const[user,setUser]=useState("")

  const userData = {
    name: 'John Doe',
    image: 'https://example.com/profile-image.jpg',
    age: 30,
    address: '123 Main St, Cityville',
    username: 'john_doe123',
    dob: '1993-05-15',
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user)
        // setIslogged(true);
        setUser(user)
        // setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  const bookingHistory = [
    { id: 1, hotel: 'Hotel A', date: '2022-10-01', amount: 150 },
    { id: 2, hotel: 'Hotel B', date: '2022-11-05', amount: 200 },
    // Add more booking history items as needed
  ];

  return (
    <>     <div className="profile-top">
      <div className="profile-title"> <NavLink className="top-link" to="/">SAFAR   </NavLink></div>
    </div>
    <div className="profile-area">
      <div className="profile-container">

        <div className="profile-header">
          <img src={userData.image} alt=" " className="profile-image" />
          <div className="user-name"> <h2>{user.displayName}</h2></div>
         
        </div>
        <div className="profile-details">
          <p>Age: {userData.age}</p>
          <p>Address: {userData.address}</p>
          <p>Email: {user.email}</p>
          <p>Date of Birth: {userData.dob}</p>
        </div>
        <div className="booking-history">
          <h3>Booking History</h3>
          {bookingHistory.map((booking) => (
            <div key={booking.id} className="booking-card">
              <p>Hotel: {booking.hotel}</p>
              <p>Date: {booking.date}</p>
              <p>Amount: ${booking.amount}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;
