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
            class: [],n:[],nextf:false,pref:false,rf:false,page:[],p_class:[],t:[],y:0,end:0,start:0,s:0,
            testd:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        };
    }
    componentDidMount() {
        UserService.login().then((res) => {
            this.setState({ user_no: res.data });
            UserService.postUser(res.data);
            UserService.course2User().then((res) => {
                console.log("get result => " + JSON.stringify(res.data));
              this.setState({ user_course: res.data});
              let s=0;
              if(res.data.map(p => p.user_course_no).length>5){
                this.setState({rf:true});
                console.log(this.state.rf);
                this.setState({page : res.data.map(p =>
                    this.state.p_class = {
                      user_course_no : p.user_course_no,
                      page_no: s++,
                      course_no: p.course_no,
                      course_name:p.course_name,
                      course_done:p.course_done
                  })});
                  this.setState({end:s/15+1});
                  this.setState({ n: this.state.page.filter(p=>p.page_no>=0&&p.page_no<15)});
              }
            });
            console.log("get result => " + JSON.stringify(res.data));
        });
    }
    completeCheck = (event) => {
      event.preventDefault();
      let time = this.state.user_course;
      console.log("time" + JSON.stringify(time));
      
      UserService.SendClassUser(time).then(res => {
        this.props.history.push('./precheck');
});
  }
  changeHandler = (event) => {
    let u=this.state.page;
    let s = (event.target.value-1)*15;
    this.setState({ n: u.filter(p=>p.page_no>=s&&p.page_no<s+15)});
    this.setState({s:s});
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
    let s=0;
    this.setState({page : user_course.map(p =>
        this.state.p_class = {
          user_course_no : p.user_course_no,
          page_no: s++,
          course_no: p.course_no,
          course_name:p.course_name,
          course_done:p.course_done
      })});
})
  }
  next=(event)=>{
    let u=this.state.page;
    let t = this.state.s+15;
    console.log((this.state.end*15)+" "+t);
    if(t<(this.state.end*15-15)){
        this.setState({pref:false});
        this.setState({ n: u.filter(p=>p.page_no>=t&&p.page_no<t+15)});
        this.setState({s:t});
    }else{
        this.setState({nextf:true});
        this.setState({s:t});
    }
    
    }
     
 pre=(event)=>{
    let u=this.state.page;
    let t = this.state.s-15;
    if(t>=0){
        this.setState({nextf:false});
        this.setState({ n: u.filter(p=>p.page_no>=t&&p.page_no<t+15)});
    this.setState({s:t});
    }else{
        this.setState({pref:true});
        this.setState({s:t});
    }
    
 }
 reset=(event)=>{
     event.preventDefault();
     window.location.replace("./courseCheck");
 }
    render() {
        return (
          <ClassCheckDiv>
          <Logo />
          <My />
          <button className="NextA" onClick={this.completeCheck}>&#10095;</button>
          <div className="TableCheckWrapWrapDiv"><br/>
              <h5 style={{color:"red", display:"inline"}}>[커리큘럼 확인] </h5>
              <h5 style={{display:"inline"}}>여태 들었던 모든 수업을 선택해주세요.<br/>
              재수강을 원하실 경우에는 체크하지 말아주세요. <br/> 
              우측 흰색 화살표를 눌러, 다음 페이지로 이동하세요.  </h5>
        <button  onClick={this.reset} class="rButton" style={{display: this.state.rf ?'none':'inline'}}>조회하기</button>
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


export default CourseCheck;