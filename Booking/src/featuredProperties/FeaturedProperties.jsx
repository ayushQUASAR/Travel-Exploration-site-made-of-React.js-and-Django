import { useEffect, useState } from "react";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const [locData,setLocdata]=useState(null);
  useEffect(()=>{
fetch('http://127.0.0.1:8000/api/ImageCatalog',{
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
  //           // Add other headers if needed
          },

          mode: 'cors',
        }).then((res)=>
    res.json()
        ).then((data)=>{
          console.log(data)
          setLocdata(data)
        }).catch((error)=>console.log(error))


  },[])
  return (

    <div className="fp">
      { locData!=null &&  
      locData.map((val,id)=>{
        // console.log(val)
        return <div index={id} className="fpItem">
        <img
          src={val.image}
          alt="image"
          className="fpImg"
        />
        {/* <span className="fpName">Aparthotel Stare Miasto</span> */}
        <span className="fpCity">{val.location}</span>
        {/* <span className="fpPrice">Starting from $120</span> */}
        {/* <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div> */}
       </div>
      })


      }
     
    
      </div>
 
  );
};

export default FeaturedProperties;
