import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.contactDetails.map((indications, index) => (
        <li key={index}>{indications}</li>
      ))}
    </ul>
  );
};
export default Footer;
