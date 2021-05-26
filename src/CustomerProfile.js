import React, { useState, useEffect } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then(res => res.json())
      .then(customerInfo => {
        setCustomer(customerInfo);
        console.log(customerInfo);
      })
      .catch(error => {
        alert("Fail in fetch!");
      });
  }, []);

  console.log(customer);

  return (
    <div>
      <h1>Customer {props.id} Profile</h1>
      <p>Email: {customer?.email}</p>
      <p>Vip: {customer?.vip.toString()}</p>
      <p>Phone Number: {customer?.phoneNumber}</p>
    </div>
  );
};

export default CustomerProfile;
