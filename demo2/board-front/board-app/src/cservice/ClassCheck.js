/*
TableCheck
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import TableCheckLine from "./TableCheckLine";
import Logo from "./Logo";
import My from "./My";
import backgroundImage2 from "../components/image/backgroundImage2.png";

const ClassCheckDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const ClassCheckWrapWrapDiv = styled.div`
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -370px;
    border: solid 1px;
    height: 585px;
    width: 740px;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
    border-radius: 10px;
`;

const ClassCheckP = styled.p`
    text-align: center; 
    font-size: 1.2em;
`;

const NextA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    right: 1%;
    &:hover{
        color: #00462A;
    }
`;

const PreA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    left: 1%;
    &:hover{
        color: #00462A;
    }
`;

const ClassCheck = () => {
    return(
        <ClassCheckDiv>
            <Logo/>
            <My/>
            <ClassCheckWrapWrapDiv>
                <ClassCheckP>제외할 수업을 선택해주세요.</ClassCheckP>
            </ClassCheckWrapWrapDiv>
            <Link to = "./tableCheck">
                <PreA>&#10094;</PreA> 
            </Link>
            <Link to = "./ClassCheck">
                <NextA>&#10095;</NextA>
            </Link>
        </ClassCheckDiv>    
    );
};

export default ClassCheck;