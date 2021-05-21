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
        n:[],m:[],pagenum:0,maxnum:0,page:[],start:1,end:20,sindex:0,eindex:0,y:0,s:0,
        testd:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],
        name:"",
    };
}
  handleChange = (e) => {
    let x=this.state.page;
    x.map(u => {
           if (u.class_no == e.target.value) {
            if (u.class_next) {
                u.class_next = false;
            } else {
                u.class_next = true
            }
           }
      })
      
      let s=0;
      let yy = x.map(p =>
        this.state.p_class = {
          user_no:this.state.user_no,
        page_no: s++,
        class_no: p.class_no,
        class_name:p.class_name,
        professor_name:p.professor_name,
        class_division:p.class_division,
        class_credit:p.class_credit,
        class_grade:p.class_grade,
        class_pre:false,
        class_next:p.class_next
});console.log(yy);
this.setState({page:yy});
  };

  completeClass = (event) => {
    event.preventDefault();
    
    let s=0;
    let newArr = this.state.page.map(p =>
      this.state.p_class = {
        user_no:this.state.user_no,
        page_no: s++,
        class_no: p.class_no,
        class_name:p.class_name,
        class_division:p.class_division,
        professor_name:p.professor_name,
        class_credit:p.class_credit,
        class_grade:p.class_grade,
        class_pre:false,
        class_next:p.class_next
      });
      console.log(newArr)
    
    UserService.CheckClassUser(newArr).then(res => {
            this.props.history.push('./timetable');
    });
}
  componentDidMount() {
    UserService.login().then((res) => {
      this.setState({ user_no: res.data });
      console.log("get result => " + JSON.stringify(res.data));
      UserService.class2User().then((res) => {
        this.setState({ class: res.data });
        let s=0;
        if(res.data.length>0){
          this.setState({rf:true});
                    console.log(this.state.rf);
          this.setState({page : res.data.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name,
              class_division:p.class_division,
              professor_name:p.professor_name,
              class_credit:p.class_credit,
              class_grade:p.class_grade,
              class_pre:false,
              class_next:false
})});
this.setState({end:s/15+1});
this.setState({ n: this.state.page.filter(p=>p.page_no>=0&&p.page_no<15)});
        }
      console.log(res.data);
      });
    });

   
  }
  changeHandler = (event) => {
    let u=this.state.page;
    let s = (event.target.value-1)*15;
    this.setState({ n: u.filter(p=>p.page_no>=s&&p.page_no<s+15)});
    this.setState({s:s});
}
next=(event)=>{
  let u=this.state.page;
  let q = this.state.s+15;
  console.log((this.state.end*15)+" "+q);
  if(q<(this.state.end*15-15)){
      this.setState({pref:false});
      this.setState({ n: u.filter(p=>p.page_no>=q&&p.page_no<q+15)});
      this.setState({s:q});
  }else{
      this.setState({nextf:true});
      this.setState({s:q});
  }
  
  }
   
pre=(event)=>{
  let u=this.state.page;
  let q = this.state.s-15;
  if(q>=0){
      this.setState({nextf:false});
      this.setState({ n: u.filter(p=>p.page_no>=q&&p.page_no<q+15)});
  this.setState({s:q});
  }else{
      this.setState({pref:true});
      this.setState({s:q});
  }
  
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
          <div className="TableCheckWrapWrapDiv"><br/>
                <h5 style={{color:"red", display:"inline"}}>[수업 분반 확인] </h5>
                <h5 style={{display:"inline"}}>원하지 않는 분반을 선택해주세요.<br/>
                선택하지 않은 수업들은 모두 시간표 조합에 적용됩니다. <br/> 
                우측 흰색 화살표를 눌러, 최적의 시간표를 얻어보세요!  </h5>
          {/* <ClassCheckP>{this.state.name}</ClassCheckP> */}
          <button  onClick={this.reset}  class="rButton" style={{display: this.state.rf ?'none':'inline'}}>확인하기</button>
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
      <div className="arrowp">
          <button onClick={this.pre} className="preArrow" disabled={this.state.pref} >Pre</button>
          </div>
          <div  className="arrown">
            <button onClick={this.next} className="nextArrow" disabled={this.state.nextf}>Next</button>
          </div>
      </div>
    </ClassCheckDiv>
    );
  }
}

export default ClassCheck;