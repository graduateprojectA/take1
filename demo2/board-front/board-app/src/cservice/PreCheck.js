import React, { Component } from 'react';
import styled from "styled-components";
import UserService from '../service/UserService';
import "../css/style.css";
import Logo from "./Logo";
import My from "./My";
import backgroundImage2 from "../components/image/backgroundImage2.png";
import  CheckBox  from './CheckBox';

const ReDiv = styled.div`
margin-left: 60%;
`

const RESET = styled.button`
margin-top: 2%;
margin-left:3%;
font-size: 1.3em;
border:none;
border-radius: 10%;
background-color:yellow;
`

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
            <ReDiv>
            <RESET onClick={() => console.log(this.state.exam_pre)}>로딩하기</RESET>
            <RESET onClick={this.reset}>다시 설정하기</RESET>
            {/* <button onClick={this.reset}>다시 설정하기</button> */}
            </ReDiv>
            <table className="WeightTable">
              <tr classname="TimeDiv">
              {/* <th className="DayDiv"><input type="checkbox" name="exam_pre" id="test" className="testDiv" onChange={this.handleChange}/><label for="test">시험</label></th> */}
              <th className="WeightLabelDiv">시험</th>
              <th className="DayDiv"><input type="checkbox" name="exam_pre" className="WeightDiv" onChange={this.handleChange}/></th>
              <th className="WeightLabelDiv">{this.state.exam_pre}순위</th>
              </tr>

              <tr classname="TimeDiv">
              <th className="WeightLabelDiv">퀴즈</th>
              <th className="DayDiv"><input type="checkbox" name="quiz_pre" className="WeightDiv" onChange={this.handleChange}/></th>
              <th className="WeightLabelDiv">{this.state.quiz_pre}순위</th>
              </tr>

              <tr classname="TimeDiv">
              <th className="WeightLabelDiv">발표</th>
              <th className="DayDiv"><input type="checkbox" name="presentation_pre" className="WeightDiv" onChange={this.handleChange}/></th>
              <th className="WeightLabelDiv">{this.state.presentation_pre}순위</th>
              </tr>

              <tr classname="TimeDiv">
              <th className="WeightLabelDiv">프로젝트</th>
              <th className="DayDiv"><input type="checkbox" name="project_pre" className="WeightDiv" onChange={this.handleChange}/></th>
              <th className="WeightLabelDiv">{this.state.project_pre}순위</th>
              </tr>

              <tr classname="TimeDiv">
              <th className="WeightLabelDiv">과제</th>
              <th className="DayDiv"><input type="checkbox" name="assignment_pre" className="WeightDiv" onChange={this.handleChange}/></th>
              <th className="WeightLabelDiv">{this.state.assignment_pre}순위</th>
              </tr>

              <tr classname="TimeDiv">
              <th className="WeightLabelDiv">출석</th>
              <th className="DayDiv"><input type="checkbox" name="attendance_pre" className="WeightDiv" onChange={this.handleChange}/></th>
              <th className="WeightLabelDiv">{this.state.attendance_pre}순위</th>
              </tr>
              </table>
          </div>
        </div>
    );
  }
}

export default PhoneInfo;