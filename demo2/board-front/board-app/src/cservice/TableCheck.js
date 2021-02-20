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
        <div className="TimeTable">
          <div className="DayWrapDiv">
              <div className="DayDiv">월</div>
              <div className="DayDiv">화</div>
              <div className="DayDiv">수</div>
              <div className="DayDiv">목</div>
              <div className="DayDiv">금</div>
          </div>
          <tbody>
            <tr>
              <td>1교시</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td>
            </tr>
            <tr>
              <td>2교시</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td>
            </tr>
            <tr>
              <td>3교시</td><td>31</td><td>32</td><td>33</td><td>34</td><td>35</td>
            </tr>
            <tr>
              <td>4교시</td><td>41</td><td>42</td><td>43</td><td>44</td><td>45</td>
            </tr>
            <tr>
              <td>5교시</td><td>51</td><td>52</td><td>53</td><td>54</td><td>55</td>
            </tr>
            <tr>
              <td>6교시</td><td>Ipsum</td><td>Dolor</td>
            </tr>
            <tr>
              <td>7교시</td><td>Ipsum</td><td>Dolor</td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>    
    );
};

export default TableCheck;