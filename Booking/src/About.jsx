import React, { useEffect, useState } from 'react'
import "./style/about.css"

const About = () => {


  // const jsonData = {
  //   name: 'Ankur',
  //   sex: 'male',}
 
  // useEffect(() => {

  //   console.log(jsonData)
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/catalog/', {
  //         method: 'post',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // Add other headers if needed
  //         },
  //         body: JSON.stringify(jsonData),  // Assuming Data is defined elsewhere in your component
  //         mode: 'cors',
  //       });

  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();
  //       console.log('Data sent:', data);
  //       // Handle the data as needed
  //     } catch (error) {
  //       console.error('Error:', error.message);
  //     }
  //   };

  //   fetchData();

  // }, [])
  return (

    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to [Your Website Name], your one-stop solution for all your travel needs. We're dedicated to making your travel experiences seamless and unforgettable.
      </p>

      <h2>Our Services</h2>
      <p>
        We offer a range of services to cater to your travel preferences:
      </p>
      <ul>
        <li>Train Bookings</li>
        <li>Flight Bookings</li>
        <li>Hotel Reservations</li>
      </ul>
      <p>
        Whether you're planning a weekend getaway or a long vacation, we've got you covered. Our easy-to-use booking system ensures that your journey begins with a click.
      </p>

      <h2>Explore the World</h2>
      <p>
        Beyond just bookings, we encourage you to explore the world with our 'Explore' feature. Discover exciting destinations and plan your next adventure. You can find information about:
      </p>
      <ul>
        <li>Must-visit tourist spots</li>
        <li>Local attractions and culture</li>
        <li>Travel tips and guides</li>
      </ul>
      <p>
        Use our Explore feature to turn your vacation into an enriching experience. With [Your Website Name], your journey is as important as your destination.
      </p>

      <h2>Read and Learn</h2>
      <p>
        We also provide a collection of informative articles and travel blogs to help you stay informed and inspired. Read about travel experiences, get expert advice, and stay updated with the latest travel trends. We believe that a well-informed traveler is a happier traveler.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions, suggestions, or need assistance with your bookings, don't hesitate to contact our customer support team. We're here to make your travel dreams a reality.
      </p>

      <p>
        Thank you for choosing [Your Website Name] for your travel needs. We look forward to being a part of your journey.
      </p>
    </div>


  )
}

export default About