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

class CourseCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_class: [
                {user_no : 1, class_no: "기독교와세계", class_pre: false,class_next:false},
                {user_no : 1, class_no: "공존과협력의유토피아", class_pre: false,class_next:false},
                {user_no : 1, class_no: "관계의미학:사랑과윤리", class_pre: false,class_next:false},
                {user_no : 1, class_no: "나눔리더십", class_pre: false,class_next:false},
            ],
            class: []
        };
    }
  
    handleCheckChieldElement = (event) => {
        let user_class = this.state.user_class
        user_class.forEach(u => {
           if (u.user_course_no == event.target.value) {
            if (u.course_done) {
                u.course_done = false
            } else {
                u.course_done = true
            }
           }
        this.setState({user_class: user_class})})
      }
      completeCheck = (event) => {
        event.preventDefault();
        let time = {            
            user_class: this.state.user_class
        };
        UserService.SendClassUser(time).then(res => {
                this.props.history.push('./courseCheck');
        });
    }
    componentDidMount() {
        UserService.course2User().then((res) => {
            this.setState({ user_class: res.data});
            console.log("get result => " + JSON.stringify(res.data));
        });
        UserService.login().then((res) => {
            this.setState({ user_no: res.data });
            console.log("get result => " + JSON.stringify(res.data));
        });
    }
    render() {
        return (
            <div>
                <ClassCheckDiv>
                    <Logo />
                    <My />
                    <ClassCheckWrapWrapDiv>
                        <ClassCheckP>제외할 수업을 선택해주세요.</ClassCheckP>
                        <button onClick={() => console.log(this.state.user_class)} />

                        <button className="NextA" onClick={this.completeCheck}>&#10095;</button>
                        <ul>
                            {
                                this.state.user_class.map((fruite) => {
                                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
                                })
                            }
                        </ul>
                    </ClassCheckWrapWrapDiv>
                </ClassCheckDiv>
                
            </div>
        );
    }
}

export default CourseCheck;