import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log("Some Data");
    fetch(`https://cyf-react.glitch.me`)
      .then(response => response.json())
      .then(data => setBookings(data));
  }, []);

  const search = searchVal => {
    const filteredGuests = bookings.filter(guest => {
      return (
        guest.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
      );
    });

    setBookings(filteredGuests);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
