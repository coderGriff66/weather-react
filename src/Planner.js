import React from "react";
import "./Planner";

export default function Planner(props) {
  return (
    <div className="Planner">
      <div className="day-temps">
        <div className="card">
          <h5 className="title2">{props.value}</h5>
          <div className="card-body2">
            <i className="fas fa-cloud centre-wx"></i>
            <p className="card-text">{props.temp}°</p>
          </div>
        </div>
      </div>
    </div>
  );

}