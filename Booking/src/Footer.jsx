import React from 'react'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <>
    <div className="footer-banner">
      {/* <img src="src/img/rajas2.jpg" alt="" className="src" /> */}
    </div>
      <div className="footer">
        <div className="footer-title">
        <div className="title">SAFAR</div>
       
        <h3>Contact Us</h3>
    <span>   <Icon icon="mi:email" color="white" width="20" /><p>Email: info@yourbookingwebsite.com</p></span> 
    <span>   <Icon icon="fluent:call-12-regular" color="white" /><p>Phone: +1 (123) 456-7890</p></span> 
    <span><Icon icon="mdi:address-marker-outline" color="white" /><p>Address: 123 Main St, City, Country</p></span> 
<div className="social">
<div><Icon icon="icon-park-twotone:big-x" color="white" width="30" /></div>
<div><Icon icon="simple-icons:linkedin" color="white" width="30" /></div>
<div><Icon icon="lucide:instagram" color="white" width="30" /></div>
</div>
        </div>
         <div className="footer-content">
          <ul>
            <li>
              Countries
            </li>
            <li>Regions</li>
            <li>Cities</li>
            <li>Districts</li>
            <li>Airports</li>
            <li>Hotels</li>

          </ul>
          <ul>
            <li>Homes</li>
            <li>Apartments</li>
            <li>Resorts</li>
            <li>villas</li>
            <li>Hostels</li>
            </ul>
            <ul>
            
        <li>About Us</li>
       
        <li>Email: info@yourbookingwebsite.com</li>
        <li>Phone: +1 (123) 456-7890</li>
        <li>Address: 123 Main St, City, Country</li>
      </ul>
        <ul>
        <h3>Quick Links</h3>
        
          <li>Home</li>
          <li>Hotels</li>
          <li>Resorts</li>
          <li>Flights</li>
          <li>Trains</li>
          <li>Cabs</li>
          <li>About Us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
    
           

        </div>
        </div>
    </>
  )
}

export default Footer