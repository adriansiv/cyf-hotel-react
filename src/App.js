// Imports

import React from "react";
import Header from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

// Data

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const cities = [
  {
    cityName: "Glasgow",
    cityImg:
      "https://www.easyjet.com/ejcms/cache/medialibrary/Images/JSS/Destinations/Hero/UnitedKingdom_Scotland_Glasgow_3840x2160.jpg?mw=1920&hash=07259ACA961E7BF4796F8212AD925B8CB1C83D2E",
    cityWeb: "https://peoplemakeglasgow.com/`",
    cityBtn: "Visit Glasgow"
  },
  {
    cityName: "Manchester",
    cityImg:
      "https://media-exp1.licdn.com/dms/image/C4D1BAQFLi71YpbKF8w/company-background_10000/0/1540550639234?e=2159024400&v=beta&t=lFM_02D-fmFRozxtvZNeulm5YJZPzFoTj6I5MknmBew",
    cityWeb: "https://www.visitmanchester.com/",
    cityBtn: "Visit Manchester"
  },
  {
    cityName: "London",
    cityImg:
      "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A",
    cityWeb: "https://www.visitlondon.com/",
    cityBtn: "Visit London"
  }
];

// App

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
      <TouristInfoCards cityInfo={cities} />
      <Footer contactDetails={address} />
    </div>
  );
};

export default App;
