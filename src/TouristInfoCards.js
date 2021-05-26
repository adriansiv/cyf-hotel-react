import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card-deck">
      {props.cityInfo.map((info, index) => (
        <div key={index} className="card text-center">
          <img src={info.cityImg} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{info.cityName}</h5>
            <a href={info.cityWeb} target="_blank" className="btn btn-primary">
              {info.cityBtn}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
