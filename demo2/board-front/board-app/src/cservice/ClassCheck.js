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
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import Cs from "./frontClass";
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
        Arr1:[],Arr2:[],Arr3:[],Arr4:[],Arr5:[],Arr6:[],Arr7:[],Arr8:[],Arr9:[],Arr10:[],Arr11:[],Arr12:[],Arr13:[],
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
      })
      this.setState({newArr: newArr})
      console.log(newArr)
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
    console.log("get result => " + JSON.stringify(res.data));
    });
    UserService.login().then((res) => {
      this.setState({ user_no: res.data });
      console.log("get result => " + JSON.stringify(res.data));
    });
  }
  reset=(event)=>{
    event.preventDefault();
    window.location.replace("/classCheck")
  }
  filldata = (event)=>{
    event.preventDefault();
    this.setState({newArr : this.state.class.map(p =>
      this.state.user_class = {
        user_no: this.state.user_no,
        class_no: p.class_no,
        class_pre:false,
        class_next: false
    }
     )});
     this.state.Arr1 =this.state.class.filter(p =>
      (p.field_no==1 || p.field_no==2 ||  p.field_no==22 ||  p.field_no==23 || p.field_no==43 ||  p.field_no==61)
     );
     this.state.Arr2 =this.state.class.filter(p =>
      (p.field_no==3 || p.field_no==24 ||  p.field_no==44 ||  p.field_no==62)
     );
     this.state.Arr3 =this.state.class.filter(p =>
      (p.field_no==4 || p.field_no==5 ||  p.field_no==6 ||  p.field_no==25 || p.field_no==26 ||  p.field_no==27 ||  p.field_no==45 ||  p.field_no==63 )
     );
     this.state.Arr4 =this.state.class.filter(p =>
      (p.field_no==7 || p.field_no==28 ||  p.field_no==46 ||  p.field_no==64)
     );
     this.state.Arr5 =this.state.class.filter(p =>
      (p.field_no==8 || p.field_no==29 ||  p.field_no==47 ||  p.field_no==65)
     );
     this.state.Arr6 =this.state.class.filter(p =>
      (p.field_no==9 || p.field_no==30 ||  p.field_no==48 ||  p.field_no==66)
     );
     this.state.Arr7 =this.state.class.filter(p =>
      (p.field_no==10 || p.field_no==31 ||  p.field_no==49 ||  p.field_no==67)
     );
     this.state.Arr8 =this.state.class.filter(p =>
      (p.field_no==11 || p.field_no==32 ||  p.field_no==50 ||  p.field_no==68)
     );
     this.state.Arr9 =this.state.class.filter(p =>
      (p.field_no==12 || p.field_no==33)
     );  
     this.state.Arr10 =this.state.class.filter(p =>
      (p.field_no==51 ||  p.field_no==69)
     );
     this.state.Arr11 =this.state.class.filter(p =>
      (p.field_no==13 || p.field_no==14 ||  p.field_no==15 ||  p.field_no==16 || p.field_no==17 || p.field_no==18 ||  p.field_no==19
   ||  p.field_no==34 || p.field_no==35 ||  p.field_no==36 ||  p.field_no==37 || p.field_no==38 || p.field_no==39 ||  p.field_no==40
   ||  p.field_no==52 || p.field_no==53 ||  p.field_no==54 ||  p.field_no==55 || p.field_no==56 || p.field_no==57 ||  p.field_no==58
   ||  p.field_no==70 || p.field_no==71 ||  p.field_no==72 ||  p.field_no==73 || p.field_no==74 || p.field_no==75 ||  p.field_no==76)
     );
     this.state.Arr12 =this.state.class.filter(p =>
      (p.field_no==20 || p.field_no==41 ||  p.field_no==59 ||  p.field_no==77)
     );
     this.state.Arr13 =this.state.class.filter(p =>
      (p.field_no==21 || p.field_no==42 ||  p.field_no==60 ||  p.field_no==78)
     );
  }
  render() {
    return (
        <ClassCheckDiv>
          <Logo />
          <My />
          <ClassCheckWrapWrapDiv>
            <ClassCheckP>제외할 수업을 선택해주세요.</ClassCheckP>
            <button onClick={this.reset}>reset</button>
            <button onClick={this.filldata}>fill</button>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            이화진선미
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr1.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            사고와 표현
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr2.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            글로벌 의사소통
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr3.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            융복합(문학과언어)
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr4.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            융복합(표현과예술)
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr5.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            융복합(역사와철학)
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr6.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            융복합(인간과사회)
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr7.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            융복합(과학과기술)
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr8.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            융합기초
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr9.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            컴퓨팅과수리적사고
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr10.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            전공기초
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr10.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            전공필수
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr10.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <div className="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            전공선택
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                  this.state.Arr10.map(c =>
                    <li><input type="checkbox" class="dropdown-item" value={c.class_no} onChange={this.handleChange}/>{c.class_name} {c.class_division}분반</li>)
                }
              </ul>
            </div>
            <button onClick={this.completeClass}>전송</button>
          </ClassCheckWrapWrapDiv>
        </ClassCheckDiv>
    );
  }
}

export default ClassCheck;