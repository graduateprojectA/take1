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
    height: 35%;
    width: 13%;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
`;
const TestInfoDiv = styled.div`
position: absolute;
top: 60%;
right: 28%;
border: solid 1px;
height: 20%;
width: 13%;
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
            test1:[],test2:[],test3:[],test4:[],test5:[],testd:0,
            e_class1:[],e_class2:[],e_class3:[],e_class4:[],e_class5:[],
            elective1:[],elective2:[],elective3:[],elective4:[],elective5:[],
            c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:"",c8:"",c9:"",
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
        UserService.timetableDetail().then((res)=>{
            this.setState({test1:res.data[0]});
            this.setState({test2:res.data[1]});
            this.setState({test3:res.data[2]});
            this.setState({test4:res.data[3]});
            this.setState({test5:res.data[4]});
            this.setState({testd:res.data[0]});
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
             console.log(res.data.filter(p=>p[0].timetable_no==num1)[0]);
             console.log(res.data.filter(p=>p[0].timetable_no==num2)[0]);
             console.log(res.data.filter(p=>p[0].timetable_no==num3)[0]);
             console.log(res.data.filter(p=>p[0].timetable_no==num4)[0]);
             console.log(res.data.filter(p=>p[0].timetable_no==num5)[0]);
        });
    }
    setDate(n){
        if(n==1){
            let flag=0;
            if(this.state.test1.class_1_mid>0){
                let month1 = parseInt(this.state.test1.class_1_mid/100%100);
                let day1 = parseInt(this.state.test1.class_1_mid%100%100);
                let month2 = parseInt(this.state.test1.class_1_final/100%100);
                let day2 = parseInt(this.state.test1.class_1_final%100%100);
                this.setState({c1:this.state.test1.class_1_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test1.class_2_mid>0){
                let month1 = parseInt(this.state.test1.class_2_mid/100%100);
                let day1 = parseInt(this.state.test1.class_2_mid%100%100);
                let month2 = parseInt(this.state.test1.class_2_final/100%100);
                let day2 = parseInt(this.state.test1.class_2_final%100%100);
                this.setState({c2:this.state.test1.class_2_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test1.class_3_mid>0){
                let month1 = parseInt(this.state.test1.class_3_mid/100%100);
                let day1 = parseInt(this.state.test1.class_3_mid%100%100);
                let month2 = parseInt(this.state.test1.class_3_final/100%100);
                let day2 = parseInt(this.state.test1.class_3_final%100%100);
                this.setState({c3:this.state.test1.class_3_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test1.class_4_mid>0){
                let month1 = parseInt(this.state.test1.class_4_mid/100%100);
                let day1 = parseInt(this.state.test1.class_4_mid%100%100);
                let month2 = parseInt(this.state.test1.class_4_final/100%100);
                let day2 = parseInt(this.state.test1.class_4_final%100%100);
                this.setState({c4:this.state.test1.class_4_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test1.class_5_mid>0){
                let month1 = parseInt(this.state.test1.class_5_mid/100%100);
                let day1 = parseInt(this.state.test1.class_5_mid%100%100);
                let month2 = parseInt(this.state.test1.class_5_final/100%100);
                let day2 = parseInt(this.state.test1.class_5_final%100%100);
                this.setState({c5:this.state.test1.class_5_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test1.class_6_mid>0){
                let month1 = parseInt(this.state.test1.class_6_mid/100%100);
                let day1 = parseInt(this.state.test1.class_6_mid%100%100);
                let month2 = parseInt(this.state.test1.class_6_final/100%100);
                let day2 = parseInt(this.state.test1.class_6_final%100%100);
                this.setState({c6:this.state.test1.class_6_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test1.class_7_mid>0){
                let month1 = parseInt(this.state.test1.class_7_mid/100%100);
                let day1 = parseInt(this.state.test1.class_7_mid%100%100);
                let month2 = parseInt(this.state.test1.class_7_final/100%100);
                let day2 = parseInt(this.state.test1.class_7_final%100%100);
                this.setState({c7:this.state.test1.class_7_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test1.class_8_mid>0){
                let month1 = parseInt(this.state.test1.class_8_mid/100%100);
                let day1 = parseInt(this.state.test1.class_8_mid%100%100);
                let month2 = parseInt(this.state.test1.class_8_final/100%100);
                let day2 = parseInt(this.state.test1.class_8_final%100%100);
                this.setState({c8:this.state.test1.class_8_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test1.class_9_mid>0){
                let month1 = parseInt(this.state.test1.class_9_mid/100%100);
                let day1 = parseInt(this.state.test1.class_9_mid%100%100);
                let month2 = parseInt(this.state.test1.class_9_final/100%100);
                let day2 = parseInt(this.state.test1.class_9_final%100%100);
                this.setState({c9:this.state.test1.class_9_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(flag==0){
                this.setState({c1:null});
                this.setState({c2:null});
                this.setState({c3:null});
                this.setState({c4:null});
                this.setState({c5:null});
                this.setState({c6:null});
                this.setState({c7:null});
                this.setState({c8:null});
                this.setState({c9:null});
            }
        }else if(n==2){
            let flag=0;
            if(this.state.test2.class_1_mid>0){
                let month1 = parseInt(this.state.test2.class_1_mid/100%100);
                let day1 = parseInt(this.state.test2.class_1_mid%100%100);
                let month2 = parseInt(this.state.test2.class_1_final/100%100);
                let day2 = parseInt(this.state.test2.class_1_final%100%100);
                this.setState({c1:this.state.test2.class_1_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test2.class_2_mid>0){
                let month1 = parseInt(this.state.test2.class_2_mid/100%100);
                let day1 = parseInt(this.state.test2.class_2_mid%100%100);
                let month2 = parseInt(this.state.test2.class_2_final/100%100);
                let day2 = parseInt(this.state.test2.class_2_final%100%100);
                this.setState({c2:this.state.test2.class_2_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test2.class_3_mid>0){
                let month1 = parseInt(this.state.test2.class_3_mid/100%100);
                let day1 = parseInt(this.state.test2.class_3_mid%100%100);
                let month2 = parseInt(this.state.test2.class_3_final/100%100);
                let day2 = parseInt(this.state.test2.class_3_final%100%100);
                this.setState({c3:this.state.test2.class_3_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test2.class_4_mid>0){
                let month1 = parseInt(this.state.test2.class_4_mid/100%100);
                let day1 = parseInt(this.state.test2.class_4_mid%100%100);
                let month2 = parseInt(this.state.test2.class_4_final/100%100);
                let day2 = parseInt(this.state.test2.class_4_final%100%100);
                this.setState({c4:this.state.test2.class_4_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test2.class_5_mid>0){
                let month1 = parseInt(this.state.test2.class_5_mid/100%100);
                let day1 = parseInt(this.state.test2.class_5_mid%100%100);
                let month2 = parseInt(this.state.test2.class_5_final/100%100);
                let day2 = parseInt(this.state.test2.class_5_final%100%100);
                this.setState({c5:this.state.test2.class_5_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test2.class_6_mid>0){
                let month1 = parseInt(this.state.test2.class_6_mid/100%100);
                let day1 = parseInt(this.state.test2.class_6_mid%100%100);
                let month2 = parseInt(this.state.test2.class_6_final/100%100);
                let day2 = parseInt(this.state.test2.class_6_final%100%100);
                this.setState({c6:this.state.test2.class_6_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test2.class_7_mid>0){
                let month1 = parseInt(this.state.test2.class_7_mid/100%100);
                let day1 = parseInt(this.state.test2.class_7_mid%100%100);
                let month2 = parseInt(this.state.test2.class_7_final/100%100);
                let day2 = parseInt(this.state.test2.class_7_final%100%100);
                this.setState({c7:this.state.test2.class_7_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test2.class_8_mid>0){
                let month1 = parseInt(this.state.test2.class_8_mid/100%100);
                let day1 = parseInt(this.state.test2.class_8_mid%100%100);
                let month2 = parseInt(this.state.test2.class_8_final/100%100);
                let day2 = parseInt(this.state.test2.class_8_final%100%100);
                this.setState({c8:this.state.test2.class_8_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test2.class_9_mid>0){
                let month1 = parseInt(this.state.test2.class_9_mid/100%100);
                let day1 = parseInt(this.state.test2.class_9_mid%100%100);
                let month2 = parseInt(this.state.test2.class_9_final/100%100);
                let day2 = parseInt(this.state.test2.class_9_final%100%100);
                this.setState({c9:this.state.test2.class_9_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(flag==0){
                this.setState({c1:null});
                this.setState({c2:null});
                this.setState({c3:null});
                this.setState({c4:null});
                this.setState({c5:null});
                this.setState({c6:null});
                this.setState({c7:null});
                this.setState({c8:null});
                this.setState({c9:null});
            }
        }else if(n==3){
            let flag=0;
            if(this.state.test3.class_1_mid>0){
                let month1 = parseInt(this.state.test3.class_1_mid/100%100);
                let day1 = parseInt(this.state.test3.class_1_mid%100%100);
                let month2 = parseInt(this.state.test3.class_1_final/100%100);
                let day2 = parseInt(this.state.test3.class_1_final%100%100);
                this.setState({c1:this.state.test3.class_1_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test3.class_2_mid>0){
                let month1 = parseInt(this.state.test3.class_2_mid/100%100);
                let day1 = parseInt(this.state.test3.class_2_mid%100%100);
                let month2 = parseInt(this.state.test3.class_2_final/100%100);
                let day2 = parseInt(this.state.test3.class_2_final%100%100);
                this.setState({c2:this.state.test3.class_2_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test3.class_3_mid>0){
                let month1 = parseInt(this.state.test3.class_3_mid/100%100);
                let day1 = parseInt(this.state.test3.class_3_mid%100%100);
                let month2 = parseInt(this.state.test3.class_3_final/100%100);
                let day2 = parseInt(this.state.test3.class_3_final%100%100);
                this.setState({c3:this.state.test3.class_3_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test3.class_4_mid>0){
                let month1 = parseInt(this.state.test3.class_4_mid/100%100);
                let day1 = parseInt(this.state.test3.class_4_mid%100%100);
                let month2 = parseInt(this.state.test3.class_4_final/100%100);
                let day2 = parseInt(this.state.test3.class_4_final%100%100);
                this.setState({c4:this.state.test3.class_4_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test3.class_5_mid>0){
                let month1 = parseInt(this.state.test3.class_5_mid/100%100);
                let day1 = parseInt(this.state.test3.class_5_mid%100%100);
                let month2 = parseInt(this.state.test3.class_5_final/100%100);
                let day2 = parseInt(this.state.test3.class_5_final%100%100);
                this.setState({c5:this.state.test3.class_5_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test3.class_6_mid>0){
                let month1 = parseInt(this.state.test3.class_6_mid/100%100);
                let day1 = parseInt(this.state.test3.class_6_mid%100%100);
                let month2 = parseInt(this.state.test3.class_6_final/100%100);
                let day2 = parseInt(this.state.test3.class_6_final%100%100);
                this.setState({c6:this.state.test3.class_6_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test3.class_7_mid>0){
                let month1 = parseInt(this.state.test3.class_7_mid/100%100);
                let day1 = parseInt(this.state.test3.class_7_mid%100%100);
                let month2 = parseInt(this.state.test3.class_7_final/100%100);
                let day2 = parseInt(this.state.test3.class_7_final%100%100);
                this.setState({c7:this.state.test3.class_7_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test3.class_8_mid>0){
                let month1 = parseInt(this.state.test3.class_8_mid/100%100);
                let day1 = parseInt(this.state.test3.class_8_mid%100%100);
                let month2 = parseInt(this.state.test3.class_8_final/100%100);
                let day2 = parseInt(this.state.test3.class_8_final%100%100);
                this.setState({c8:this.state.test3.class_8_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test3.class_9_mid>0){
                let month1 = parseInt(this.state.test3.class_9_mid/100%100);
                let day1 = parseInt(this.state.test3.class_9_mid%100%100);
                let month2 = parseInt(this.state.test3.class_9_final/100%100);
                let day2 = parseInt(this.state.test3.class_9_final%100%100);
                this.setState({c9:this.state.test3.class_9_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(flag==0){
                this.setState({c1:null});
                this.setState({c2:null});
                this.setState({c3:null});
                this.setState({c4:null});
                this.setState({c5:null});
                this.setState({c6:null});
                this.setState({c7:null});
                this.setState({c8:null});
                this.setState({c9:null});
            }
        }else if(n==4){
            let flag=0;
            if(this.state.test4.class_1_mid>0){
                let month1 = parseInt(this.state.test4.class_1_mid/100%100);
                let day1 = parseInt(this.state.test4.class_1_mid%100%100);
                let month2 = parseInt(this.state.test4.class_1_final/100%100);
                let day2 = parseInt(this.state.test4.class_1_final%100%100);
                this.setState({c1:this.state.test4.class_1_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test4.class_2_mid>0){
                let month1 = parseInt(this.state.test4.class_2_mid/100%100);
                let day1 = parseInt(this.state.test4.class_2_mid%100%100);
                let month2 = parseInt(this.state.test4.class_2_final/100%100);
                let day2 = parseInt(this.state.test4.class_2_final%100%100);
                this.setState({c2:this.state.test4.class_2_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test4.class_3_mid>0){
                let month1 = parseInt(this.state.test4.class_3_mid/100%100);
                let day1 = parseInt(this.state.test4.class_3_mid%100%100);
                let month2 = parseInt(this.state.test4.class_3_final/100%100);
                let day2 = parseInt(this.state.test4.class_3_final%100%100);
                this.setState({c3:this.state.test4.class_3_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test4.class_4_mid>0){
                let month1 = parseInt(this.state.test4.class_4_mid/100%100);
                let day1 = parseInt(this.state.test4.class_4_mid%100%100);
                let month2 = parseInt(this.state.test4.class_4_final/100%100);
                let day2 = parseInt(this.state.test4.class_4_final%100%100);
                this.setState({c4:this.state.test4.class_4_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test4.class_5_mid>0){
                let month1 = parseInt(this.state.test4.class_5_mid/100%100);
                let day1 = parseInt(this.state.test4.class_5_mid%100%100);
                let month2 = parseInt(this.state.test4.class_5_final/100%100);
                let day2 = parseInt(this.state.test4.class_5_final%100%100);
                this.setState({c5:this.state.test4.class_5_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test4.class_6_mid>0){
                let month1 = parseInt(this.state.test4.class_6_mid/100%100);
                let day1 = parseInt(this.state.test4.class_6_mid%100%100);
                let month2 = parseInt(this.state.test4.class_6_final/100%100);
                let day2 = parseInt(this.state.test4.class_6_final%100%100);
                this.setState({c6:this.state.test4.class_6_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test4.class_7_mid>0){
                let month1 = parseInt(this.state.test4.class_7_mid/100%100);
                let day1 = parseInt(this.state.test4.class_7_mid%100%100);
                let month2 = parseInt(this.state.test4.class_7_final/100%100);
                let day2 = parseInt(this.state.test4.class_7_final%100%100);
                this.setState({c7:this.state.test4.class_7_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test4.class_8_mid>0){
                let month1 = parseInt(this.state.test4.class_8_mid/100%100);
                let day1 = parseInt(this.state.test4.class_8_mid%100%100);
                let month2 = parseInt(this.state.test4.class_8_final/100%100);
                let day2 = parseInt(this.state.test4.class_8_final%100%100);
                this.setState({c8:this.state.test4.class_8_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test4.class_9_mid>0){
                let month1 = parseInt(this.state.test4.class_9_mid/100%100);
                let day1 = parseInt(this.state.test4.class_9_mid%100%100);
                let month2 = parseInt(this.state.test4.class_9_final/100%100);
                let day2 = parseInt(this.state.test4.class_9_final%100%100);
                this.setState({c9:this.state.test4.class_9_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(flag==0){
                this.setState({c1:null});
                this.setState({c2:null});
                this.setState({c3:null});
                this.setState({c4:null});
                this.setState({c5:null});
                this.setState({c6:null});
                this.setState({c7:null});
                this.setState({c8:null});
                this.setState({c9:null});
            }
        }else if(n==5){
            let flag=0;
            if(this.state.test5.class_1_mid>0){
                let month1 = parseInt(this.state.test5.class_1_mid/100%100);
                let day1 = parseInt(this.state.test5.class_1_mid%100%100);
                let month2 = parseInt(this.state.test5.class_1_final/100%100);
                let day2 = parseInt(this.state.test5.class_1_final%100%100);
                this.setState({c1:this.state.test5.class_1_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test5.class_2_mid>0){
                let month1 = parseInt(this.state.test5.class_2_mid/100%100);
                let day1 = parseInt(this.state.test5.class_2_mid%100%100);
                let month2 = parseInt(this.state.test5.class_2_final/100%100);
                let day2 = parseInt(this.state.test5.class_2_final%100%100);
                this.setState({c2:this.state.test5.class_2_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test5.class_3_mid>0){
                let month1 = parseInt(this.state.test5.class_3_mid/100%100);
                let day1 = parseInt(this.state.test5.class_3_mid%100%100);
                let month2 = parseInt(this.state.test5.class_3_final/100%100);
                let day2 = parseInt(this.state.test5.class_3_final%100%100);
                this.setState({c3:this.state.test5.class_3_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
                flag=1;
            }if(this.state.test5.class_4_mid>0){
                let month1 = parseInt(this.state.test5.class_4_mid/100%100);
                let day1 = parseInt(this.state.test5.class_4_mid%100%100);
                let month2 = parseInt(this.state.test5.class_4_final/100%100);
                let day2 = parseInt(this.state.test5.class_4_final%100%100);
                this.setState({c4:this.state.test5.class_4_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test5.class_5_mid>0){
                let month1 = parseInt(this.state.test5.class_5_mid/100%100);
                let day1 = parseInt(this.state.test5.class_5_mid%100%100);
                let month2 = parseInt(this.state.test5.class_5_final/100%100);
                let day2 = parseInt(this.state.test5.class_5_final%100%100);
                this.setState({c5:this.state.test5.class_5_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test5.class_6_mid>0){
                let month1 = parseInt(this.state.test5.class_6_mid/100%100);
                let day1 = parseInt(this.state.test5.class_6_mid%100%100);
                let month2 = parseInt(this.state.test5.class_6_final/100%100);
                let day2 = parseInt(this.state.test5.class_6_final%100%100);
                this.setState({c6:this.state.test5.class_6_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test5.class_7_mid>0){
                let month1 = parseInt(this.state.test5.class_7_mid/100%100);
                let day1 = parseInt(this.state.test5.class_7_mid%100%100);
                let month2 = parseInt(this.state.test5.class_7_final/100%100);
                let day2 = parseInt(this.state.test5.class_7_final%100%100);
                this.setState({c7:this.state.test5.class_7_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test5.class_8_mid>0){
                let month1 = parseInt(this.state.test5.class_8_mid/100%100);
                let day1 = parseInt(this.state.test5.class_8_mid%100%100);
                let month2 = parseInt(this.state.test5.class_8_final/100%100);
                let day2 = parseInt(this.state.test5.class_8_final%100%100);
                this.setState({c8:this.state.test5.class_8_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(this.state.test5.class_9_mid>0){
                let month1 = parseInt(this.state.test5.class_9_mid/100%100);
                let day1 = parseInt(this.state.test5.class_9_mid%100%100);
                let month2 = parseInt(this.state.test5.class_9_final/100%100);
                let day2 = parseInt(this.state.test5.class_9_final%100%100);
                this.setState({c9:this.state.test5.class_9_name+"중간고사 2021년 "+month1+"월 "+day1+"일"+"기말고사 2021년 "+month2+"월 "+day2+"일"});
            flag=1;
            }if(flag==0){
                this.setState({c1:null});
                this.setState({c2:null});
                this.setState({c3:null});
                this.setState({c4:null});
                this.setState({c5:null});
                this.setState({c6:null});
                this.setState({c7:null});
                this.setState({c8:null});
                this.setState({c9:null});
            }
        }
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
             this.setDate(1);
            }
            if(a==1){
                this.setState({e_class1 :this.state.elective2[0]});
             this.setState({e_class2 :this.state.elective2[1]});
             this.setState({e_class3 : this.state.elective2[2]});
             this.setState({e_class4 : this.state.elective2[3]});
             this.setState({e_class5 : this.state.elective2[4]});
             this.setDate(2);
            }else if(a==2){
                this.setState({e_class1 :this.state.elective3[0]});
             this.setState({e_class2 :this.state.elective3[1]});
             this.setState({e_class3 : this.state.elective3[2]});
             this.setState({e_class4 : this.state.elective3[3]});
             this.setState({e_class5 : this.state.elective3[4]});
             this.setDate(3);
            }else if(a==3){
                this.setState({e_class1 :this.state.elective4[0]});
             this.setState({e_class2 :this.state.elective4[1]});
             this.setState({e_class3 : this.state.elective4[2]});
             this.setState({e_class4 : this.state.elective4[3]});
             this.setState({e_class5 : this.state.elective4[4]});
             this.setDate(4);
            }else if(a==4){
                this.setState({e_class1 :this.state.elective5[0]});
             this.setState({e_class2 :this.state.elective5[1]});
             this.setState({e_class3 : this.state.elective5[2]});
             this.setState({e_class4 : this.state.elective5[3]});
             this.setState({e_class5 : this.state.elective5[4]});
             this.setDate(5);
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
             this.setDate(1);
            }
            if(a==1){
                this.setState({e_class1 :this.state.elective2[0]});
             this.setState({e_class2 :this.state.elective2[1]});
             this.setState({e_class3 : this.state.elective2[2]});
             this.setState({e_class4 : this.state.elective2[3]});
             this.setState({e_class5 : this.state.elective2[4]});
             this.setDate(2);
            }else if(a==2){
                this.setState({e_class1 :this.state.elective3[0]});
             this.setState({e_class2 :this.state.elective3[1]});
             this.setState({e_class3 : this.state.elective3[2]});
             this.setState({e_class4 : this.state.elective3[3]});
             this.setState({e_class5 : this.state.elective3[4]});
             this.setDate(3);
            }else if(a==3){
                this.setState({e_class1 :this.state.elective4[0]});
             this.setState({e_class2 :this.state.elective4[1]});
             this.setState({e_class3 : this.state.elective4[2]});
             this.setState({e_class4 : this.state.elective4[3]});
             this.setState({e_class5 : this.state.elective4[4]});
             this.setDate(4);
            }else if(a==4){
                this.setState({e_class1 :this.state.elective5[0]});
             this.setState({e_class2 :this.state.elective5[1]});
             this.setState({e_class3 : this.state.elective5[2]});
             this.setState({e_class4 : this.state.elective5[3]});
             this.setState({e_class5 : this.state.elective5[4]});
             this.setDate(5);
            }
            
        }else{
            this.setState({pref:true});
        }
    }
    render() {
        var color_dic = {}
        const color = ['#8B0000', '#555500', '#A0522D', '#FF7F50', '#FA8072', '#AAAAAA', '#AAFFDD', '#122541', '#1d4ad5', '#1a2d5e', '#1q4d3s', '#1a2dq1', '#12a4q5', '#8B0000',
         '#A52A2A', '#A0522D', '#FF7F50', '#FA8072', '#AAAAAA', '#AAFFDD', '#122541', '#1d4ad5', '#1a2d5e', '#1q4d3s', '#1a2dq1', '#12a4q5',
         '#8B0000', '#A52A2A', '#A0522D', '#FF7F50', '#FA8072', '#AAAAAA', '#AAFFDD', '#122541', '#1d4ad5', '#1a2d5e', '#1q4d3s', '#1a2dq1', '#12a4q5']
        var now_color = 0;
        const day_time = [this.state.mon_1, this.state.mon_2,this.state.mon_3,this.state.mon_4,this.state.mon_5,this.state.mon_6,this.state.mon_7, 
            this.state.tue_1, this.state.tue_2,this.state.tue_3,this.state.tue_4,this.state.tue_5,this.state.tue_6,this.state.tue_7,
            this.state.wed_1, this.state.wed_2,this.state.wed_3,this.state.wed_4,this.state.wed_5,this.state.wed_6,this.state.wed_7,
            this.state.thr_1, this.state.thr_2,this.state.thr_3,this.state.thr_4,this.state.thr_5,this.state.thr_6,this.state.thr_7,
            this.state.fri_1, this.state.fri_2,this.state.fri_3,this.state.fri_4,this.state.fri_5,this.state.fri_6,this.state.fri_7]
        
        for (var i = 0; i <35; i++){
            var now_var = day_time[i]
            if(!(now_var[this.state.data] in color_dic)){
                if(now_var[this.state.data] != 'undefined' && now_var[this.state.data] != undefined){
                    color_dic[now_var[this.state.data]] = color[now_color];
                    now_color = now_color + 1;
                    console.log(typeof color_dic[now_var[this.state.data]])
                    console.log(now_var[this.state.data])
                    console.log(color_dic[now_var[this.state.data]]);
                }else{
                    color_dic[now_var[this.state.data]] = '#FFFFFF';
                }
            }
        }
        return (
        <TimetableDiv>
            <Logo />
            <TimeWrapDiv>
            <br/>
            <br/>
            <br/>
                추천 시간표 {this.state.data+1}
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
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.mon_1[this.state.data]]}}>{this.state.mon_1[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.tue_1[this.state.data]]}}>{this.state.tue_1[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.wed_1[this.state.data]]}}>{this.state.wed_1[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.thr_1[this.state.data]]}}>{this.state.thr_1[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.fri_1[this.state.data]]}}>{this.state.fri_1[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">2</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.mon_2[this.state.data]]}}>{this.state.mon_2[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.tue_2[this.state.data]]}}>{this.state.tue_2[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.wed_2[this.state.data]]}}>{this.state.wed_2[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.thr_2[this.state.data]]}}>{this.state.thr_2[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.fri_2[this.state.data]]}}>{this.state.fri_2[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">3</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.mon_3[this.state.data]]}}>{this.state.mon_3[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.tue_3[this.state.data]]}}>{this.state.tue_3[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.wed_3[this.state.data]]}}>{this.state.wed_3[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.thr_3[this.state.data]]}}>{this.state.thr_3[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.fri_3[this.state.data]]}}>{this.state.fri_3[this.state.data]}</td>
              </tr>  
              <tr>
              <td className="timetabled_short">4</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.mon_4[this.state.data]]}}>{this.state.mon_4[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.tue_4[this.state.data]]}}>{this.state.tue_4[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.wed_4[this.state.data]]}}>{this.state.wed_4[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.thr_4[this.state.data]]}}>{this.state.thr_4[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.fri_4[this.state.data]]}}>{this.state.fri_4[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">5</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.mon_5[this.state.data]]}}>{this.state.mon_5[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.tue_5[this.state.data]]}}>{this.state.tue_5[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.wed_5[this.state.data]]}}>{this.state.wed_5[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.thr_5[this.state.data]]}}>{this.state.thr_5[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.fri_5[this.state.data]]}}>{this.state.fri_5[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">6</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.mon_6[this.state.data]]}}>{this.state.mon_6[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.tue_6[this.state.data]]}}>{this.state.tue_6[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.wed_6[this.state.data]]}}>{this.state.wed_6[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.thr_6[this.state.data]]}}>{this.state.thr_6[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.fri_6[this.state.data]]}}>{this.state.fri_6[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled_short">7</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.mon_7[this.state.data]]}}>{this.state.mon_7[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.tue_7[this.state.data]]}}>{this.state.tue_7[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.wed_7[this.state.data]]}}>{this.state.wed_7[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.thr_7[this.state.data]]}}>{this.state.thr_7[this.state.data]}</td>
              <td className="timetabled_short" style={{backgroundColor: color_dic[this.state.fri_7[this.state.data]]}}>{this.state.fri_7[this.state.data]}</td>
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
            <TestInfoDiv>
                {this.state.c1}
                {this.state.c2}
                {this.state.c3}
                {this.state.c4}
                {this.state.c5}
                {this.state.c6}
                {this.state.c7}
                {this.state.c8}
                {this.state.c9}
            </TestInfoDiv>
        </TimetableDiv>
        
    );
};}

export default Timetable;