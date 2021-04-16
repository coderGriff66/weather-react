import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import Search from "./Search";
import Conditions from "./Conditions";
import Planner from "./Planner";
import Outlook from "./Outlook";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <div className="weatherApp">
          <Header whatIsToday="Friday, March 26, 2021" whatTime="8:40pm" />
          <br />
          <Search />
          <br />
          <Conditions
            feels={40}
            barom={29.8}
            humid={45}
            winds={12}
            lowTemp={23}
            skyNow="Clear Skies"
            tempNow={56}
            icon="010d"
          />

          <br />
          <div>
            <h4 className="your-day">DAY PLANNER</h4>
            <div className="row wx-planner">
              <div className="col-3">
                <Planner value="09:00" temp={30} icon="sun" />
              </div>
              <div className="col-3">
                <Planner value="12:00" temp={44} icon="sun" />
              </div>
              <div className="col-3">
                <Planner value="15:00" temp={50} icon="sun" />
              </div>
              <div className="col-3">
                <Planner value="18:00" temp={40} icon="sun" />
              </div>
            </div>
            <br />
            <h4 className="five-day">4 DAY OUTLOOK</h4>
            <div className="row wx-forecast">
              <div className="col">
                <Outlook day="Friday" maxTemp={42} minTemp={38} icon="sun" />
              </div>
              <div className="col">
                <Outlook day="Saturday" maxTemp={44} minTemp={41} icon="sun" />
              </div>
              <div className="col">
                <Outlook day="Sunday" maxTemp={46} minTemp={42} icon="sun" />
              </div>
              <div className="col">
                <Outlook day="Monday" maxTemp={53} minTemp={47} icon="sun" />
              </div>
            </div>
          </div>
          <br />

          <Footer />
          <br />
        </div>
      </div>
    </div>
  );
}