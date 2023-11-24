import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import { Home } from './Home';
import Footer from './Footer';
import Flight from './Flight';
import Login from './components/Login/Login'
import Hotel from './pages/hotel/Hotel'
import List from "./pages/list/List";
import Explore from './Explore';
import Homehotel from './pages/home/Home'
import HotelList from './HotelList/HotelList';
import Signup from './components/Signup/Signup';
import Profile from '../src/User/Profile'

function App() {
  return (
    <>
   
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Homehotel" element={<Homehotel />} />
          <Route path="/HotelList" element={<HotelList/>} />
          <Route path="/Profile" element={<Profile/>} />

          <Route path="/Flight" element={<Flight/>} />
          <Route path="/Explore" element={<Explore/>} />
          <Route path="/hotels" element={<List/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
