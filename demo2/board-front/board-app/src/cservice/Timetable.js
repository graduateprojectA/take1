/*
Timetable
*/
import styled from "styled-components";
import "../css/style.css";
import React, { Component } from 'react';
import Logo from "./Logo";
import backgroundImage2 from "../components/image/backgroundImage2.png";
import UserService from '../service/UserService';
const TimetableDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;
const TimeWrapDiv = styled.div`
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    border: solid 1px;
    height: 70%;
    width: 50%;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
    border-radius: 10px;
`;
const TimeInfoDiv = styled.div`
    position: absolute;
    top: 25%;
    right: 28%;
    border: solid 1px;
    height: 54%;
    width: 13%;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
`;
const TimeInfoClassDiv = styled.div`
    position: absolute;
    border: solid 1px;
    margin-top: 5px;
    margin-bottom: 5px;
    height: 10%;
    width: 100%;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
`;
class Timetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_no : 2,
            user_info: {user_id:0, user_major:"학과",user_grade:0},
            major_name : "",
            e_class1:[],e_class2:[],e_class3:[],e_class4:[],e_class5:[],
            elective1:[],elective2:[],elective3:[],elective4:[],elective5:[],
            num:[],
            data:0,
            mon_1:"",tue_1:"",wed_1:"",thr_1:"",fri_1:"",
            mon_2:"",tue_2:"",wed_2:"",thr_2:"",fri_2:"",
            mon_3:"",tue_3:"",wed_3:"",thr_3:"",fri_3:"",
            mon_4:"",tue_4:"",wed_4:"",thr_4:"",fri_4:"",
            mon_5:"",tue_5:"",wed_5:"",thr_5:"",fri_5:"",
            mon_6:"",tue_6:"",wed_6:"",thr_6:"",fri_6:"",
            mon_7:"",tue_7:"",wed_7:"",thr_7:"",fri_7:""
        };
    }

    componentDidMount() {
        UserService.login().then((res) => {
          this.setState({ user_no: res.data });
        });
        
        UserService.timetableUser().then((res)=>{
            this.setState({mon_1:res.data.map(p=>p.mon_1)});
            this.setState({mon_2:res.data.map(p=>p.mon_2)});
            this.setState({mon_3:res.data.map(p=>p.mon_3)});
            this.setState({mon_4:res.data.map(p=>p.mon_4)});
            this.setState({mon_5:res.data.map(p=>p.mon_5)});
            this.setState({mon_6:res.data.map(p=>p.mon_6)});
            this.setState({mon_7:res.data.map(p=>p.mon_7)});
            this.setState({tue_1:res.data.map(p=>p.tue_1)});
            this.setState({tue_2:res.data.map(p=>p.tue_2)});
            this.setState({tue_3:res.data.map(p=>p.tue_3)});
            this.setState({tue_4:res.data.map(p=>p.tue_4)});
            this.setState({tue_5:res.data.map(p=>p.tue_5)});
            this.setState({tue_6:res.data.map(p=>p.tue_6)});
            this.setState({tue_7:res.data.map(p=>p.tue_7)});
            this.setState({wed_1:res.data.map(p=>p.wed_1)});
            this.setState({wed_2:res.data.map(p=>p.wed_2)});
            this.setState({wed_3:res.data.map(p=>p.wed_3)});
            this.setState({wed_4:res.data.map(p=>p.wed_4)});
            this.setState({wed_5:res.data.map(p=>p.wed_5)});
            this.setState({wed_6:res.data.map(p=>p.wed_6)});
            this.setState({wed_7:res.data.map(p=>p.wed_7)});
            this.setState({thr_1:res.data.map(p=>p.thr_1)});
            this.setState({thr_2:res.data.map(p=>p.thr_2)});
            this.setState({thr_3:res.data.map(p=>p.thr_3)});
            this.setState({thr_4:res.data.map(p=>p.thr_4)});
            this.setState({thr_5:res.data.map(p=>p.thr_5)});
            this.setState({thr_6:res.data.map(p=>p.thr_6)});
            this.setState({thr_7:res.data.map(p=>p.thr_7)});
            this.setState({fri_1:res.data.map(p=>p.fri_1)});
            this.setState({fri_2:res.data.map(p=>p.fri_2)});
            this.setState({fri_3:res.data.map(p=>p.fri_3)});
            this.setState({fri_4:res.data.map(p=>p.fri_4)});
            this.setState({fri_5:res.data.map(p=>p.fri_5)});
            this.setState({fri_6:res.data.map(p=>p.fri_6)});
            this.setState({fri_7:res.data.map(p=>p.fri_7)});
        });
        UserService.electiveUser().then((res)=>{
            let num1=res.data.map(p=>p[0].timetable_no)[0];
            let num2=res.data.map(p=>p[0].timetable_no)[1];
            let num3=res.data.map(p=>p[0].timetable_no)[2];
            let num4=res.data.map(p=>p[0].timetable_no)[3];
            let num5=res.data.map(p=>p[0].timetable_no)[4];
            this.setState({elective1:res.data.filter(p=>p[0].timetable_no==num1)[0]});
            this.setState({elective2:res.data.filter(p=>p[0].timetable_no==num2)[0]});
            this.setState({elective3:res.data.filter(p=>p[0].timetable_no==num3)[0]});
            this.setState({elective4:res.data.filter(p=>p[0].timetable_no==num4)[0]});
            this.setState({elective5:res.data.filter(p=>p[0].timetable_no==num5)[0]});
             this.setState({e_class1 : res.data.filter(p=>p[0].timetable_no==num1)[0][0]});
             this.setState({e_class2 : res.data.filter(p=>p[0].timetable_no==num1)[0][1]});
             this.setState({e_class3 : res.data.filter(p=>p[0].timetable_no==num1)[0][2]});
             this.setState({e_class4 : res.data.filter(p=>p[0].timetable_no==num1)[0][3]});
             this.setState({e_class5 : res.data.filter(p=>p[0].timetable_no==num1)[0][4]});
             console.log(res.data);
        });
    }
    next=(event)=>{
        if(this.state.data<4){
            this.setState({pref:false});
            this.setState({data:this.state.data+1});
            let a=this.state.data+1;
             if(a==0){
                this.setState({e_class1 :this.state.elective1[0]});
             this.setState({e_class2 :this.state.elective1[1]});
             this.setState({e_class3 : this.state.elective1[2]});
             this.setState({e_class4 : this.state.elective1[3]});
             this.setState({e_class5 : this.state.elective1[4]});
            }
            if(a==1){
                this.setState({e_class1 :this.state.elective2[0]});
             this.setState({e_class2 :this.state.elective2[1]});
             this.setState({e_class3 : this.state.elective2[2]});
             this.setState({e_class4 : this.state.elective2[3]});
             this.setState({e_class5 : this.state.elective2[4]});
            }else if(a==2){
                this.setState({e_class1 :this.state.elective3[0]});
             this.setState({e_class2 :this.state.elective3[1]});
             this.setState({e_class3 : this.state.elective3[2]});
             this.setState({e_class4 : this.state.elective3[3]});
             this.setState({e_class5 : this.state.elective3[4]});
            }else if(a==3){
                this.setState({e_class1 :this.state.elective4[0]});
             this.setState({e_class2 :this.state.elective4[1]});
             this.setState({e_class3 : this.state.elective4[2]});
             this.setState({e_class4 : this.state.elective4[3]});
             this.setState({e_class5 : this.state.elective4[4]});
            }else if(a==4){
                this.setState({e_class1 :this.state.elective5[0]});
             this.setState({e_class2 :this.state.elective5[1]});
             this.setState({e_class3 : this.state.elective5[2]});
             this.setState({e_class4 : this.state.elective5[3]});
             this.setState({e_class5 : this.state.elective5[4]});
            }
        }else{
            let a=this.state.data;
            
            this.setState({nextf:true});
        }
    }
    pre=(event)=>{
        if(this.state.data>0){
            this.setState({nextf:false});
            this.setState({data:this.state.data-1});
            let a=this.state.data-1;
            if(a==0){
                this.setState({e_class1 :this.state.elective1[0]});
             this.setState({e_class2 :this.state.elective1[1]});
             this.setState({e_class3 : this.state.elective1[2]});
             this.setState({e_class4 : this.state.elective1[3]});
             this.setState({e_class5 : this.state.elective1[4]});
            }
            if(a==1){
                this.setState({e_class1 :this.state.elective2[0]});
             this.setState({e_class2 :this.state.elective2[1]});
             this.setState({e_class3 : this.state.elective2[2]});
             this.setState({e_class4 : this.state.elective2[3]});
             this.setState({e_class5 : this.state.elective2[4]});
            }else if(a==2){
                this.setState({e_class1 :this.state.elective3[0]});
             this.setState({e_class2 :this.state.elective3[1]});
             this.setState({e_class3 : this.state.elective3[2]});
             this.setState({e_class4 : this.state.elective3[3]});
             this.setState({e_class5 : this.state.elective3[4]});
            }else if(a==3){
                this.setState({e_class1 :this.state.elective4[0]});
             this.setState({e_class2 :this.state.elective4[1]});
             this.setState({e_class3 : this.state.elective4[2]});
             this.setState({e_class4 : this.state.elective4[3]});
             this.setState({e_class5 : this.state.elective4[4]});
            }else if(a==4){
                this.setState({e_class1 :this.state.elective5[0]});
             this.setState({e_class2 :this.state.elective5[1]});
             this.setState({e_class3 : this.state.elective5[2]});
             this.setState({e_class4 : this.state.elective5[3]});
             this.setState({e_class5 : this.state.elective5[4]});
            }
            
        }else{
            this.setState({pref:true});
        }
    }
    render() {
        return (
        <TimetableDiv>
            <Logo />
<<<<<<< HEAD
            <TimeInfoDiv>
            <li>{this.state.e_class1.class_name}
            <br/>
            {this.state.e_class1.class_time}</li>
            <li>{this.state.e_class2.class_name}
            <br/>
            {this.state.e_class2.class_time}</li>
            <li>{this.state.e_class3.class_name}
            <br/>
            {this.state.e_class3.class_time}</li>
            <li>{this.state.e_class4.class_name}
            <br/>
            {this.state.e_class4.class_time}</li>
            <li>{this.state.e_class5.class_name}
            <br/>
            {this.state.e_class5.class_time}</li>
            </TimeInfoDiv>
=======
>>>>>>> 3baae5c9f79dada3048fa62f68e52864879c0960
            <TimeWrapDiv>
            <br/>
            <br/>
              <table className="TimeTable">
              <tr>
              <th className="timetabled_short">교시/요일</th>
              <th className="timetabled_short">월</th>
              <th className="timetabled_short">화</th>
              <th className="timetabled_short">수</th>
              <th className="timetabled_short">목</th>
              <th className="timetabled_short">금</th> 
              </tr>
              <tr>
              <td className="timetabled_short">1</td>
              <td className="timetabled_short">{this.state.mon_1[this.state.data]}</td>
              <td className="timetabled_short">{this.state.tue_1[this.state.data]}</td>
              <td className="timetabled_short">{this.state.wed_1[this.state.data]}</td>
              <td className="timetabled_short">{this.state.thr_1[this.state.data]}</td>
              <td className="timetabled_short">{this.state.fri_1[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">2</td>
              <td className="timetabled_short">{this.state.mon_2[this.state.data]}</td>
              <td className="timetabled_short">{this.state.tue_2[this.state.data]}</td>
              <td className="timetabled_short">{this.state.wed_2[this.state.data]}</td>
              <td className="timetabled_short">{this.state.thr_2[this.state.data]}</td>
              <td className="timetabled_short">{this.state.fri_2[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">3</td>
              <td className="timetabled_short">{this.state.mon_3[this.state.data]}</td>
              <td className="timetabled_short">{this.state.tue_3[this.state.data]}</td>
              <td className="timetabled_short">{this.state.wed_3[this.state.data]}</td>
              <td className="timetabled_short">{this.state.thr_3[this.state.data]}</td>
              <td className="timetabled_short">{this.state.fri_3[this.state.data]}</td>
              </tr>  
              <tr>
              <td className="timetabled_short">4</td>
              <td className="timetabled_short">{this.state.mon_4[this.state.data]}</td>
              <td className="timetabled_short">{this.state.tue_4[this.state.data]}</td>
              <td className="timetabled_short">{this.state.wed_4[this.state.data]}</td>
              <td className="timetabled_short">{this.state.thr_4[this.state.data]}</td>
              <td className="timetabled_short">{this.state.fri_4[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">5</td>
              <td className="timetabled_short">{this.state.mon_5[this.state.data]}</td>
              <td className="timetabled_short">{this.state.tue_5[this.state.data]}</td>
              <td className="timetabled_short">{this.state.wed_5[this.state.data]}</td>
              <td className="timetabled_short">{this.state.thr_5[this.state.data]}</td>
              <td className="timetabled_short">{this.state.fri_5[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">6</td>
              <td className="timetabled_short">{this.state.mon_6[this.state.data]}</td>
              <td className="timetabled_short">{this.state.tue_6[this.state.data]}</td>
              <td className="timetabled_short">{this.state.wed_6[this.state.data]}</td>
              <td className="timetabled_short">{this.state.thr_6[this.state.data]}</td>
              <td className="timetabled_short">{this.state.fri_6[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">7</td>
              <td className="timetabled_short">{this.state.mon_7[this.state.data]}</td>
              <td className="timetabled_short">{this.state.tue_7[this.state.data]}</td>
              <td className="timetabled_short">{this.state.wed_7[this.state.data]}</td>
              <td className="timetabled_short">{this.state.thr_7[this.state.data]}</td>
              <td className="timetabled_short">{this.state.fri_7[this.state.data]}</td>
              </tr>                                                                                
              </table>
             
              <div className="arrowp">
          <button onClick={this.pre} className="preArrow" disabled={this.state.pref} >Pre</button>
          </div>
              <div  className="arrown">
            <button onClick={this.next} className="nextArrow" disabled={this.state.nextf}>Next</button>
          </div>
            </TimeWrapDiv>
            <TimeInfoDiv>
                교양 과목 추천
            {this.state.elective.map(p => (
                  <li>{p.class_name} <br/>
                  {p.class_time}</li> ))}
                <TimeInfoClassDiv>
                    aa
                </TimeInfoClassDiv>
                <TimeInfoClassDiv>
                    bb
                </TimeInfoClassDiv>
                <TimeInfoClassDiv>
                    cc
                </TimeInfoClassDiv>
                <TimeInfoClassDiv>
                    dd
                </TimeInfoClassDiv>
                <TimeInfoClassDiv>
                    ee
                </TimeInfoClassDiv>
            </TimeInfoDiv>
        </TimetableDiv>
        
    );
};}

export default Timetable;