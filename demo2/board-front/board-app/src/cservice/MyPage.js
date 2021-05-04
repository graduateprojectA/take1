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
    left: 10%;
    border: solid 1px;
    height: 10%;
    width: 10%;
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
            user_info: {user_id:0, user_major:"학과",user_grade:0}
        };
    }
    componentDidMount() {
        UserService.login().then((res) => {
          this.setState({ user_no: res.data });
          console.log("get result => " + JSON.stringify(res.data));
        });
        UserService.my().then((res)=>{
            this.setState({ user_info: res.data });
        });
      }
    render() {
        return (
        <MypageDiv>
            <Logo />
            <MyInfoDiv>
            학번 : {this.state.user_info.user_id}
            <br/>
            전공 : {this.state.user_info.user_major} {this.state.user_info.user_grade}학년 
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