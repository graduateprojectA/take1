/*
IntroText Intro 페이지 글자
*/

import React, { Component } from "react";
import {Link, Route} from "react-router-dom";
import Typist from 'react-typist';
import styled from "styled-components";

const IntroTypist = styled(Typist)`
    margin-top:150px;
    color: white;
    font-size: 2em;
    text-align: center;
`;

export default class IntroText extends Component {
    render() {
      return (
        <IntroTypist>
          커벨리오는 당신에게<br/>
          시간표와 커리큘럼을 제공합니다.<br/>
          로그인을 하고 <br/>
          지금 시간표를 짜보세요.
        </IntroTypist>
      );
    }
  }
   