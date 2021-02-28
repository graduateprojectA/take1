import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import "../css/style.css";
import Logo from "../cservice/Logo";
import My from "../cservice/My";
class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
        box1: false,
        box2: false,
        box3: false,
    };
}
handleChange = (e) => {
    const { target: { box2 } } = e;
    this.setState({ box2 });
  };

render() {
    return (
        
        <div className="TableCheckDiv">
            <input type="checkbox" name="box2" onChange={this.handleChange} />
            <input type="checkbox" name="box3" onChange={this.handleChange} />
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
                    <div className="TimeDiv">1교시</div>
                    <input type="checkbox" className="TimeDiv" name="box1"onChange={this.handleChange}/>
                    <input type="checkbox" className="TimeDiv" name="box1"onChange={this.handleChange}/>
                    <input type="checkbox" className="TimeDiv" name="box1"onChange={this.handleChange}/>
                    <input type="checkbox" className="TimeDiv" name="box1"onChange={this.handleChange}/>
                    <input type="checkbox" className="TimeDiv" name="box1"onChange={this.handleChange}/>
                  </div>
                  <div className="TimeWrapDiv">
                    <div className="TimeDiv">2교시</div><button className="TimeDiv" name="box2" onChange={this.handleChange}>21</button><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
                  </div>
                  <div className="TimeWrapDiv">
                    <div className="TimeDiv">3교시</div><button className="TimeDiv" onClick={this.createTest}>31</button><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
                  </div>
                  <div className="TimeWrapDiv">
                    <div className="TimeDiv">4교시</div><button className="TimeDiv" onClick={console.log(this.state.box1)}>31</button><div className="TimeDiv">12</div><div className="TimeDiv">13</div><div className="TimeDiv">14</div><div className="TimeDiv">15</div>
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
          </div>
    );
}
  }


export default EventPractice;