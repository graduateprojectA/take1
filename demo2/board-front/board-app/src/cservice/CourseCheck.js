/*
CourseCheck: 사용자가 들은 과목 입력받음
*/


import React, { Component } from 'react';
import UserService from '../service/UserService';
import "../css/style.css";

class CourseCheck extends Component {

componentDidMount() {
    UserService.courseUser().then((res) => {
        console.log("get result => " + JSON.stringify(res.data));
    });
}
render() {
    return (
      <div>
        <button onClick={console.log("this is"+ UserService.courseUser())}/>
      </div>
    );
  }
}
export default CourseCheck;