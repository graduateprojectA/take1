/*
Logo: 로고
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import my from "../components/image/my.png";
import MyPage from "./MyPage";

const LogoButton = styled.button`
    position: absolute;
    right: 7%;
    top: 50px;
    width: 60px;
    background-color: transparent !important;
    border:solid 0px;
    outline: 0px;
`;

const LogoImg = styled.img`
    width: 100%;
`;

const My = () => {
    return(
        <Link to = "./MyPage">
        <LogoButton>
            <LogoImg src = {my}/>

        </LogoButton>
        </Link>
    );
};

export default My;