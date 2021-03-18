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
import { Multiselect } from "multiselect-react-dropdown";
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
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
        newArr:[],
        filArr:[],
        objectArray: [
          { key: "Option 1", cat: "Group 1" },
          { key: "Option 2", cat: "Group 1" },
          { key: "Option 3", cat: "Group 1" },
          { key: "Option 4", cat: "Group 2" },
          { key: "Option 5", cat: "Group 2" },
          { key: "Option 6", cat: "Group 2" },
          { key: "Option 7", cat: "Group 2" }
        ]
    };
}
  handleChange = (e) => {
    let newArr=this.state.newArr;
    newArr.map(u => {
           if (u.class_no == e.target.value) {
            if (u.class_next) {
                u.class_next = false
            } else {
                u.class_next = true
            }
           }
        this.setState({newArr: newArr})
      })
  };
  completeClass = (event) => {
    event.preventDefault();
    UserService.CheckClassUser(this.state.info).then(res => {
            this.props.history.push('./');
    });
}
  componentDidMount() {
    UserService.class2User().then((res) => {
      this.setState({ class: res.data });
      this.state.newArr =this.state.class.map(p =>
        this.state.user_class = {
          user_no: this.state.user_no,
          class_no: p.class_no,
          class_pre:false,
          class_next: false
      }
       );
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
            <Multiselect
                options={this.state.newArr}
                displayValue="class_no"
                showCheckbox={true}
            />
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
                </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
            <button onClick={() => console.log(this.state.newArr)} />
            <button onClick={()=>console.log(this.state.filArr)} />
            <div className="ClassDiv">
                <ul>
                {
                  this.state.newArr.map(c =>
                    <li><input type="checkbox" value={c.class_no} onChange={this.handleChange}/>{c.class_no}</li>)
                }
              </ul>
            </div>
            
            <button onClick={this.completeClass} />
          </ClassCheckWrapWrapDiv>
        </ClassCheckDiv>
      </div>
    );
  }
}

export default ClassCheck;