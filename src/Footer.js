import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="myinfo">
        <a
          href="https://github.com/coderGriff66/first-weather-app-vanilla"
          target="_blank" rel="noreferrer"
        >
          Open-source code
        </a>
        &nbsp;<span className="myname">by Jennifer Griffin</span>
      </div>
      <div>
        <small>&emsp;Photo by www.paulvoie.com</small>
      </div>
    </div>
  );

}