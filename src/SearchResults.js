import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [lineId, setLineId] = useState(null);

  const [profileId, setProfileId] = useState(null);

  return (
    <div>
      <table className="table">
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
          {props.bookings.map((booking, index) => {
            const checkInDateMoment = moment(booking.checkInDate);
            const checkOutDateMoment = moment(booking.checkOutDate);
            return (
              <tr
                key={index}
                onClick={() => {
                  setLineId(index);
                }}
                className={lineId === index ? "highlighted" : "notHighlighted"}
              >
                <td>{booking.id}</td>
                <td>{booking.title}</td>
                <td>{booking.firstName}</td>
                <td>{booking.surname}</td>
                <td>{booking.email}</td>
                <td>{booking.roomId}</td>
                <td>{booking.checkInDate}</td>
                <td>{booking.checkOutDate}</td>
                <td>{checkOutDateMoment.diff(checkInDateMoment, "days")}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={e => {
                      e.preventDefault();
                      setProfileId(booking.id);
                    }}
                  >
                    Show Profile
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {profileId && <CustomerProfile id={profileId} />}
    </div>
  );
};

export default SearchResults;
