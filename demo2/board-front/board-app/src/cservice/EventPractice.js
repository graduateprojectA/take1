import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import UserService from '../service/UserService';
import "../css/style.css";
import Logo from "../cservice/Logo";
import My from "../cservice/My";

class EventPractice extends Component {
    state = {
      checked: false
    };
  
    handleChange = (e) => {
      const { target: { checked } } = e;
      this.setState({ checked });
    };
  
    render() {
      return (
        <div className="TableCheckDiv">
            <Logo />
            <My />
            <Link to="./classCheck">
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
                    <div className="TimeDiv">1교시</div><button className="TimeDiv"  value={1} onChange={this.changeTest1Handler}>11</button><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
                  </div>
                  <div className="TimeWrapDiv">
                    <div className="TimeDiv">2교시</div><button className="TimeDiv" onChange={this.changeTest2Handler}>21</button><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
                  </div>
                  <div className="TimeWrapDiv">
                    <div className="TimeDiv">3교시</div><button className="TimeDiv" onClick={this.createTest}>31</button><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
                  </div>
                  <div className="TimeWrapDiv">
                    <div className="TimeDiv">4교시</div><input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
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
    }
  }


export default EventPractice;