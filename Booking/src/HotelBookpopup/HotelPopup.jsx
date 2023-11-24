import React, { useEffect, useState } from 'react'
import './hotelpopu.css'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
const HotelPopup = ({ prop }) => {
    const { id, setPop, pop } = prop
    console.log(prop)
    const [Booknow, setBooknow] = useState(false)
    const [checkInDate, setCheckInDate] = useState('');
    const [imageUrl, setImg] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState('');
    const [adultsCount, setAdultsCount] = useState(1); // Default to 1 adult
    const randomRoomPrice = Math.floor(Math.random() * 200) + 50;
    const [data, setData] = useState(null)
    const randomStars = Math.floor(Math.random() * 5) + 1;
    const handleBookClick = () => {
        // Add logic to handle the booking based on selected dates and number of adults
        // console.log('Booking:', {
        // //   hotelName,
        //   imageUrl,
        //   checkInDate,
        //   checkOutDate,
        //   adultsCount,
        // });
    }
    const HandleClose=()=>{
        setBooknow(!Booknow)
    }
    console.log("pop", pop)
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < randomStars; i++) {
            stars.push(<span key={i}>&#9733;</span>); // Unicode character for a star
        }
        return stars;
    };
    useEffect(() => {
        fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-hotels?hotelIds=${id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer cpEh4dyCAzs8txhKA6ZvM78xF5Tj',
                'Content-Type': 'application/json', // Adjust content type as needed
                // Add any other headers as needed
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(sdata => {
                // Handle the API response data
                console.log("hotel", sdata.data);
                setData(sdata)
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    }, [])
    useEffect(() => {

        fetch('https://api.pexels.com/v1/search?query=Hotels&per_page=1', {
            method: 'GET',
            headers: {
                'Authorization': 'qaO5PMGsTk8FVr7m6Vqn8VEFQAgnNHaxgunx6bdlJoBU0HeAZE7rpVtK',
                'Content-Type': 'application/json', // Adjust content type as needed
                // Add any other headers as needed
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // Handle the API response data
                console.log(data);

                // Assuming there is at least one photo in the response
                setImg(data.photos[0].src.large)
                console.log('Image URL:', imageUrl);
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });
    })
    return (
        <div className='Hotel-popup'>
            <div onClick={() => setPop(!pop)} className="cancel"><CancelIcon /></div>
            <h2>Booking Section</h2>

            {
                imageUrl != null && data != null ? <div className="hotel-card">

                    <div className="hotel-details">

                        <div className="customer-input">
                            <p>
                                <CalendarMonthIcon sx={{ fontSize: 30, color: '#ea8215' }} /> <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                            </p>
                            <p>
                                <CalendarMonthIcon sx={{ fontSize: 30, color: '#ea8215' }} /> <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
                            </p>
                            <p>
                                <PeopleAltIcon sx={{ fontSize: 30, color: '#ea8215' }} /> <input type="number" value={adultsCount} onChange={(e) => setAdultsCount(e.target.value)} />
                            </p>
                        </div>
                        <div className="hotel-profile">

                            <img src={imageUrl} alt="Hotel Room" className="hotel-image" />
                            <div className="hotel-profile-info">
                                <h4 className='available'><DoneAllIcon />Available</h4>  <div className='hotel-name-stars'> <h3 className="hotel-names">{data.data[0].name} </h3><div className="stars">{renderStars()}</div></div>
                                <div className="room-description">
                                    <p> Deluxe Double Room (2 Adults + 1 Child)</p>
                                    <p> &#10003;1 extra-large double bed</p>
                                    <p>&#10003;Free cancellation</p>
                                </div>
                                <p className="room-price">Price :Rs.{randomRoomPrice} per night</p>
                                <button className="btn" onClick={HandleClose}>
                                    Book Now
                                </button>
                            </div>
                        </div>

                    </div>
                </div> : <div> Loading</div>


            }
            {Booknow && <div className="popup-overlay" onClick={HandleClose}>
                <div className="popup" >

   {/* <img className='sucessIcon' src={sucessIcon} alt='Success Icon' /> */}

                    <h2 className='popup-heading'>Booking Successful</h2>
                    {/* <p className='popup-para'>Your registration has been successfully completed.</p> */}


                    <button className="btn " onClick={HandleClose}>Close</button>


                </div>
            </div>}
        </div>

    )
}

export default HotelPopup;

