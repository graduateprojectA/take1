/*
CourseCheck: 사용자가 들은 과목 입력받음
*/

import React, {useState} from "react";
import axios from 'axios';
import styled from "styled-components";
import { Reacttable } from "./CourseTable";
import backgroundImage2 from "../components/image/backgroundImage3.png"
import {Link, Route} from "react-router-dom";

const JoinBackDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const JoinDiv = styled.div`
    position: absolute;
    left: 22%;
    top: 15%;
    width: 900px;
    height: 550px;
    border: solid 4px #00462A;
    border-radius: 10px;
    background-color: white;
`;

const CourseBox = styled.div`
margin:1% 0% 0% 0%;
width:100%;
height:80%;
`;

const SavedButton = styled.button`
posiiton: relative;
margin-left:35%;
width: 306px;
height: 50px;
border: solid 0px;
background-color: #00462A;
color: white;
outline:0px;
`;

const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;



const CourseCheck = () => {
  const columns = [
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Email",
      field: "email",
    },
    {
      title: "Age",
      field: "age",
    },
    {
      title: "Gender",
      field: "gender",
    },
  ];
    return(
        <div>
          <JoinBackDiv><JoinDiv> 
            <CourseBox>
              <Reacttable/>
            </CourseBox>
            <SavedButton><NavLink to = "./Main">
                저장하기
            </NavLink></SavedButton>
            </JoinDiv></JoinBackDiv>

            
        </div>
    );
};

export default CourseCheck;