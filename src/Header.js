import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6">
          <h3 className="top-header">Your Weather Forecast</h3>
        </div>
        <div className="col-6">
          <ul className="what-is-today">
            <li id="what-date">
              <strong>{props.whatIsToday}</strong>
            </li>
            <li id="what-time">
              <strong>{props.whatTime}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

}