import React, { Component } from 'react';
import styled from "styled-components";
import UserService from '../service/UserService';
import "../css/style.css";
import Logo from "./Logo";
import My from "./My";
import backgroundImage2 from "../components/image/backgroundImage2.png";
import  CheckBox  from './CheckBox';
const ClassCheckDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const ClassCheckWrapWrapDiv = styled.div`
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -370px;
    border: solid 1px;
    height: 585px;
    width: 740px;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
    border-radius: 10px;
`;

const ClassCheckP = styled.p`
    text-align: center; 
    font-size: 1.2em;
`;
class PhoneInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
        count : 1,
        user_no:2,
        test:30,
        exam_pre:0, quiz_pre:0, presentation_pre:0, project_pre:0, assignment_pre:0, attendance_pre:0
    };
}
handleChange = (e) => {
  const box = e.target.name;
  const checked = e.target.checked;
  if (checked ) {
      this.setState({ [box]: this.state.count });
      this.setState({count : this.state.count+1});
      e.target.disabled = true;
  }else{
      this.setState({ [box]: 0 });
      this.setState({count : this.state.count-1});
  }
};
componentDidMount() {
    UserService.login().then((res) => {
        this.setState({ user_no: res.data });
        console.log("get result => " + JSON.stringify(res.data));
    });
}
reset = (event) =>{
  event.preventDefault();
  window.location.replace("/precheck")
}
completeCheck = (event) => {
  event.preventDefault();
  let user_pre = {
    user_no : this.state.user_no,
    exam_pre : this.state.exam_pre,
    quiz_pre : this.state.quiz_pre,
    presentation_pre : this.state.presentation_pre,
    project_pre : this.state.project_pre,
    assignment_pre : this.state.assignment_pre,
    attendance_pre : this.state.attendance_pre
  };
  console.log("가중치 : " + JSON.stringify(user_pre));
  
  UserService.SendPre(user_pre).then(res => {
          this.props.history.push('./');
  });
}
  render() {
    return (
        <ClassCheckDiv>
          <Logo />
          <My />
          <ClassCheckWrapWrapDiv>
            <ClassCheckP>순서를 선택해주세요.</ClassCheckP>
            <button className="NextA" onClick={this.completeCheck}>&#10095;</button>
            <button onClick={() => console.log(this.state.exam_pre)} />
            <button onClick={this.reset}>reset</button>
            <br/><br/><br/>
            <input type="checkbox" name="exam_pre" onChange={this.handleChange}/>시험
            <input type="checkbox"  name="quiz_pre" onChange={this.handleChange}/>퀴즈
            <input type="checkbox" name="presentation_pre"  onChange={this.handleChange}/>발표
            <input type="checkbox" name="project_pre" onChange={this.handleChange}/>프로젝트
            <input type="checkbox" name="assignment_pre" onChange={this.handleChange}/>과제
            <input type="checkbox" name="attendance_pre" onChange={this.handleChange}/>출석
            <br/>
            {this.state.exam_pre} {this.state.quiz_pre} {this.state.presentation_pre} {this.state.project_pre} {this.state.assignment_pre} {this.state.attendance_pre}
          </ClassCheckWrapWrapDiv>
        </ClassCheckDiv>
    );
  }
}

export default PhoneInfo;