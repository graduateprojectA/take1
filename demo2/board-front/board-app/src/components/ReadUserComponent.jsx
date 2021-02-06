import React, { Component } from 'react';
import UserService from '../service/UserService';

class ReadUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_no: this.props.match.params.user_no,
            user: {}
        }

        this.goToUpdate = this.goToUpdate.bind(this);

    }

    componentDidMount() {
        UserService.getOneUser(this.state.user_no).then( res => {
            this.setState({user: res.data});
            console.log("get result => "+ JSON.stringify(res.data));
        });

        
    }


    goToList() {
        this.props.history.push('/user');
    }

    goToUpdate = (event) => {
        event.preventDefault();
        this.props.history.push(`/create-user/${this.state.user_no}`);
    }

    deleteView = async function () {
        if(window.confirm("정말로 글을 삭제하시겠습니까?\n삭제된 글은 복구 할 수 없습니다.")) {
            UserService.deleteUser(this.state.user_no).then( res => {
                console.log("delete result => "+ JSON.stringify(res));
                if (res.status == 200) {
                    this.props.history.push('/user');
                } else {
                    alert("글 삭제가 실패했습니다.");
                }
            });

        }
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className ="text-center"> Read Detail</h3>
                    <div className = "card-body">
                            <div className = "row">
                                <label> 학번 </label> : {this.state.user.user_id}
                            </div>

                            <div className = "row">
                                <label> 비번 </label> : <br></br>
                                <textarea value={this.state.user.user_pw} readOnly/> 
                            </div >

                            <div className = "row">
                                <label> 전공 </label> : <br></br>
                                <textarea value={this.state.user.user_major} readOnly/> 
                            </div >

                            <div className = "row">
                                <label> 학년  </label>: 
                                {this.state.user.user_grade}
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default ReadUserComponent;