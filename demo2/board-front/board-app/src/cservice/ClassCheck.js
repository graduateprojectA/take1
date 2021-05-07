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
    height: 80%;
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
        p_class:[],t:[],page:[],
        newArr:[],
        n:[],m:[],pagenum:0,maxnum:0,page:[],start:1,end:20,
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
    /*
    UserService.CheckClassUser(this.state.newArr).then(res => {
            this.props.history.push('./myPage');
    });*/
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
  fill1data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==1 || p.field_no==2 ||  p.field_no==22 ||  p.field_no==23 || p.field_no==43 ||  p.field_no==61))});
     this.setState({name:"이화진선미"});
    }
fill2data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==3 || p.field_no==24 ||  p.field_no==44 ||  p.field_no==62))});
    this.setState({name:"사고와 표현"});
}
fill3data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==4 || p.field_no==5 ||  p.field_no==6 ||  p.field_no==25 || p.field_no==26 ||  p.field_no==27 ||  p.field_no==45 ||  p.field_no==63 ))});
     this.setState({name:"글로벌의사소통"});
}
fill4data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p => (p.field_no==7 || p.field_no==28 ||  p.field_no==46 ||  p.field_no==64))});
    this.setState({name:"융복합(문학과 언어)"});
}
fill5data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p => (p.field_no==8 || p.field_no==29 ||  p.field_no==47 ||  p.field_no==65))});
     this.setState({name:"융복합(표현과 예술)"});
}
fill6data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==9 || p.field_no==30 ||  p.field_no==48 ||  p.field_no==66))});
    this.setState({name:"융복합(역사와 철학)"});
}
fill7data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==10 || p.field_no==31 ||  p.field_no==49 ||  p.field_no==67))});
     this.setState({name:"융복합(인간과 사회)"});
}
fill8data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==11 || p.field_no==32 ||  p.field_no==50 ||  p.field_no==68))});
    this.setState({name:"융복합(과학과기술)"});
}
fill9data = (event)=>{
    event.preventDefault();
     this.setState({n : this.state.class.filter(p =>(p.field_no==12 || p.field_no==33))});
     this.setState({name:"융합기초"});
}
fill10data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==51 ||  p.field_no==69))});
    this.setState({name:"컴퓨팅과 수리적 사고"});
}
fill11data = (event)=>{
    event.preventDefault();
    let x = this.state.class.filter(p => 
        (p.field_no==13 || p.field_no==14 ||  p.field_no==15 ||  p.field_no==16 || p.field_no==17 || p.field_no==18 ||  p.field_no==19
            ||  p.field_no==34 || p.field_no==35 ||  p.field_no==36 ||  p.field_no==37 || p.field_no==38 || p.field_no==39 ||  p.field_no==40
            ||  p.field_no==52 || p.field_no==53 ||  p.field_no==54 ||  p.field_no==55 || p.field_no==56 || p.field_no==57 ||  p.field_no==58
            ||  p.field_no==70 || p.field_no==71 ||  p.field_no==72 ||  p.field_no==73 || p.field_no==74 || p.field_no==75 ||  p.field_no==76)
            );
     let y =x.length;
    if(y>20){
        let page= x.map(p =>
            this.state.p_class = {
              page_no: this.state.start++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>this.state.pagenum);
          this.setState({n:temp.filter(p=>p.page_no<this.state.end)});
          this.setState({t:temp});
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: this.state.start++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
    }else{
        this.setState({n:x});
    }
    this.setState({name:"전공기초"});
}
fill12data = (event)=>{
    event.preventDefault();
    let x = this.state.class.filter(p => 
        (p.field_no==20 || p.field_no==41 ||  p.field_no==59 ||  p.field_no==77));
     let y =x.length;
    if(y>20){
        this.setState({max:parseInt(y/20)+1});
        let page = x.map(p =>
            this.state.p_class = {
              page_no: this.state.start++,
              class_no: p.class_no
          });
        console.log(page);
    }else{
        this.setState({n:x});
    }
    this.setState({name:"전공필수"});
}
fill13data = (event)=>{
    event.preventDefault();
    this.setState({n : this.state.class.filter(p =>(p.field_no==21 || p.field_no==42 ||  p.field_no==60 ||  p.field_no==78))});
    this.setState({name:"전공선택"});
}
writelen=(event)=>{
    console.log(this.state.m.length);
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
next=(event)=>{
   let e=this.state.end+20;
   let s=this.state.pagenum+20;
    let x=this.state.t.filter(p=>p.page_no<e);
    this.setState({n:x.filter(p=>p.page_no>s)});
    this.setState({end:e});
    this.setState({pagenum:s});
}
pre=(event)=>{
    let e=this.state.end-20;
    let s=this.state.pagenum-20;
     let x=this.state.t.filter(p=>p.page_no<e);
     this.setState({n:x.filter(p=>p.page_no>s)});
     this.setState({end:e});
     this.setState({pagenum:s});
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
          <ClassCheckWrapWrapDiv>
            <ClassCheckP>
            <button onClick={this.reset} >reset</button>
            <button onClick={this.setup} >확인</button>
            <br/><br/>
            {this.state.name}
            </ClassCheckP>
            <button onClick={this.pre} >&#10094;</button>
            <button onClick={this.next} className="nextArrow">&#10095;</button>
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
                        
            
          </ClassCheckWrapWrapDiv>
          <button className="NextA" onClick={this.completeClass}>&#10095;</button>
        </ClassCheckDiv>
    );
  }
}

export default ClassCheck;