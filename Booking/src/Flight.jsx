import React, { useState,useEffect } from 'react';
import Header from './Header';
import '../src/style/flight.css'
import '../src/style/styles.css'
import plan_1 from './assets/plan-1.jpg'
import Footer from './Footer';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import plan_2 from './assets/plan-2.jpg'; // Import the second image
import plan_3 from './assets/plan-3.jpg'; // Import the third image
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import lounge1 from './assets/lounge-1.jpg'; // Import the first lounge image
import lounge2 from './assets/lounge-2.jpg'; // Import the second lounge image
import traveller1 from './assets/traveller-1.jpg'; // Import the first traveler image
import traveller2 from './assets/traveller-2.jpg'; // Import the second traveler image
import traveller3 from './assets/traveller-3.jpg'; // Import the third traveler image
import traveller4 from './assets/traveller-4.jpg'; // Import the fourth traveler image
import client1 from './assets/client-1.jpg'; // Import the first client image
import client2 from './assets/client-2.jpg'; // Import the second client image
import client3 from './assets/client-3.jpg'; // Import the third client image
import client4 from './assets/client-4.jpg'; // Import the fourth client image
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import Flight_details from './Flight_details';
import dayjs from 'dayjs';

// import subscribeImage from './assets/subscribe-image.jpg'; // Import the subscribe image
// import bookInputImage from './assets/book-input-image.jpg';

