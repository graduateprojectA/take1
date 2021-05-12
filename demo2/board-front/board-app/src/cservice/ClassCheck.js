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
        testd:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
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
      let s=0;
      this.setState({page : res.data.map(p =>
                    this.state.p_class = {
                      page_no: s++,
                      class_no: p.class_no,
                      class_name:p.class_name,
                      professor_name:p.professor_name,
                      class_division:p.class_division
      })});
      this.setState({end:s/15+1});
    console.log(res.data);
    });
    UserService.login().then((res) => {
      this.setState({ user_no: res.data });
      console.log("get result => " + JSON.stringify(res.data));
    });

   
  }
  changeHandler = (event) => {
    let u=this.state.page;
    let s = (event.target.value-1)*15;
    this.setState({ n: u.filter(p=>p.page_no>=s&&p.page_no<s+15)});
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
          {/* <ClassCheckP>{this.state.name}</ClassCheckP> */}
          <div className="courseList">
          <ul>
          {
            this.state.n.map((fruite) => {
              return (<CheckBox2 handleChange={this.handleChange}  {...fruite} />)
                })
          }
          </ul>
        </div>
        <div className="pagination">
        {this.state.testd.map(p => (
        <li><button onClick={this.changeHandler} className="pagebtn"value={p} style={{display: p<=this.state.end?'inline':'none'}}>{p}</button></li>
        ))}
      </div>
      </div>
    </ClassCheckDiv>
    );
  }
}

export default ClassCheck;