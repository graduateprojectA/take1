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
const MyInfoDiv = styled.div`
    position: absolute;
    top: 30%;
    left: 5%;
    border: solid 1px;
    height: 10%;
    width: 13%;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
    border-radius: 10px;
`;
class Timetable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_no : 2,
            user_info: {user_id:0, user_major:"학과",user_grade:0},
            major_name : "",
            timetable:[],
            elective:[],
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
          UserService.timetable(res.data);
          UserService.elective(res.data);
        });
        /*
        UserService.timetable2().then((res)=>{
            this.setState({ timetable: res.data });
            console.log(res.data);
        });
        UserService.elective2().then((res)=>{
            this.setState({ elective: res.data });
            console.log(res.data);
        });*/
    }
    render() {
        return (
        <TimetableDiv>
            <Logo />
            <TimeWrapDiv>
            <br/>
            <br/>
              <table className="TimeTable">
              <tr>
              <th className="timetabled">교시/요일</th>
              <th className="timetabled">월</th>
              <th className="timetabled">화</th>
              <th className="timetabled">수</th>
              <th className="timetabled">목</th>
              <th className="timetabled">금</th> 
              </tr>
              <tr>
              <td className="timetabled">1</td>
              <td className="timetabled">{this.state.mon_1}</td>
              <td className="timetabled">{this.state.tue_1}</td>
              <td className="timetabled">{this.state.wed_1}</td>
              <td className="timetabled">{this.state.thr_1}</td>
              <td className="timetabled">{this.state.fri_1}</td>
              </tr>
              <tr>
              <td className="timetabled">2</td>
              <td className="timetabled">{this.state.mon_2}</td>
              <td className="timetabled">{this.state.tue_2}</td>
              <td className="timetabled">{this.state.wed_2}</td>
              <td className="timetabled">{this.state.thr_2}</td>
              <td className="timetabled">{this.state.fri_2}</td>
              </tr>
              <tr>
              <td className="timetabled">3</td>
              <td className="timetabled">{this.state.mon_3}</td>
              <td className="timetabled">{this.state.tue_3}</td>
              <td className="timetabled">{this.state.wed_3}</td>
              <td className="timetabled">{this.state.thr_3}</td>
              <td className="timetabled">{this.state.fri_3}</td>
              </tr>  
              <tr>
              <td className="timetabled">4</td>
              <td className="timetabled">{this.state.mon_4}</td>
              <td className="timetabled">{this.state.tue_4}</td>
              <td className="timetabled">{this.state.wed_4}</td>
              <td className="timetabled">{this.state.thr_4}</td>
              <td className="timetabled">{this.state.fri_4}</td>
              </tr>
              <tr>
              <td className="timetabled">5</td>
              <td className="timetabled">{this.state.mon_5}</td>
              <td className="timetabled">{this.state.tue_5}</td>
              <td className="timetabled">{this.state.wed_5}</td>
              <td className="timetabled">{this.state.thr_5}</td>
              <td className="timetabled">{this.state.fri_5}</td>
              </tr>
              <tr>
              <td className="timetabled">6</td>
              <td className="timetabled">{this.state.mon_6}</td>
              <td className="timetabled">{this.state.tue_6}</td>
              <td className="timetabled">{this.state.wed_6}</td>
              <td className="timetabled">{this.state.thr_6}</td>
              <td className="timetabled">{this.state.fri_6}</td>
              </tr>
              <tr>
              <td className="timetabled">7</td>
              <td className="timetabled">{this.state.mon_7}</td>
              <td className="timetabled">{this.state.tue_7}</td>
              <td className="timetabled">{this.state.wed_7}</td>
              <td className="timetabled">{this.state.thr_7}</td>
              <td className="timetabled">{this.state.fri_7}</td>
              </tr>                                                                                
              </table>
            </TimeWrapDiv>
        </TimetableDiv>
    );
};}

export default Timetable;