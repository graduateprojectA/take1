/*
MyPage
*/
import styled from "styled-components";
import React, { Component } from 'react';
import Logo from "./Logo";
import backgroundImage2 from "../components/image/backgroundImage2.png";
import UserService from '../service/UserService';
const MypageDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;
const MyWrapDiv = styled.div`
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
const TimeInfoDiv = styled.div`
    position: absolute;
    top: 30%;
    right: 5%;
    border: solid 1px;
    height: 45%;
    width: 13%;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
    border-radius: 10px;
`;
class MyPage extends Component {
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
          UserService.my2(res.data);
        });
        UserService.my().then((res)=>{
            this.setState({ user_info: res.data });
            if(res.data.major==1){
                this.setState({ major_name : "국어국문학과" });
            }
            else if(res.data.major==2){
                this.setState({ major_name : "중어중문학과" });
            }
            else if(res.data.major==3){
                this.setState({ major_name : "영어영문학과" });
            }
            else if(res.data.major==4){
                this.setState({ major_name : "불어불문학과" });
            }
            else if(res.data.major==5){
                this.setState({ major_name : "독어독문학과" });
            }
            else if(res.data.major==6){
                this.setState({ major_name : "사학과" });
            }
            else if(res.data.major==7){
                this.setState({ major_name : "철학과" });
            }
            else if(res.data.major==8){
                this.setState({ major_name : "기독교학과" });
            }
            else if(res.data.major==9){
                this.setState({ major_name : "정치외교학과" });
            }
            else if(res.data.major==10){
                this.setState({ major_name : "행정학과" });
            }
            else if(res.data.major==11){
                this.setState({ major_name : "경제학과" });
            }
            else if(res.data.major==12){
                this.setState({ major_name : "문헌정보학과" });
            }
            else if(res.data.major==13){
                this.setState({ major_name : "사회학과" });
            }
            else if(res.data.major==14){
                this.setState({ major_name : "사회복지학과" });
            }
            else if(res.data.major==15){
                this.setState({ major_name : "심리학과" });
            }
            else if(res.data.major==16){
                this.setState({ major_name : "소비자학과" });
            }
            else if(res.data.major==17){
                this.setState({ major_name : "커뮤니케이션ㆍ미디어학과" });
            }
            else if(res.data.major==18){
                this.setState({ major_name : "수학과" });
            }
            else if(res.data.major==19){
                this.setState({ major_name : "통계학과" });
            }
            else if(res.data.major==20){
                this.setState({ major_name : "물리학과" });
            }
            else if(res.data.major==21){
                this.setState({ major_name : "화학·나노과학과" });
            }
            else if(res.data.major==22){
                this.setState({ major_name : "생명과학과" });
            }
            else if(res.data.major==23){
                this.setState({ major_name : "컴퓨터공학과" });
            }
            else if(res.data.major==24){
                this.setState({ major_name : "사이버보안과" });
            }
            else if(res.data.major==25){
                this.setState({ major_name : "화학·전자전기공학과" });
            }
            else if(res.data.major==26){
                this.setState({ major_name : "식품공학과" });
            }
            else if(res.data.major==27){
                this.setState({ major_name : "화학신소재공학과" });
            }
            else if(res.data.major==28){
                this.setState({ major_name : "건축학과" });
            }
            else if(res.data.major==29){
                this.setState({ major_name : "건축도시시스템공학과" });
            }
            else if(res.data.major==30){
                this.setState({ major_name : "환경공학과" });
            }
            else if(res.data.major==31){
                this.setState({ major_name : "기후·에너지시스템공학과" });
            }
            else if(res.data.major==32){
                this.setState({ major_name : "휴먼기계바이오공학과" });
            }
            else if(res.data.major==33){
                this.setState({ major_name : "건반악기과" });
            }
            else if(res.data.major==34){
                this.setState({ major_name : "성악과" });
            }
            else if(res.data.major==35){
                this.setState({ major_name : "한국음악과" });
            }
            else if(res.data.major==36){
                this.setState({ major_name : "관현학과" });
            }
            else if(res.data.major==37){
                this.setState({ major_name : "작곡과" });
            }
            else if(res.data.major==38){
                this.setState({ major_name : "무용과" });
            }
            else if(res.data.major==39){
                this.setState({ major_name : "동양화과" });
            }
            else if(res.data.major==40){
                this.setState({ major_name : "조소과" });
            }
            else if(res.data.major==41){
                this.setState({ major_name : "서양화과" });
            }
            else if(res.data.major==42){
                this.setState({ major_name : "도자예술과" });
            }
            else if(res.data.major==43){
                this.setState({ major_name : "디자인학부" });
            }
            else if(res.data.major==44){
                this.setState({ major_name : "섬유예술과" });
            }
            else if(res.data.major==45){
                this.setState({ major_name : "패션디자인과" });
            }
            else if(res.data.major==46){
                this.setState({ major_name : "교육학과" });
            }
            else if(res.data.major==47){
                this.setState({ major_name : "유아교육과" });
            }
            else if(res.data.major==48){
                this.setState({ major_name : "초등교육과" });
            }
            else if(res.data.major==49){
                this.setState({ major_name : "교육공학과" });
            }
            else if(res.data.major==50){
                this.setState({ major_name : "특수교육과" });
            }
            else if(res.data.major==51){
                this.setState({ major_name : "국어교육과" });
            }
            else if(res.data.major==52){
                this.setState({ major_name : "과학교육과" });
            }
            else if(res.data.major==53){
                this.setState({ major_name : "수학교육과" });
            }
            else if(res.data.major==54){
                this.setState({ major_name : "경영학부" });
            }
            else if(res.data.major==55){
                this.setState({ major_name : "융합콘텐츠학과" });
            }
            else if(res.data.major==56){
                this.setState({ major_name : "의류산업학과" });
            }
            else if(res.data.major==57){
                this.setState({ major_name : "국제사무학과" });
            }
            else if(res.data.major==58){
                this.setState({ major_name : "식품영양학과" });
            }
            else if(res.data.major==59){
                this.setState({ major_name : "융합보건학과" });
            }
            else if(res.data.major==60){
                this.setState({ major_name : "체육과학부" });
            }
            else if(res.data.major==61){
                this.setState({ major_name : "의학과" });
            }
            else if(res.data.major==62){
                this.setState({ major_name : "간호학과" });
            }
            else if(res.data.major==63){
                this.setState({ major_name : "글로벌건강간호학과" });
            }
            else if(res.data.major==64){
                this.setState({ major_name : "스크랜튼학부" });
            }
            else if(res.data.major==65){
                this.setState({ major_name : "뇌인지과학과" });
            }
            else if(res.data.major==66){
                this.setState({ major_name : "국제학과" });
            }
            else if(res.data.major==67){
                this.setState({ major_name : "글로벌한국학과" });
            }
            console.log("get result => " + JSON.stringify(res.data));
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
        <MypageDiv>
            <Logo />
            <MyInfoDiv>
            학번 : {this.state.user_info.id}
            <br/>
            전공 : {this.state.major_name} {this.state.user_info.grade}학년 
            </MyInfoDiv>
            
            <MyWrapDiv>
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
              <td className="timetabled">{this.state.mon_1[this.state.data]}</td>
              <td className="timetabled">{this.state.tue_1[this.state.data]}</td>
              <td className="timetabled">{this.state.wed_1[this.state.data]}</td>
              <td className="timetabled">{this.state.thr_1[this.state.data]}</td>
              <td className="timetabled">{this.state.fri_1[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled">2</td>
              <td className="timetabled">{this.state.mon_2[this.state.data]}</td>
              <td className="timetabled">{this.state.tue_2[this.state.data]}</td>
              <td className="timetabled">{this.state.wed_2[this.state.data]}</td>
              <td className="timetabled">{this.state.thr_2[this.state.data]}</td>
              <td className="timetabled">{this.state.fri_2[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled">3</td>
              <td className="timetabled">{this.state.mon_3[this.state.data]}</td>
              <td className="timetabled">{this.state.tue_3[this.state.data]}</td>
              <td className="timetabled">{this.state.wed_3[this.state.data]}</td>
              <td className="timetabled">{this.state.thr_3[this.state.data]}</td>
              <td className="timetabled">{this.state.fri_3[this.state.data]}</td>
              </tr>  
              <tr>
              <td className="timetabled">4</td>
              <td className="timetabled">{this.state.mon_4[this.state.data]}</td>
              <td className="timetabled">{this.state.tue_4[this.state.data]}</td>
              <td className="timetabled">{this.state.wed_4[this.state.data]}</td>
              <td className="timetabled">{this.state.thr_4[this.state.data]}</td>
              <td className="timetabled">{this.state.fri_4[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled">5</td>
              <td className="timetabled">{this.state.mon_5[this.state.data]}</td>
              <td className="timetabled">{this.state.tue_5[this.state.data]}</td>
              <td className="timetabled">{this.state.wed_5[this.state.data]}</td>
              <td className="timetabled">{this.state.thr_5[this.state.data]}</td>
              <td className="timetabled">{this.state.fri_5[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled">6</td>
              <td className="timetabled">{this.state.mon_6[this.state.data]}</td>
              <td className="timetabled">{this.state.tue_6[this.state.data]}</td>
              <td className="timetabled">{this.state.wed_6[this.state.data]}</td>
              <td className="timetabled">{this.state.thr_6[this.state.data]}</td>
              <td className="timetabled">{this.state.fri_6[this.state.data]}</td>
              </tr>
              <tr>
              <td className="timetabled">7</td>
              <td className="timetabled">{this.state.mon_7[this.state.data]}</td>
              <td className="timetabled">{this.state.tue_7[this.state.data]}</td>
              <td className="timetabled">{this.state.wed_7[this.state.data]}</td>
              <td className="timetabled">{this.state.thr_7[this.state.data]}</td>
              <td className="timetabled">{this.state.fri_7[this.state.data]}</td>
              </tr>                                                                                
              </table>
             
              <div className="arrowp">
          <button onClick={this.pre} className="preArrow" disabled={this.state.pref} >Pre</button>
          </div>
              <div  className="arrown">
            <button onClick={this.next} className="nextArrow" disabled={this.state.nextf}>Next</button>
          </div>
            </MyWrapDiv>
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
        </MypageDiv>
    );
};}

export default MyPage;