/*
TableCheck
*/

import styled from "styled-components";
import React, { Component } from 'react';
import UserService from '../service/UserService';
import "../css/style.css";
import Logo from "./Logo";
import My from "./My";
import backgroundImage2 from "../components/image/backgroundImage2.png";
import  CheckBox  from './CheckBox';
import PhoneInfoList from './PhoneInfoList';
import PhoneForm from './PhoneForm';
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

const NextA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    right: 1%;
    &:hover{
        color: #00462A;
    }
`;

const PreA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    left: 1%;
    &:hover{
        color: #00462A;
    }
`;

class ClassCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_no:2,
        class: [
            {user_no : 1, class_no: "기독교와세계", class_pre: false,class_next:false},
            {user_no : 1, class_no: "공존과협력의유토피아", class_pre: false,class_next:false},
            {user_no : 1, class_no: "관계의미학:사랑과윤리", class_pre: false,class_next:false},
            {user_no : 1, class_no: "나눔리더십", class_pre: false,class_next:false},
        ],
        user_class: [{
            user_class_no: 0,
            user_no: 0,
            class_no: 0,
            class_pre: false,
            class_next: false
        }],
        info:[]
    };
}
  handleChange = (e) => {
    const checked = e.target.checked;
    if (checked ) {
        this.setState({checked:false});
    }else{
        this.setState({checked:true});
    }console.log(checked)
  };
  createClass = (event) => {
    event.preventDefault();
     this.state.class.map((p) =>
    this.setState({user_class:p})
  )
    console.log(JSON.stringify(this.state.user_class));
}
  componentDidMount() {
    UserService.class2User().then((res) => {
      this.setState({ class: res.data });
      console.log("get result => " + JSON.stringify(res.data));
    });
    UserService.login().then((res) => {
      this.setState({ user_no: res.data });
      console.log("get result => " + JSON.stringify(res.data));
    });
  }
  render() {
    const newArr =this.state.class.map((p) =>
    this.state.user_class = {
      user_class_no: p.class_no,
      user_no: this.state.user_no,
      class_no: p.class_name,
      class_next: this.state.checked
  }
  );
    return (
      <div>
        <ClassCheckDiv>
          <Logo />
          <My />
          <ClassCheckWrapWrapDiv>
            <ClassCheckP>제외할 수업을 선택해주세요.</ClassCheckP>
            <div className="ClassDiv">
                <ul>
                {
                  this.state.class.map(c =>
                    <li><input type="checkbox" value={c} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <button onClick={()=>console.log(newArr)} />
          </ClassCheckWrapWrapDiv>
        </ClassCheckDiv>
      </div>
    );
  }
}

export default ClassCheck;