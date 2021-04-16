import React from "react";
import axios from "axios";
import "./Conditions.css";


export default function conditions(props) {
  return (
    <div className="Conditions">
      <div className="row">
        <div className="col-5">
          <div className="card leftside">
            <ul className="today" id="today">
              <li>
                <span>
                  Feels Like: <strong id="feels">{props.feels}</strong>
                </span>
                <span>
                  <strong>°</strong>
                </span>
              </li>
              <li>
                <span>
                  Barometer: <strong id="barom">{props.barom}</strong>
                </span>
              </li>
              <li>
                <span>
                  Humidity: <strong id="humid">{props.humid}</strong>
                </span>
                <span>
                  <strong>%</strong>
                </span>
              </li>
              <li>
                <span>Windspeed: </span>
                <span>
                  <strong id="winds">{props.winds}</strong>
                </span>
                <span>
                  <strong> km/h</strong>
                </span>
              </li>
              <li>
                <span>
                  Day's Low Temp: <strong id="temp-low">{props.lowTemp}</strong>
                </span>
                <span>
                  <strong>°</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <div className="card rightside">
            <img src="/" alt="Clear" className="icon" id="icon" width="125" />
            <h2 className="tempNow" id="temp-now">
              {props.tempNow}
              <span>°</span>
            </h2>
            <span className="units">
              <a href="/" id="celsius" className="active">
                <strong>°C</strong>
              </a>
              &nbsp; | &nbsp;
              <a href="/" id="fahrenheit" className="active">
                <strong>°F</strong>
              </a>
            </span>
            <h3 className="skyNow" id="sky-now">
              {props.skyNow}
            </h3>
          </div>
        </div>
      </div>
    </div>

  )
}