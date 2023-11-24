import React from 'react'
import "../src/style/home.css"
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
// import Header from './Header';


export const Home = () => {
  return (

    <> 
    <Header/>
    <div className="home">
      <div className="banner">
        <div className="bnimg">
          <img class="bannerimg" src="/src/img/banner.png" alt="" />

        </div>

      </div>
      <div className="text-title">Welcome to a journey through India's hidden treasures - a portal dedicated to uncovering the rich tapestry of not-so-popular
        historical sites that have witnessed the ebb and flow of time. Here, we invite you to explore the lesser-known gems of India's
        past, where stories of empires, dynasties, and cultures have left their indelible marks. Our mission is to unveil these hidden
        marvels and provide you with a seamless platform to book tickets for your journey, as well as accommodations that will immerse
        you in the history and culture of these unique destinations.
        <br />
        <br />
        We provide a comprehensive suite of facilities for travelers exploring lesser-known historical sites in India. It provides in-depth
        information about these sites, allowing users to learn about their historical significance and unique features. Travelers can
        conveniently book their travel tickets, including flights, trains, and buses, as well as select accommodations near the historical sites.
        Customized itineraries and guided tours led by experienced guides and historians enhance the travel experience. Users can also
        reserve tickets for site visits and tours while benefiting from transparent pricing and around-the-clock customer support. We
        promotes sustainable and responsible tourism and ensures a user-friendly booking process, making the exploration of these hidden
        historical gems an unforgettable and seamless journey.</div>
      <br />
      <br />
      <div className="travel-cards">
        <div className="tcards">
          <div className="c-img">
            <img src="/src/img/option/op3.png" alt="" />
          </div>
        <NavLink to="/Explore"> EXPLORE</NavLink> </div>
     
          <div className="tcards"> 
          <div className="c-img">
            <img src="/src/img/option/op1.png" alt="" />
          </div>
          <NavLink to="/Flight"> BOOKING  </NavLink>
          </div>
        <NavLink to="/Homehotel">
        <div className="tcards"> <div className="c-img">
          <img src="/src/img/option/op2.png" alt="" />
        </div>HOTEL</div></NavLink>
      </div>
    </div>
    <About/>

      <Footer />

    </>
  )
}
