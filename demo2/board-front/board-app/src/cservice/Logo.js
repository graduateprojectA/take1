/*
Logo: 로고
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import logoImage1 from "../components/image/logoImage1.png";
import Intro from "./Intro";

const LogoButton = styled.button`
    position: absolute;
    left: 7%;
    top: 30px;
    width: 200px;
    background-color: transparent !important;
    border:solid 0px;
    outline: 0px;
`;

const LogoImg = styled.img`
    width: 100%;
`;

const Logo = () => {
    return(
        <Link to = "./Intro">
        <LogoButton>
            <LogoImg src = {logoImage1}/>
        </LogoButton>
        </Link>
    );
};

export default Logo;