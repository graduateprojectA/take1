/*
CourseCheck
*/
import styled from "styled-components";
import React, { Component} from 'react';
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
const ClassCheckP = styled.p`
    margin-top: 1%;
    text-align: center; 
    font-size: 1.2em;
    background-color: yellow;
`;

class CourseCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_no:2,
            user_course: [
                {user_no : 1, class_no: "기독교와세계", class_pre: false,class_next:false},
                {user_no : 1, class_no: "공존과협력의유토피아", class_pre: false,class_next:false},
                {user_no : 1, class_no: "관계의미학:사랑과윤리", class_pre: false,class_next:false},
                {user_no : 1, class_no: "나눔리더십", class_pre: false,class_next:false},
            ],
            class: [],n:[],nextf:false,pref:false,page:[],p_class:[],t:[],y:0,end:0,start:0,
            testd:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        };
    }
    componentDidMount() {
        UserService.login().then((res) => {
            this.setState({ user_no: res.data });
            UserService.postUser(this.state.user_no).then((res)=>{
                UserService.course2User().then((res) => {
                  this.setState({ user_course: res.data});
                  let s=0;
                  this.setState({page : res.data.map(p =>
                    this.state.p_class = {
                      user_course_no : p.user_course_no,
                      page_no: s++,
                      course_no: p.course_no,
                      course_name:p.course_name
                  })});
                  this.setState({end:s/15+1});
                });
            });
            console.log("get result => " + JSON.stringify(res.data));
        });
    }
    completeCheck = (event) => {
      event.preventDefault();
      let time = this.state.user_course;
      console.log("time" + JSON.stringify(time));
  }
  changeHandler = (event) => {
    let u=this.state.page;
    let s = (event.target.value-1)*15;
    this.setState({ n: u.filter(p=>p.page_no>=s&&p.page_no<s+15)});
}
  handleCheckChieldElement = (event) => {
    let user_course = this.state.user_course
    user_course.forEach(u => {
       if (u.user_course_no == event.target.value) {
        if (u.course_done) {
            u.course_done = false
        } else {
            u.course_done = true
        }
       }
    this.setState({user_course: user_course})
})
  }
    render() {
        return (
          <ClassCheckDiv>
          <Logo />
          <My />
          <button className="NextA" onClick={this.completeCheck}>&#10095;</button>
          <div className="TableCheckWrapWrapDiv"><br/>
              <h4 style={{color:"red", display:"inline"}}>[커리큘럼 확인] </h4>
              <h4 style={{display:"inline"}}>여태 들었던 모든 수업을 선택해주세요.<br/>
              재수강을 원하실 경우에는 체크하지 말아주세요. <br/> 
              우측 흰색 화살표를 눌러, 다음 페이지로 이동하세요.</h4>
        
          <div className="courseList">
          <ul>
              {
                  this.state.n.map((fruite) => {
                      return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
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


export default CourseCheck;