import React, { Component } from 'react';
import styled from "styled-components";
import UserService from '../service/UserService';
import "../css/style.css";
import Logo from "./Logo";
import My from "./My";
import backgroundImage2 from "../components/image/backgroundImage2.png";
import  CheckBox  from './CheckBox';

// const ClassCheckWrapWrapDiv = styled.div`
//     position: absolute;
//     top: 120px;
//     left: 50%;
//     margin-left: -370px;
//     border: solid 1px;
//     height: 585px;
//     width: 740px;
//     background-color: #fff5ee;
//     opacity: 0.8;
//     border: solid 5px #00462A;
//     border-radius: 10px;
// `;

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
        <div className="TableCheckDiv">
          <Logo />
          <My />
          <button className="NextA" onClick={this.completeCheck}>&#10095;</button>
          <div className="TableCheckWrapWrapDiv"><br/>
          <h4 style={{color:"red", display:"inline"}}>[가중치값 설정] </h4>
          <h4 style={{display:"inline"}}>교양 수업 추천을 위해 진행되는 단계입니다.<br/>
            중요하게 생각하시는 항목을 순서대로 선택 해주세요.
            <br/> 우측 흰색 화살표를 눌러, 다음 페이지로 이동하세요.</h4>
            <br/>
            <button onClick={() => console.log(this.state.exam_pre)} />
            <button onClick={this.reset}>reset</button>
            <tr className="TimeDiv">    
            <input type="checkbox" name="exam_pre" id="order" onChange={this.handleChange}/>시험
            <input type="checkbox" name="quiz_pre" onChange={this.handleChange}/>퀴즈
            <input type="checkbox" name="presentation_pre" onChange={this.handleChange}/>발표
            <input type="checkbox" name="project_pre" onChange={this.handleChange}/>프로젝트
            <input type="checkbox" name="assignment_pre" onChange={this.handleChange}/>과제
            <input type="checkbox" name="attendance_pre" onChange={this.handleChange}/>출석
            <br/>
          </tr>
            {this.state.exam_pre} {this.state.quiz_pre} {this.state.presentation_pre} {this.state.project_pre} {this.state.assignment_pre} {this.state.attendance_pre}
          </div>
        </div>
    );
  }
}

export default PhoneInfo;