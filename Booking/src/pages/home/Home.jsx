import Featured from "../../featured/Featured";
import FeaturedProperties from "../../featuredProperties/FeaturedProperties";
import Footer from "../../Footer"
import HotelHeader from "../../header/HotelHeader";

import MailList from "../../mailList/MailList";
import Navbar from "../../navbar/Navbar";
import PropertyList from "../../propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HotelHeader/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
