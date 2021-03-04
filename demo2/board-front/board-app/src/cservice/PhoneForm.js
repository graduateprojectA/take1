import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
      user_no: '',
      course_no: '',
      field_no: '',
      course_done: '',
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    handleCheckChange = (e) => {
        const box = e.target.name;
        const checked = e.target.checked;
        if (checked ) {
            this.setState({ [box]: true });
        }else{
            this.setState({ [box]: false });
        }
      };
    handleSubmit = (e) => {
      // 페이지 리로딩 방지
      e.preventDefault();
      // 상태값을 onCreate 를 통하여 부모에게 전달
      this.props.onCreate(this.state);
      // 상태 초기화
      this.setState({
        user_no: '',
      course_no: '',
      field_no: '',
      course_done: '',
      })
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="user_no"
            value={this.state.user_no}
            onChange={this.handleChange}
            name="user_no"
          />
          <input
            placeholder="course_no"
            value={this.state.course_no}
            onChange={this.handleChange}
            name="course_no"
          />
          <input
            placeholder="field_no"
            value={this.state.field_no}
            onChange={this.handleChange}
            name="field_no"
          />
          <input type="checkbox" name="course_done" onChange={this.handleCheckChange}/>
          <button type="submit" onClick={() => console.log(this.state)}>등록</button>
        </form>
      );
    }
  }


export default PhoneForm;
