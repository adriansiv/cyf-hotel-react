import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.contactDetails.map(indications => (
        <li>{indications}</li>
      ))}
    </ul>
  );
};
export default Footer;
