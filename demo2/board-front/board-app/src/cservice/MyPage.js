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
class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_no : 2,
            user_info: {user_id:0, user_major:"학과",user_grade:0},
            major_name : "",
            timetable:[]
        };
    }

    componentDidMount() {
        UserService.login().then((res) => {
          this.setState({ user_no: res.data });
          UserService.my2(res.data);
        });
        /*
        UserService.timetable().then((res)=>{
            this.setState({ timetable: res.data });
            console.log(res.data);
        });*/
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
              <tr classname="TimeDiv">
              <th className="DayDiv">교시/요일</th>
              <th className="DayDiv">월</th>
              <th className="DayDiv">화</th>
              <th className="DayDiv">수</th>
              <th className="DayDiv">목</th>
              <th className="DayDiv">금</th> 
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">1</td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">2</td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">3</td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              </tr>  
              <tr className="TimeDiv">
              <td className="DayDiv">4</td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">5</td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">6</td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">7</td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              <td className="DayDiv"></td>
              </tr>                                                                                
              </table>
            </MyWrapDiv>
        </MypageDiv>
    );
};}

export default MyPage;