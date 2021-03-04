import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      user_no : 0, 
      couse_no: 0, 
      field_no: 0,
      course_done:false
    }
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
        user_no, course_no, field_no, course_done
    } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>{user_no}</b></div>
        <div><b>{course_no}</b></div>
        <div><b>{field_no}</b></div>
        <div>{course_done}</div>
      </div>
    );
  }
}

export default PhoneInfo;