import React, { useEffect, useState } from 'react';
import XMLParser from 'react-xml-parser';
import "./style/flight.css"
import flight_img from "./img/SG.png"
import Flightpop from './FlightBookpop/Flightpop';
const Flight_details = ({ props }) => {
  const { origin, destination, formattedDate, activetab } = props;
  console.log(formattedDate)
  const [flightdata, setFlightdata] = useState(null);
  const[Booknow,setBooknow]=useState(false)
  const HandleClose=()=>{
    setBooknow(!Booknow)
}
console.log(flightdata)
  const [arcode,setArcode]=useState("")
  const [depcode,setDepcode]=useState("")
  console.log(activetab)
  function convertDateFormat(inputDate) {
    const year = inputDate.substring(0, 4);
    const month = inputDate.substring(4, 6);
    const day = inputDate.substring(6, 8);

    // Create a new Date object using the extracted components
    const formattedDate = new Date(`${year}-${month}-${day}`);

    // Extract the formatted date in YYYY-MM-DD format
    const result = formattedDate.toISOString().split('T')[0];

    return result;
  }
  const converteddate = convertDateFormat(formattedDate);
  const apiUrl = 'https://test.api.amadeus.com/v1/shopping/availability/flight-availabilities';

  const requestData = {
    originDestinations: [
      {
        id: '1',
        originLocationCode: `${origin}`,
        destinationLocationCode: `${destination}`,
        departureDateTime: {
          date: `${converteddate}`,
          time: '21:15:00',
        },
      },
    ],
    travelers: [
      {
        id: '1',
        travelerType: 'ADULT',
      },
    ],
    sources: ['GDS'],
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add your Amadeus API key in the Authorization header
      'Authorization': 'Bearer fW6D6DQ4LWaAROLRUeKcuGTdr9dC',
    },
    body: JSON.stringify(requestData),
  };
  useEffect(() => {
    fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Handle the API response data
        setFlightdata(data)
        // console.log(flightdata.data);
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });// Call the async function
  }, []);

  const FlightDetails = ((jsonData) => {
    // Check if jsonData is an array before using map
    // {console.log(jsonData)}
    if (jsonData.jsonData !== null && Array.isArray(jsonData.jsonData)) {
     
     
     
      return jsonData.jsonData.slice(0,20).map((val, index) => {
        const arrivalDate = new Date(val.segments[0].arrival.at);
        const dep=new Date(val.segments[0].departure.at)

        // Format date and time as needed
        const formattedDate = arrivalDate.toLocaleDateString(); // Format as "MM/DD/YYYY" or based on the user's locale
        const formattedTime = arrivalDate.toLocaleTimeString(); 
        const depDate=dep.toLocaleDateString()
        const deptime=dep.toLocaleTimeString()
        setArcode(val.segments[0].arrival.iataCode)
        setDepcode(val.segments[0].departure.iataCode)
        return <div className="flight-details-card" key={index}>

          <div className="flight-left">
            <img src={flight_img} alt="" />
          </div>
          <div className="flight-center">
        <div className="left-wing">
          {/* {console.log(val)} */}
          <div className="airport-code">{val.segments[0].arrival.iataCode}</div>
          <div className="time">{formattedTime}</div>
          <div className="date">{formattedDate}</div>
        </div>
        <div className="right-wing">
          <div className="airport-code">{val.segments[0].departure.iataCode}</div>
          <div className="time">{deptime}</div>
          <div className="date">{depDate}</div>
        </div>
      </div>
     
          <div className="flight-right">
            <div className="book-flight">
              <div>
                <p>
                  {activetab === 'economy' ? 'Rs 6000' : activetab === 'business' ? 'Rs 80000' : 'Rs 100000'}
                </p>
              </div>
              <div onClick={()=>HandleClose()}> Book</div>
            </div>
          </div>
       {Booknow&& <Flightpop prop={{deptime,depDate,formattedDate,formattedTime,setBooknow,arcode,depcode}}/>}   
        </div>
    });
    } else {
      // Handle the case when jsonData is null or not an array
      return <div>No data available</div>;
    }
  });
  

  
  


  return (
    <div className='flightshow-wrapper'>
      {flightdata!=null ? <FlightDetails jsonData={flightdata.data} /> : <p>Loading flight details...</p>}
    </div>
  );
  }

export default Flight_details;
