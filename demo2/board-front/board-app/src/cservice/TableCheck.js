/*
TableCheck
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import TableCheckLine from "./TableCheckLine";
import Logo from "./Logo";
import My from "./My";
import backgroundImage4 from "../components/image/backgroundImage4.png";

const TableCheckDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage4});
    background-size: cover;
`;

const TableCheckWrapWrapDiv = styled.div`
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -265px;
    border: solid 1px;
    height: 585px;
    width: 530px;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
    border-radius: 10px;
`;

const TableCheckWrapDiv = styled.div`
    position: absolute;
    left: 50%;
    margin-left: -183px;
    height: 550px;
    width: 366px;
`;

const TableCheckP = styled.p`
    text-align: center; 
    font-size: 1.2em;
`;

const TimeWrapDiv = styled.div`
    float: left;
    padding-top:22px;
    height:100%;
    margin-top: -30px;
`;

const TimeDiv = styled.div`
    text-align: right;
    height: 65px;
    width: 100%;
`;

const DayDiv = styled.div`
    float: left;
    width:64px; 
`;

const DayWrapDiv = styled.div`
    width: 100%;
    height: 20px;
    padding-left: 65px;
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

const TableCheck = () => {
    return(
        <TableCheckDiv>
            <Logo/>
            <My/>
            {/* <a>&#10094;</a> */}
            <Link to = "./classCheck">
                <NextA>&#10095;</NextA>
            </Link>
            <TableCheckWrapWrapDiv>
                <TableCheckWrapDiv>
                    <TableCheckP>불가능한 시간을 체크해주세요.</TableCheckP>
                    <DayWrapDiv>
                        <DayDiv>월</DayDiv>
                        <DayDiv>화</DayDiv>
                        <DayDiv>수</DayDiv>
                        <DayDiv>목</DayDiv>
                        <DayDiv>금</DayDiv>
                    </DayWrapDiv>
                    <TimeWrapDiv>
                        <TimeDiv>8:00</TimeDiv>
                        <TimeDiv>9:30</TimeDiv>
                        <TimeDiv>11:00</TimeDiv>
                        <TimeDiv>12:30</TimeDiv>
                        <TimeDiv>14:00</TimeDiv>
                        <TimeDiv>15:30</TimeDiv>
                        <TimeDiv>17:00</TimeDiv>
                        <TimeDiv>18:30</TimeDiv>
                    </TimeWrapDiv> 
                    <TableCheckLine/>
                    <TableCheckLine/>
                    <TableCheckLine/>
                    <TableCheckLine/>
                    <TableCheckLine/>
                    <TableCheckLine/>
                    <TableCheckLine/>
                </TableCheckWrapDiv>
            </TableCheckWrapWrapDiv>
        </TableCheckDiv>    
    );
};

export default TableCheck;