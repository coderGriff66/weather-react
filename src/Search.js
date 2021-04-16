import React from "react";

import "./Search";

export default function Search() {
  return (
    <div className="Search">
      <form className="search-form" id="search-form">
        <div className="row your-choice">
          <div className="col-7">
            <input
              type="search"
              placeholder="ENTER YOR CITY"
              autoFocus="on"
              autoComplete="off"
              id="search-city"
              className="form-control shadow sm border=0"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-success" />
          </div>
          <div className="col-2">
            <button className="current-button" id="current-button">
              CURRENT
            </button>
          </div>
        </div>
      </form>
      <div className="city-chosen">
        <h1 id="city">Detroit</h1>
      </div>
    </div>
  );

}