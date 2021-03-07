import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    apple: []
  }

  render() {
    /*
    const { data } = this.props.data;
    const list = data.map(
      info => (<PhoneInfo key={info.course_no} info={info}/>)
    );*/
    const { apple } = this.props;
    const list2 = apple.map(
      info2 => (<PhoneInfo key={info2.user_course_no} info2={info2}/>)
    );

    return (
      <div>
        {list2}    
      </div>
    );
  }
}

export default PhoneInfoList;