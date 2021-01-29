/*
Login: 로그인페이지
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import backgroundImage2 from "./image/backgroundImage3.png"
import Logo from "./Logo";

const LoginBackDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const LoginDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 26%;
    margin-left: -240px;
    width: 480px;
    height: 360px;
    border: solid 4px #00462A;
    border-radius: 10px;
    background-color: white;
`;

const LoginButton = styled.button`
posiiton: relative;
margin-left: 90px;
margin-top: 50px;
width: 306px;
height: 50px;
border: solid 0px;
background-color: #00462A;
color: white;
outline:0px;
`;

const Input = styled.input`
    position: relative;
    margin-left:90px;
    margin-top:20px;
    width: 300px;
    height: 40px;
    border: solid 0px;
    border-bottom: solid 1px #00462A;
    background-color:transparent;
    outline:0px;
    color: #00462A;
`;

const P1 = styled.p`
    margin-top:25px;
    width: 100%;
    text-align: center;
    font-size: 16px; 
`;

const P2 = styled.p`
    display: inline; 
    color: #00462A; 
    font-weight: bold;
`;

const Login = () => {
    return(
        <LoginBackDiv>
            <Logo/>
            <LoginDiv>
                <br/>
                <Input placeholder={"학번 7자리"}/>
                <Input placeholder={"비밀번호"}/>  
                <Link to = "./Main">
                    <LoginButton>로그인</LoginButton>
                </Link>
                <div>
                <P1>
                    아직 커벨리오의 회원이 아니신가요?<br/>
                <Link to = "./Join">
                    <P2>회원가입</P2>
                </Link>
                    하시고, 시간표를 생성해보세요!
                </P1>
                </div>
             </LoginDiv>
        </LoginBackDiv>
    );
};

export default Login;