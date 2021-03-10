/*
TableCheck
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import Logo from "./Logo";
import My from "./My";
import "../css/style.css";

const TableCheck = () => {
  return (
    <div className="TableCheckDiv">
      <Logo />
      <My />
      <Link to="./courseCheck">
        <button className="NextA">&#10095;</button>
      </Link>
      <div className="TableCheckWrapWrapDiv">
        <div className="TimeTable">
          <div className="DayWrapDiv">
              <div className="DayDiv">월</div>
              <div className="DayDiv">화</div>
              <div className="DayDiv">수</div>
              <div className="DayDiv">목</div>
              <div className="DayDiv">금</div>
          </div>
          <div className="TableBody">
            <div className="TimeWrapDiv">
              <button className="TimeDiv" onClick={console.log("test 성공")}>1교시</button><div className="TimeDiv">11</div><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
            </div>
            <div className="TimeWrapDiv">
              <div className="TimeDiv">2교시</div><div className="TimeDiv">11</div><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
            </div>
            <div className="TimeWrapDiv">
              <div className="TimeDiv">3교시</div><div className="TimeDiv">11</div><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
            </div>
            <div className="TimeWrapDiv">
              <div className="TimeDiv">4교시</div><div className="TimeDiv">11</div><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
            </div>
            <div className="TimeWrapDiv">
              <div className="TimeDiv">5교시</div><div className="TimeDiv">11</div><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
            </div>
            <div className="TimeWrapDiv">
              <div className="TimeDiv">6교시</div><div className="TimeDiv">11</div><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
            </div>
            <div className="TimeWrapDiv">
              <div className="TimeDiv">7교시</div><div className="TimeDiv">11</div><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCheck;