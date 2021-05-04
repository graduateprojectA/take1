import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import UserService from '../service/UserService';
import "../css/style.css";
import Logo from "../cservice/Logo";
import My from "../cservice/My";
class EventPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_no:2,
        box1_1: 1,box1_2: 1,box1_3: 1,box1_4: 1,box1_5: 1,
        box2_1: 1,box2_2: 1,box2_3: 1,box2_4: 1,box2_5: 1,
        box3_1: 1, box3_2: 1,box3_3: 1,box3_4: 1,box3_5: 1,
        box4_1: 1,box4_2: 1,box4_3: 1,box4_4: 1,box4_5: 1,
        box5_1: 1, box5_2: 1,box5_3: 1,box5_4: 1,box5_5: 1,
        box6_1: 1,box6_2: 1,box6_3: 1,box6_4: 1,box6_5: 1,
        box7_1: 1, box7_2: 1,box7_3: 1,box7_4: 1,box7_5: 1
    };
}
handleChange = (e) => {
    const box = e.target.name;
    const checked = e.target.checked;
    if (checked ) {
        this.setState({ [box]: 0 });
    }else{
        this.setState({ [box]: 1 });
    }
  };
completeCheck = (event) => {
    event.preventDefault();
    let time = {            
        user_no: this.state.user_no,
        time_mon: (this.state.box1_1*1000000)+(this.state.box2_1*100000)+(this.state.box3_1*10000)+(this.state.box4_1*1000)+(this.state.box5_1*100)+(this.state.box6_1*10)+(this.state.box7_1),
        time_tue: (this.state.box1_2*1000000)+(this.state.box2_2*100000)+(this.state.box3_2*10000)+(this.state.box4_2*1000)+(this.state.box5_2*100)+(this.state.box6_2*10)+(this.state.box7_2),
        time_wed: (this.state.box1_3*1000000)+(this.state.box2_3*100000)+(this.state.box3_3*10000)+(this.state.box4_3*1000)+(this.state.box5_3*100)+(this.state.box6_3*10)+(this.state.box7_3),
        time_thr: (this.state.box1_4*1000000)+(this.state.box2_4*100000)+(this.state.box3_4*10000)+(this.state.box4_4*1000)+(this.state.box5_4*100)+(this.state.box6_4*10)+(this.state.box7_4),
        time_fri: (this.state.box1_5*1000000)+(this.state.box2_5*100000)+(this.state.box3_5*10000)+(this.state.box4_5*1000)+(this.state.box5_5*100)+(this.state.box6_5*10)+(this.state.box7_5)
    };
    console.log(JSON.stringify(time));

    UserService.classUser(time.user_no);
    UserService.TimeUser(time).then(res => {
            this.props.history.push('./classCheck');
    });
}
componentDidMount() {
    UserService.login().then((res) => {
        this.setState({ user_no: res.data });
        console.log("get result => " + JSON.stringify(res.data));
    });
}
render() {
    return (
        <div className="TableCheckDiv">
            <Logo />
            <My />
            <button className="NextA" onClick={this.completeCheck}>&#10095;</button>
            <div className="TableCheckWrapWrapDiv"><br/>
            <h4 style={{color:"red", display:"inline"}}>[시간대 제외] </h4>
            <h4 style={{display:"inline"}}>제외하고자 하는 시간을 선택하세요.<br/>
            없다면, 우측 흰색 화살표를 눌러, 다음 페이지로 이동하세요.</h4>
              <table className="TimeTable">
              <tr classname="TimeDiv">
              <th className="DayDiv">교시/요일</th>
              <th className="DayDiv">월</th>
              <th className="DayDiv">화</th>
              <th className="DayDiv">수</th>
              <th className="DayDiv">목</th>
              <th className="DayDiv">금</th> 
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">1</td>
              <td className="DayDiv"><input type="checkbox" name="box1_1" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box1_2" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box1_3" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box1_4" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box1_5" className="CheckDiv" onChange={this.handleChange}/></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">2</td>
              <td className="DayDiv"><input type="checkbox" name="box2_1" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box2_2" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box2_3" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box2_4" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box2_5" className="CheckDiv" onChange={this.handleChange}/></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">3</td>
              <td className="DayDiv"><input type="checkbox" name="box3_1" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box3_2" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box3_3" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box3_4" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box3_5" className="CheckDiv" onChange={this.handleChange}/></td>
              </tr>  
              <tr className="TimeDiv">
              <td className="DayDiv">4</td>
              <td className="DayDiv"><input type="checkbox" name="box4_1" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box4_2" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box4_3" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box4_4" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box4_5" className="CheckDiv" onChange={this.handleChange}/></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">5</td>
              <td className="DayDiv"><input type="checkbox" name="box5_1" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box5_2" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box5_3" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box5_4" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box5_5" className="CheckDiv" onChange={this.handleChange}/></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">6</td>
              <td className="DayDiv"><input type="checkbox" name="box6_1" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box6_2" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box6_3" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box6_4" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box6_5" className="CheckDiv" onChange={this.handleChange}/></td>
              </tr>
              <tr className="TimeDiv">
              <td className="DayDiv">7</td>
              <td className="DayDiv"><input type="checkbox" name="box7_1" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box7_2" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box7_3" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box7_4" className="CheckDiv" onChange={this.handleChange}/></td>
              <td className="DayDiv"><input type="checkbox" name="box7_5" className="CheckDiv" onChange={this.handleChange}/></td>
              </tr>                                                                                
              </table>
              </div>
            </div>
    );
}
  }


export default EventPractice;