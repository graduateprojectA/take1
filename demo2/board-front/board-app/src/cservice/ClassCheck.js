/*
ClassCheck
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

const ClassCheckP = styled.p`
    margin-top: 1%;
    text-align: center; 
    font-size: 1.2em;
    background-color: yellow;
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
        user_class: [],nextf:false,pref:false,
        p_class:[],t:[],
        newArr:[],
        n:[],m:[],pagenum:0,maxnum:0,page:[],start:1,end:20,sindex:0,eindex:0,y:0,
        name:"",
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
    console.log(res.data);
    });
    UserService.login().then((res) => {
      this.setState({ user_no: res.data });
      console.log("get result => " + JSON.stringify(res.data));
    });

   
  }

setup = (event)=>{
      this.setState({newArr : this.state.class.map(p =>
        this.state.user_class = {
          user_no: this.state.user_no,
          class_no: p.class_no,
          class_credit : p.class_credit,
          class_pre:false,
          class_next: false
      }
       )});
       
       
}

reset=(event)=>{
  event.preventDefault();
    window.location.replace("/classCheck")
}
  render() {
    return (
        <ClassCheckDiv>
          <Logo />
          <My />
          <button className="NextA" onClick={this.completeClass}>&#10095;</button>
          <button onClick={this.reset} >reset</button>
          <button onClick={this.setup} >확인</button>
          <div className="TableCheckWrapWrapDiv"><br/>
                <h4 style={{color:"red", display:"inline"}}>[수업 분반 확인] </h4>
                <h4 style={{display:"inline"}}>원하지 않는 분반을 선택해주세요.<br/>
                선택하지 않은 수업들은 모두 시간표 조합에 적용됩니다. <br/> 
                우측 흰색 화살표를 눌러, 최적의 시간표를 얻어보세요!</h4>
          <ClassCheckP>{this.state.name}</ClassCheckP>
          <div className="classList">
          <ul>
          {
            this.state.n.map((fruite) => {
              return (<CheckBox2 handleChange={this.handleChange}  {...fruite} />)
                })
          }
          </ul>
          </div>
          {/* 밑에 페이지 넘버 */}
          <button onClick={this.pre} className="preArrow" disabled={this.state.pref} >Pre</button>
          <button onClick={this.next} className="nextArrow" disabled={this.state.nextf}>Next</button>
          <div className="pagiation">
            <button onClick={this.fill1data} className="pagebtn">1</button>
            <button onClick={this.fill2data} className="pagebtn">2</button>
            <button onClick={this.fill3data} className="pagebtn">3</button>
            <button onClick={this.fill4data} className="pagebtn">4</button>
            <button onClick={this.fill5data} className="pagebtn">5</button>
            <button onClick={this.fill6data} className="pagebtn">6</button>
            <button onClick={this.fill7data} className="pagebtn">7</button>
            <button onClick={this.fill8data} className="pagebtn">8</button>
            <button onClick={this.fill9data} className="pagebtn">9</button>
            <button onClick={this.fill10data} className="pagebtn">10</button>
            <button onClick={this.fill11data} className="pagebtn">11</button>
            <button onClick={this.fill12data} className="pagebtn">12</button>
            <button onClick={this.fill13data} className="pagebtn">13</button>
            </div>
          </div>
        </ClassCheckDiv>
    );
  }
}

export default ClassCheck;