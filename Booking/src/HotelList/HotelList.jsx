import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "../HotelList/hotelist.css"
import Header from "../Header"
import Footer from '../Footer'
import HotelPopup from '../HotelBookpopup/HotelPopup';
const HotelList = (props) => {

    const location = useLocation();
    const [cityName, setCityName] = useState(location.state['city'])


    const [iataCode, setIataCode] = useState('');
    const [error, setError] = useState('');
    const [pop, setPop] = useState(false);
    const [data, setData] = useState(null)
    const [imgs, setImg] = useState(null)
    const [id, setId] = useState(null)
    const HandleClick = (id) => {
        setPop(!pop);
        setId(id);

    }
    const cityToIataMapping = {
        'Mumbai': 'BOM',
        'Delhi': 'DEL',
        'Bangalore': 'BLR',
        'Chennai': 'MAA',
        'Kolkata': 'CCU',
        'Hyderabad': 'HYD',
        'Ahmedabad': 'AMD',
        'Pune': 'PNQ',
        'Amritsar': 'ATQ',
        'Patna': 'PAT',
        'Goa': 'GOI',
        'Raipur': 'RPR',
        'Jammu': 'IXJ',
        'Dehradun': 'DED',
        'Jaipur': 'JAI',
    };
    // const city = cityName.trim();

    useEffect(() => {
        const city = cityName.trim();
        if (cityToIataMapping.hasOwnProperty(city)) {
            setIataCode(cityToIataMapping[city]);
            setError('');
        } else {
            setIataCode('');
            setError('City not found or mapping not available.');
        }
    }, [])
    console.log(iataCode)
    useEffect(() => {


        // Make the API call
        fetch(`https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${iataCode}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer 2eSFVwOlkYpOT0XqINJU8eUdvIV4',
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
                console.log("hotel", sdata);
                setData(sdata)
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });

        fetch(`https://api.pexels.com/v1/search?query=Hotels  india&Max=80`, {
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
            .then(img => {
                // Handle the API response data
                console.log(img);
                setImg(img)
            })
            .catch(error => {
                // Handle errors
                console.error('Error:', error);
            });

    }, [iataCode])

    return (
        <>
            <Header />
            <div className='Hotel-container'>
                {iataCode !== '' && data != null ? <div className='Hotel-area'>

                    <div className='hotel-title'>Hotels in {cityName}</div>

                    {Array.isArray(data.data) && data.data.length > 0 ? (
                        <div className='Hotels-menu'>

                            {

                                data.data.slice(0, 15).map((val, ind) => (

                                    <div onClick={() => HandleClick(val.hotelId)} className="hotel-cards" key={ind.id}>
                                        <div className="hotel-img">
                                            {console.log(val)}
                                            <img src={imgs.photos[ind].src.original} alt="" />
                                        </div>
                                        <div className="hotel-name">{val.name}</div>
                                        <div className="hotel-loc">{cityName}</div>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}



                </div> : <div>Loading...</div>}

                {
                    pop && <HotelPopup prop={{id,setPop,pop}} />

                }
            </div>
            <Footer />
        </>
    );
}

export default HotelList;
