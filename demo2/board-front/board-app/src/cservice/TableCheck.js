/*
TableCheck
*/

import React from "react";
import {Link, Route} from "react-router-dom";
import Logo from "./Logo";
import My from "./My";
import "../css/style.css";

const TableCheck = () => {
  return (
    <div className="TableCheckDiv">
      <Logo />
      <My />
      <Link to="./classCheck">
        <button className="NextA">&#10095;</button>
      </Link>
      <div className="TableCheckWrapWrapDiv">
        <table>
          <thead>
            <tr>
              <th>월</th><th>화</th><th>수</th><th>목</th><th>금</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
            </tr>
            <tr>
              <td>Lorem</td><td>Ipsum</td><td>Dolor</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>    
    );
};

export default TableCheck;