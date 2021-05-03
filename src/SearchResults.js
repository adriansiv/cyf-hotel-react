import React from "react";
import moment from "moment";

const SearchResults = props => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Number Of Nigths</th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map(booking => {
          const checkInDateMoment = moment(booking.checkInDate);
          const checkOutDateMoment = moment(booking.checkOutDate);
          return (
            <tr>
              <td>{booking.id}</td>
              <td>{booking.title}</td>
              <td>{booking.firstName}</td>
              <td>{booking.surname}</td>
              <td>{booking.email}</td>
              <td>{booking.roomId}</td>
              <td>{booking.checkInDate}</td>
              <td>{booking.checkOutDate}</td>
              <td>{checkOutDateMoment.diff(checkInDateMoment, "days")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
