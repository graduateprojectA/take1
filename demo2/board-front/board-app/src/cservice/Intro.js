/*
Intro: 웹 사이트 입장 시 처음 페이지
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import backgroundImage2 from '../components/image/backgroundImage2.png';
import IntroText from "./IntroText";
import Logo from "./Logo";

const IntroDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const LoginButton = styled.button`
    border: solid 0px;
    outline: 0px;
    border-radius: 10px;
    position: absolute;
    top:60%;
    left:50%;
    margin-left:-180px;
    width: 360px;
    height:80px;
    background-color: #00462A;
    color: white;
    font-size:1.1em;
`;

const JoinButton = styled.button`
    border: solid 0px;  
    outline: 0px;
    border-radius: 10px;
    position: absolute;
    top:73%;
    left:50%;
    margin-left:-180px;
    width: 360px;
    height:80px;  
    background-color: #00462A;
    color: white;
    font-size:1.1em;
`;

const Intro = () => {
    return(
        <IntroDiv>
            <Logo/>
            <IntroText/>
            <Link to = "./login">
                <LoginButton>로그인하기</LoginButton>
            </Link>
            <Link to = "./create-user/_create">
                <JoinButton>회원가입하기</JoinButton>
            </Link> 
        </IntroDiv>
    );
};

export default Intro;