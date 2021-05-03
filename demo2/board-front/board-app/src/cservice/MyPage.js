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
    margin-left: -370px;
    border: solid 1px;
    height: 70%;
    width: 740px;
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
        UserService.my(this.state.user_no).then((res)=>{
            this.setState({ user_info: res.data });
        });
      }
    render() {
        return (
        <MypageDiv>
            <Logo />
            <MyWrapDiv>
            학번 : {this.state.user_info.user_id}
            <br/>
            전공 : {this.state.user_info.user_major} {this.state.user_info.user_grade}학년 
            <br/>
            내가 선택한 시간표
            
            </MyWrapDiv>
        </MypageDiv>
    );
};}

export default MyPage;