const Flight = () => {
  const [origin, setOrigin] = useState(null);
  const[activetab,setActivetab]=useState('economy');
  const [travellers, setTravellers] = useState(null);
  const [destination, setDestination] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [flightshow, setShowflights] = useState(false);
  const formattedDate = dayjs(departureDate).format("YYYYMMDD");

console.log(flightshow)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'origin':
        setOrigin(value);
        break;
      case 'destination':
        setDestination(value);
        break;
      case 'departureDate':
        setDepartureDate(value);
        break;
        case 'travellers':
        setTravellers(value);
      case 'returnDate':
        setReturnDate(value);
        break;
      default:
        break;
    }
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = `https://timetable-lookup.p.rapidapi.com/TimeTable/DEl/BLR/20231115/?Max_Results=10`;
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'X-RapidAPI-Key': 'eef2fb0ef2msh021549c336f8ec2p1369ccjsnc95691758249',
  //         'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
  //       }
  //     };
  
  //     try {
  //       const response = await fetch(url, options);
  //       const result = await response.text();
  //       console.log(result);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  
  //   fetchData(); // Call the async function
  // }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowflights(!flightshow);
    // Implement your flight search logic here, and update 'flights' state with the results.
    // For example, you can make an API request to fetch flight data and update 'flights'.
  };

  return (
    <>
      <Header />

      <section class="section__container booking__container">
        <div class="booking__nav">
      
      <span onClick={() => setActivetab('economy')} className={activetab === 'economy' ? 'activetab' : 'nthb'}>Economy Class</span>
      <span onClick={() => setActivetab('business')} className={activetab === 'business' ? 'activetab' : 'nthb'}>Business Class</span>
      <span onClick={() => setActivetab('first')} className={activetab === 'first' ? 'activetab' : 'nthb'}>First Class</span>
        </div>
        <form>
          <div class="form__group">
            <span><FmdGoodOutlinedIcon style={{ fontSize: 40 }} /></span>
            <div class="input__content">
              <div class="input__group">
                <input
                  type="text"
                  name="origin"
                  value={origin}
                  onChange={handleInputChange}
                />
                <label>From</label>
              </div>
              <p>Where are you going?</p>
            </div>
          </div>
          <div class="form__group">
            <span><FmdGoodOutlinedIcon style={{ fontSize: 40 }} /></span>
            <div class="input__content">
              <div class="input__group">
                <input
                  type="text"
                  name="destination"
                  value={destination}
                  onChange={handleInputChange}
                />
                <label>To</label>
              </div>
              <p>Where are you going?</p>
            </div>
          </div>
          <div class="form__group">
            <span><PermIdentityOutlinedIcon style={{ fontSize: 40 }} /></span>
            <div class="input__content">
              <div className={`input__group ${travellers ? 'filled' : ''}`}>
                <input type="number" />
                <label>Travellers</label>
              </div>
              <p>Add guests</p>
            </div>
          </div>
          <div class="form__group">
            <span><CalendarMonthOutlinedIcon style={{ fontSize: 40 }} /></span>
            <div  >
              <div >

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DatePicker']}>
                    <DatePicker 

                      onChange={(newValue) => setDepartureDate(newValue)}

                      value={departureDate} />
                  </DemoContainer>
                </LocalizationProvider>


              </div>
              <p>Add date</p>
            </div>
          </div>
         
          <button class="btn" type=""onClick={(e)=>handleSearch(e)}><SearchOutlinedIcon style={{ fontSize: 35 }} /></button>
        </form>
      </section>
      {flightshow && <Flight_details props={{ origin, destination, formattedDate,activetab }} />}

      <section class="section__container plan__container">
        <p class="subheader">TRAVEL SUPPORT</p>
        <h2 class="section__header">Plan your travel with confidence</h2>
        <p class="description">
          Find help with your bookings and travel plans, and seee what to expect
          along your journey.
        </p>
        <div class="plan__grid">
          <div class="plan__content">
            <span class="number">01</span>
            <h4>Travel Requirements for Dubai</h4>
            <p>
              Stay informed and prepared for your trip to Dubai with essential
              travel requirements, ensuring a smooth and hassle-free experience in
              this vibrant and captivating city.
            </p>
            <span class="number">02</span>
            <h4>Multi-risk travel insurance</h4>
            <p>
              Comprehensive protection for your peace of mind, covering a range of
              potential travel risks and unexpected situations.
            </p>
            <span class="number">03</span>
            <h4>Travel Requirements by destinations</h4>
            <p>
              Stay informed and plan your trip with ease, as we provide up-to-date
              information on travel requirements specific to your desired
              destinations.
            </p>
          </div>
          <div class="plan__image">
            <img src={plan_1} alt="plan" />
            <img src={plan_2} alt="plan" />
            <img src={plan_3} alt="plan" />
          </div>
        </div>
      </section>

      <section class="memories">
        <div class="section__container memories__container">
          <div class="memories__header">
            <h2 class="section__header">
              Travel to make memories all around the world
            </h2>
            <button class="view__all">View All</button>
          </div>
          <div class="memories__grid">
            <div class="memories__card">
              <span><CalendarMonthOutlinedIcon style={{ fontSize: 40 }} /></span>
              <h4>Book & relax</h4>
              <p>
                With "Book and Relax," you can sit back, unwind, and enjoy the
                journey while we take care of everything else.
              </p>
            </div>
            <div class="memories__card">
              <span>
                <ChecklistRtlOutlinedIcon style={{ fontSize: 40 }} />

              </span>
              <h4>Smart Checklist</h4>
              <p>
                Introducing Smart Checklist with us, the innovative solution
                revolutionizing the way you travel with our airline.
              </p>
            </div>
            <div class="memories__card">
              <span><BookmarkAddedOutlinedIcon style={{ fontSize: 40 }} /></span>
              <h4>Save More</h4>
              <p>
                From discounted ticket prices to exclusive promotions and deals,
                we prioritize affordability without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section__container lounge__container">
        <div class="lounge__image">
          <img src={lounge1} alt="lounge" />
          <img src={lounge2} alt="lounge" />
        </div>
        <div class="lounge__content">
          <h2 class="section__header">Unaccompanied Minor Lounge</h2>
          <div class="lounge__grid">
            <div class="lounge__details">
              <h4>Experience Tranquility</h4>
              <p>
                Serenity Haven offers a tranquil escape, featuring comfortable
                seating, calming ambiance, and attentive service.
              </p>
            </div>
            <div class="lounge__details">
              <h4>Elevate Your Experience</h4>
              <p>
                Designed for discerning travelers, this exclusive lounge offers
                premium amenities, assistance, and private workspaces.
              </p>
            </div>
            <div class="lounge__details">
              <h4>A Welcoming Space</h4>
              <p>
                Creating a family-friendly atmosphere, The Family Zone is the
                perfect haven for parents and children.
              </p>
            </div>
            <div class="lounge__details">
              <h4>A Culinary Delight</h4>
              <p>
                Immerse yourself in a world of flavors, offering international
                cuisines, gourmet dishes, and carefully curated beverages.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section__container travellers__container">
        <h2 class="section__header">Best travellers of the month</h2>
        <div class="travellers__grid">
          <div class="travellers__card">
            <img src={traveller1} alt="traveller" />
            <div class="travellers__card__content">
              <img src={client1} alt="client" />
              <h4>Emily Johnson</h4>
              <p>Dubai</p>
            </div>
          </div>
          <div class="travellers__card">
            <img src={traveller2} alt="traveller" />
            <div class="travellers__card__content">
              <img src={client2} alt="client" />
              <h4>David Smith</h4>
              <p>Paris</p>
            </div>
          </div>
          <div class="travellers__card">
            <img src={traveller3} alt="traveller" />
            <div class="travellers__card__content">
              <img src={client3} alt="client" />
              <h4>Olivia Brown</h4>
              <p>Singapore</p>
            </div>
          </div>
          <div class="travellers__card">
            <img src={traveller4} alt="traveller" />
            <div class="travellers__card__content">
              <img src={client4} alt="client" />
              <h4>Daniel Taylor</h4>
              <p>Malaysia</p>
            </div>
          </div>
        </div>
      </section>

      <section class="subscribe">
        <div class="section__container subscribe__container">
          <h2 class="section__header">Subscribe newsletter & get latest news</h2>
          <form class="subscribe__form">
            <input type="text" placeholder="Enter your email here" />
            <button class="btn">Subscribe</button>
          </form>
        </div>
      </section>
      <div className="book-input">


      </div>
      <Footer />
    </>
  );
};

export default Flight;
