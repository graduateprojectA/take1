/*
Intro: 웹 사이트 입장 시 처음 페이지
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import backgroundImage2 from '../components/image/backgroundImage2.png';
import MainText from "./MainText";
import Logo from "./Logo";
import My from "./My";

const MainDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const TableCreButton = styled.button`
    border: solid 0px;
    outline: 0px;
    border-radius: 10px;
    position: absolute;
    top:65%;
    left:50%;
    margin-left:-180px;
    width: 360px;
    height:80px;
    background-color: #00462A;
    color: white;
    font-size:1.1em;
`;

const Main = (props) => {
    return(
        <div>
        <MainDiv>
            <Logo/>
            <My/>
            <MainText/>
            <div>aaa{props.user_no}</div>
            <Link to = "tableCheck">
                <TableCreButton>시간표만들러가기</TableCreButton>
            </Link>
        </MainDiv>
            Main
            
        </div>
    );
};

export default Main;