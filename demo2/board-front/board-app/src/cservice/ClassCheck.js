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
import CheckBox2 from "./CheckBox2";
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
        user_class: [],
        newArr:[],
        n:[]
    };
}
  handleChange = (e) => {
    let y=this.state.newArr;
    y.map(u => {
           if (u.class_no == e.target.value) {
            if (u.class_next) {
                u.class_next = false
            } else {
                u.class_next = true
            }
           }
      })
      this.setState({newArr: y})
  };
  completeClass = (event) => {
    event.preventDefault();
    console.log(this.state.newArr)
    UserService.CheckClassUser(this.state.newArr).then(res => {
            this.props.history.push('./myPage');
    });
}
  componentDidMount() {
    UserService.class2User().then((res) => {
      this.setState({ class: res.data });
      this.setState({newArr : res.data.map(p =>
        this.state.user_class = {
          user_no: this.state.user_no,
          class_no: p.class_no,
          class_credit : p.class_credit,
          class_pre:false,
          class_next: false
      }
       )});
    console.log("get result => " + JSON.stringify(res.data));
    });
    UserService.login().then((res) => {
      this.setState({ user_no: res.data });
      console.log("get result => " + JSON.stringify(res.data));
    });
   
  }
  fill1data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==1 || p.field_no==2 ||  p.field_no==22 ||  p.field_no==23 || p.field_no==43 ||  p.field_no==61))});
     
    }
fill2data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==3 || p.field_no==24 ||  p.field_no==44 ||  p.field_no==62))});
}
fill3data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==4 || p.field_no==5 ||  p.field_no==6 ||  p.field_no==25 || p.field_no==26 ||  p.field_no==27 ||  p.field_no==45 ||  p.field_no==63 ))});
}
fill4data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p => (p.field_no==7 || p.field_no==28 ||  p.field_no==46 ||  p.field_no==64))});
}
fill5data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p => (p.field_no==8 || p.field_no==29 ||  p.field_no==47 ||  p.field_no==65))});
}
fill6data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==9 || p.field_no==30 ||  p.field_no==48 ||  p.field_no==66))});
}
fill7data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==10 || p.field_no==31 ||  p.field_no==49 ||  p.field_no==67))});
}
fill8data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==11 || p.field_no==32 ||  p.field_no==50 ||  p.field_no==68))});
    console.log(JSON.stringify(this.state.n));
}
fill9data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==12 || p.field_no==33))});
}
fill10data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==51 ||  p.field_no==69))});
}
fill11data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p => 
        (p.field_no==13 || p.field_no==14 ||  p.field_no==15 ||  p.field_no==16 || p.field_no==17 || p.field_no==18 ||  p.field_no==19
            ||  p.field_no==34 || p.field_no==35 ||  p.field_no==36 ||  p.field_no==37 || p.field_no==38 || p.field_no==39 ||  p.field_no==40
            ||  p.field_no==52 || p.field_no==53 ||  p.field_no==54 ||  p.field_no==55 || p.field_no==56 || p.field_no==57 ||  p.field_no==58
            ||  p.field_no==70 || p.field_no==71 ||  p.field_no==72 ||  p.field_no==73 || p.field_no==74 || p.field_no==75 ||  p.field_no==76)
            )});
}
fill12data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==20 || p.field_no==41 ||  p.field_no==59 ||  p.field_no==77))});
}
fill13data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==21 || p.field_no==42 ||  p.field_no==60 ||  p.field_no==78))});
}
  render() {
    return (
        <ClassCheckDiv>
          <Logo />
          <My />
          <ClassCheckWrapWrapDiv>
            <ClassCheckP>제외할 수업을 선택해주세요.</ClassCheckP>
            <ul>
                            {
                                this.state.n.map((fruite) => {
                                    return (<CheckBox2 handleChange={this.handleChange}  {...fruite} />)
                                })
                            }
                        </ul>
            <div className="pagiation">
                        <button onClick={this.fill1data}>1</button><button onClick={this.fill2data}>2</button><button onClick={this.fill3data}>3</button>
                        <button onClick={this.fill4data}>4</button><button onClick={this.fill5data}>5</button><button onClick={this.fill6data}>6</button>
                        <button onClick={this.fill7data}>7</button><button onClick={this.fill8data}>8</button><button onClick={this.fill9data}>9</button>
                        <button onClick={this.fill10data}>10</button><button onClick={this.fill11data}>11</button><button onClick={this.fill12data}>12</button><button onClick={this.fill13data}>13</button>
                        </div>
            <button onClick={this.completeClass}>전송</button>
          </ClassCheckWrapWrapDiv>
        </ClassCheckDiv>
    );
  }
}

export default ClassCheck;