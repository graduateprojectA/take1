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
  fill1data = (event)=>{
    event.preventDefault();
    let x = this.state.class.filter(p =>(p.field_no==1 || p.field_no==2 ||  p.field_no==22 ||  p.field_no==23 || p.field_no==43 ||  p.field_no==61));
     let y =x.length;
     if(y>20){
         let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           console.log(temp.filter(p=>p.page_no<e));
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           })});
           
           this.setState({y:y});
           this.setState({pref:false});
           this.setState({nextf:false});
     }else{
         this.setState({n:x});
         this.setState({pref:true});
           this.setState({nextf:true});
     }
     this.setState({name:"이화진선미"});
    }
fill2data = (event)=>{
    event.preventDefault();
    let x=this.state.class.filter(p =>(p.field_no==3 || p.field_no==24 ||  p.field_no==44 ||  p.field_no==62));
    let y =x.length;
    if(y>20){
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          console.log(temp.filter(p=>p.page_no<e));
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
    this.setState({name:"사고와 표현"});
}
fill3data = (event)=>{
    event.preventDefault();
     let x = this.state.class.filter(p =>(p.field_no==4 || p.field_no==5 ||  p.field_no==6 ||  p.field_no==25 || p.field_no==26 ||  p.field_no==27 ||  p.field_no==45 ||  p.field_no==63 ));
     let y =x.length;
     if(y>20){
         let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           console.log(temp.filter(p=>p.page_no<e));
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           })});
           
           this.setState({y:y});
           this.setState({pref:false});
           this.setState({nextf:false});
     }else{
         this.setState({n:x});
         this.setState({pref:true});
           this.setState({nextf:true});
     }
     this.setState({name:"글로벌의사소통"});
}
fill4data = (event)=>{
    event.preventDefault();
    let x= this.state.class.filter(p => (p.field_no==7 || p.field_no==28 ||  p.field_no==46 ||  p.field_no==64));
    let y =x.length;
    if(y>20){
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          console.log(temp.filter(p=>p.page_no<e));
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
    this.setState({name:"융복합(문학과 언어)"});
}
fill5data = (event)=>{
    event.preventDefault();
    let x= this.state.class.filter(p => (p.field_no==8 || p.field_no==29 ||  p.field_no==47 ||  p.field_no==65));
     let y =x.length;
     if(y>20){
         let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           console.log(temp.filter(p=>p.page_no<e));
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           })});
           
           this.setState({y:y});
           this.setState({pref:false});
           this.setState({nextf:false});
     }else{
         this.setState({n:x});
         this.setState({pref:true});
           this.setState({nextf:true});
     }
     this.setState({name:"융복합(표현과 예술)"});
}
fill6data = (event)=>{
    event.preventDefault();
    let x=this.state.class.filter(p =>(p.field_no==9 || p.field_no==30 ||  p.field_no==48 ||  p.field_no==66));
    let y =x.length;
    if(y>20){
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          console.log(temp.filter(p=>p.page_no<e));
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
    this.setState({name:"융복합(역사와 철학)"});
}
fill7data = (event)=>{
    event.preventDefault();
     let x= this.state.class.filter(p =>(p.field_no==10 || p.field_no==31 ||  p.field_no==49 ||  p.field_no==67));
     let y =x.length;
     if(y>20){
         let s=1;
         let pe=0;
         let e=20;
         let page= x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           });
           let temp = page.filter(p=>p.page_no>pe);
           this.setState({n:temp.filter(p=>p.page_no<e)});
           console.log(temp.filter(p=>p.page_no<e));
           this.setState({t:temp});
           s=1;
           this.setState({page : x.map(p =>
             this.state.p_class = {
               page_no: s++,
               class_no: p.class_no,
               class_name:p.class_name
           })});
           
           this.setState({y:y});
           this.setState({pref:false});
           this.setState({nextf:false});
     }else{
         this.setState({n:x});
         this.setState({pref:true});
           this.setState({nextf:true});
     }
     this.setState({name:"융복합(인간과 사회)"});
}
fill8data = (event)=>{
    event.preventDefault();
    let x= this.state.class.filter(p =>(p.field_no==11 || p.field_no==32 ||  p.field_no==50 ||  p.field_no==68));
    let y =x.length;
    if(y>20){
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          console.log(temp.filter(p=>p.page_no<e));
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
    this.setState({name:"융복합(과학과기술)"});
}
fill9data = (event)=>{
    event.preventDefault();
     let x= this.state.class.filter(p =>(p.field_no==12 || p.field_no==33));
     let y =x.length;
     if(y>20){
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          console.log(temp.filter(p=>p.page_no<e));
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
     this.setState({name:"융합기초"});
}
fill10data = (event)=>{
    event.preventDefault();
    let x = this.state.class.filter(p => (p.field_no==51 ||  p.field_no==69));
    let y =x.length;
    if(y>20){
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          console.log(temp.filter(p=>p.page_no<e));
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
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
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
    this.setState({name:"전공기초"});
}
fill12data = (event)=>{
    event.preventDefault();
    let x = this.state.class.filter(p => 
        (p.field_no==20 || p.field_no==41 ||  p.field_no==59 ||  p.field_no==77));
        let y =x.length;
        if(y>20){
            let s=1;
            let pe=0;
            let e=20;
            let page= x.map(p =>
                this.state.p_class = {
                  page_no: s++,
                  class_no: p.class_no,
                  class_name:p.class_name
              });
              let temp = page.filter(p=>p.page_no>pe);
              this.setState({n:temp.filter(p=>p.page_no<e)});
              console.log(temp.filter(p=>p.page_no<e));
              this.setState({t:temp});
              s=1;
              this.setState({page : x.map(p =>
                this.state.p_class = {
                  page_no: s++,
                  class_no: p.class_no,
                  class_name:p.class_name
              })});
              
              this.setState({y:y});
              this.setState({pref:false});
              this.setState({nextf:false});
        }else{
            this.setState({n:x});
            this.setState({pref:true});
              this.setState({nextf:true});
        }
    this.setState({name:"전공필수"});
}
fill13data = (event)=>{
    event.preventDefault();
    let x= this.state.class.filter(p =>(p.field_no==21 || p.field_no==42 ||  p.field_no==60 ||  p.field_no==78));
    let y =x.length;
    if(y>20){
        let s=1;
        let pe=0;
        let e=20;
        let page= x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          });
          let temp = page.filter(p=>p.page_no>pe);
          this.setState({n:temp.filter(p=>p.page_no<e)});
          console.log(temp.filter(p=>p.page_no<e));
          this.setState({t:temp});
          s=1;
          this.setState({page : x.map(p =>
            this.state.p_class = {
              page_no: s++,
              class_no: p.class_no,
              class_name:p.class_name
          })});
          
          this.setState({y:y});
          this.setState({pref:false});
          this.setState({nextf:false});
    }else{
        this.setState({n:x});
        this.setState({pref:true});
          this.setState({nextf:true});
    }
    this.setState({name:"전공선택"});
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