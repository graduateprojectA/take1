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
            class: [],n:[],nextf:false,pref:false,page:[],p_class:[],t:[],y:0,end:21,
            pagenum: 1,
        };
    }
    changeHandler = (event) => {
        this.setState({page_num: event.target.value});
        console.log(JSON.stringify(this.state.page_num));
    }
    fill1data = (event)=>{
        event.preventDefault();
         let x = this.state.user_course.filter(p =>(p.field_no==1 || p.field_no==2 ||  p.field_no==22 ||  p.field_no==23 || p.field_no==43 ||  p.field_no==61));
         let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        } this.setState({name:"이화진선미"});
    }
    fill2data = (event)=>{
        event.preventDefault();
        let x= this.state.user_course.filter(p =>(p.field_no==3 || p.field_no==24 ||  p.field_no==44 ||  p.field_no==62));
        let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        } this.setState({name:"사고와 표현"});
    }
    fill3data = (event)=>{
        event.preventDefault();
        let x= this.state.user_course.filter(p =>(p.field_no==4 || p.field_no==5 ||  p.field_no==6 ||  p.field_no==25 || p.field_no==26 ||  p.field_no==27 ||  p.field_no==45 ||  p.field_no==63 ));
         let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"글로벌의사소통"});
    }
    fill4data = (event)=>{
        event.preventDefault();
        let x= this.state.user_course.filter(p => (p.field_no==7 || p.field_no==28 ||  p.field_no==46 ||  p.field_no==64));
        let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"융복합(문학과 언어)"});
    }
    fill5data = (event)=>{
        event.preventDefault();
         let x = this.state.user_course.filter(p => 
            (p.field_no==8 || p.field_no==29 ||  p.field_no==47 ||  p.field_no==65));
         let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"융복합(표현과 예술)"});
    }
    fill6data = (event)=>{
        event.preventDefault();
        let x = this.state.user_course.filter(p =>(p.field_no==9 || p.field_no==30 ||  p.field_no==48 ||  p.field_no==66));
        let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"융복합(역사와 철학)"});
    }
    fill7data = (event)=>{
        event.preventDefault();
        let x = this.state.user_course.filter(p =>(p.field_no==10 || p.field_no==31 ||  p.field_no==49 ||  p.field_no==67));
         let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        } this.setState({name:"융복합(인간과 사회)"});
    }
    fill8data = (event)=>{
        event.preventDefault();
        let x = this.state.user_course.filter(p =>(p.field_no==11 || p.field_no==32 ||  p.field_no==50 ||  p.field_no==68));
        let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"융복합(과학과기술)"});
    }
    fill9data = (event)=>{
        event.preventDefault();
         let x= this.state.user_course.filter(p =>(p.field_no==12 || p.field_no==33));
         let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"융합기초"});
    }
    fill10data = (event)=>{
        event.preventDefault();
        let x = this.state.user_course.filter(p =>(p.field_no==51 ||  p.field_no==69));
        let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        } this.setState({name:"컴퓨팅과 수리적 사고"});
    }
    fill11data = (event)=>{
        event.preventDefault();
        let x = this.state.user_course.filter(p => 
            (p.field_no==13 || p.field_no==14 ||  p.field_no==15 ||  p.field_no==16 || p.field_no==17 || p.field_no==18 ||  p.field_no==19
                ||  p.field_no==34 || p.field_no==35 ||  p.field_no==36 ||  p.field_no==37 || p.field_no==38 || p.field_no==39 ||  p.field_no==40
                ||  p.field_no==52 || p.field_no==53 ||  p.field_no==54 ||  p.field_no==55 || p.field_no==56 || p.field_no==57 ||  p.field_no==58
                ||  p.field_no==70 || p.field_no==71 ||  p.field_no==72 ||  p.field_no==73 || p.field_no==74 || p.field_no==75 ||  p.field_no==76)
                );
                let y =x.length;
                if(y>20){
                    let s=1;
                 let pe=0;
                 let e=20;
                 let page= x.map(p =>
                     this.state.p_class = {
                        user_course_no : p.user_course_no,
                       page_no: s++,
                       course_no: p.course_no,
                       course_name:p.course_name
                   });
                   let temp = page.filter(p=>p.page_no>pe);
                   this.setState({n:temp.filter(p=>p.page_no<e)});
                   this.setState({t:temp});
                   s=1;
                   this.setState({page : x.map(p =>
                    this.state.p_class = {
                      user_course_no : p.user_course_no,
                      page_no: s++,
                      course_no: p.course_no,
                      course_name:p.course_name
                  })});
                   
                   this.setState({y:y});
                      this.setState({pref:false});
                      this.setState({nextf:false});
                }else{
                    this.setState({n:x});
                    this.setState({pref:true});
                      this.setState({nextf:true});
                }this.setState({name:"전공기초"});
    }
    fill12data = (event)=>{
        event.preventDefault();
        let x =this.state.user_course.filter(p =>(p.field_no==20 || p.field_no==41 ||  p.field_no==59 ||  p.field_no==77));
        let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"전공필수"});
    }
    fill13data = (event)=>{
        event.preventDefault();
        let x = this.state.user_course.filter(p =>(p.field_no==21 || p.field_no==42 ||  p.field_no==60 ||  p.field_no==78));
        let y =x.length;
        if(y>20){
            let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
                user_course_no : p.user_course_no,
               page_no: s++,
               course_no: p.course_no,
               course_name:p.course_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
            this.state.p_class = {
              user_course_no : p.user_course_no,
              page_no: s++,
              course_no: p.course_no,
              course_name:p.course_name
          })});
           
           this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }this.setState({name:"전공선택"});
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
      next=(event)=>{
        let e=this.state.end+20;
        let s=this.state.pagenum+20;
        console.log(e);
         console.log(s);
        if(e<=this.state.y){
         let x=this.state.t.filter(p=>p.page_no<e);
         this.setState({n:x.filter(p=>p.page_no>s)});
         this.setState({end:e});
         this.setState({pagenum:s});
         this.setState({pref:false});
     }else{
         this.setState({nextf:true});
         let x=this.state.t.filter(p=>p.page_no<e);
         this.setState({n:x.filter(p=>p.page_no>s)});
         this.setState({end:e});
         this.setState({pagenum:s});
     }
        }
         
     pre=(event)=>{
         let e=this.state.end-20;
         let s=this.state.pagenum-20;
         console.log(e);
         console.log(s);
         if(s>0){
             let x=this.state.t.filter(p=>p.page_no<e);
             this.setState({n:x.filter(p=>p.page_no>s)});
             this.setState({end:e});
             this.setState({pagenum:s});
             this.setState({nextf:false});
         }else{
            this.setState({pref:true});
            let x=this.state.t.filter(p=>p.page_no<e);
            this.setState({n:x.filter(p=>p.page_no>s)});
            this.setState({end:e});
            this.setState({pagenum:s});
         }
     }
      completeCheck = (event) => {
        event.preventDefault();
        let time = this.state.user_course;
        console.log("time" + JSON.stringify(time));
        UserService.SendClassUser(time).then(res => {
                this.props.history.push('./precheck');
        });
    }
    componentDidMount() {
        UserService.login().then((res) => {
            this.setState({ user_no: res.data });
            UserService.postUser(this.state.user_no).then((res)=>{
                UserService.course2User().then((res) => {
                    this.setState({ user_course: res.data});
                    console.log("get result => " + JSON.stringify(res.data));
                });
            });
            console.log("get result => " + JSON.stringify(res.data));
        });
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
            <ClassCheckP>{this.state.name}</ClassCheckP>
            <div className="courseList">
            <ul>
                {
                    this.state.n.map((fruite) => {
                        return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...fruite} />)
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

export default CourseCheck;