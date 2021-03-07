import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      user_no : 0, 
      couse_no: 0, 
      field_no: 0,
      course_done:false
    },
    info2: {
    },
  }
  
  render() {
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    const {
      field_no
  } = this.props;
    return (
      <div style={style}>
        <div><b>{field_no}</b></div>
      </div>
    );
  }
}

export default PhoneInfo;