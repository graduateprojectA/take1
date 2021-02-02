/*
MainText Main 페이지 글자
*/

import React, { Component } from "react";
import {Link, Route} from "react-router-dom";
import Typist from 'react-typist';
import styled from "styled-components";

const IntroTypist = styled(Typist)`
    margin-top:220px;
    color: white;
    font-size: 2em;
    text-align: center;
`;

export default class IntroText extends Component {
    render() {
      return (
        <IntroTypist>
          커벨리오와 함께<br/>
          지금 시간표를 만들어보세요!<br/>
        </IntroTypist>
      );
    }
  }
   