import React from "react";
import "./Outlook.css";

export default function Outlook(props) {
  return (
    <div className="Forecast">
      <div className="card">
        <h5 className="title3">{props.day}</h5>
        <div className="card-body3">
          <i className="fas fa-sun dayone"></i>
          <p className="card-text3">
            <strong>{props.maxTemp}</strong> / <em>{props.minTemp}</em>
          </p>
        </div>
      </div>
    </div>
  );

}