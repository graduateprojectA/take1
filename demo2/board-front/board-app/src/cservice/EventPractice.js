import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import UserService from '../service/UserService';
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
handleChange = (evt) => {
    const box = evt.target.name;
    this.setState({ [box]: !this.state.box });
};
render() {
    return (
        <div>
            <input type="checkbox" name="box1" onChange={this.handleChange} />
            <input type="checkbox" name="box2" onChange={this.handleChange} />
            <input type="checkbox" name="box3" onChange={this.handleChange} />
        </div>
    );
}
  }


export default EventPractice;