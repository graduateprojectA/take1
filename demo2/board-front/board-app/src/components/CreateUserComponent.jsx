import React, { Component } from 'react';
import UserService from '../service/UserService';
import axios from 'axios';
class CreateUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_no: this.props.match.params.user_no,
            user_id: '',
            user_pw: '',
            user_major: '',
            user_grade: ''
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changePwHandler = this.changePwHandler.bind(this);
        this.changeMajorHandler = this.changeMajorHandler.bind(this);
        this.changeGradeHandler = this.changeGradeHandler.bind(this);
        this.createUser = this.createUser.bind(this);
    }


    changeIdHandler = (event) => {
        this.setState({user_id: event.target.value});
    }

    changePwHandler = (event) => {
        this.setState({user_pw: event.target.value});
    }

    changeMajorHandler = (event) => {
        this.setState({user_major: event.target.value});
    }

    changeGradeHandler = (event) => {
        this.setState({user_grade: event.target.value});
    }

    createUser = (event) => {
        event.preventDefault();
        let user = {
            user_id: this.state.user_id,
            user_pw: this.state.user_pw,
            user_major: this.state.user_major,
            user_grade: this.state.user_grade
        };
        console.log("user => "+ JSON.stringify(user));

        if (this.state.user_no === '_create') {
            UserService.createUser(user).then(res => {
                this.props.history.push('/');
            });
        } else {
            UserService.updateUser(this.state.user_no, user).then(res => {
                this.props.history.push('/');
            });
        }
    }

    cancel() {
        this.props.history.push('/user');
    }

    getTitle() {
        if (this.state.user_no === '_create') {
            return <h3 className="text-center">새글을 작성해주세요</h3>
        } else {
            return <h3 className="text-center">{this.state.user_no}글을 수정 합니다.</h3>
        }
    }

    // For update function add
    componentDidMount() {
        if (this.state.user_no === '_create') {
            return
        } else {
            UserService.getOneUser(this.state.user_no).then( (res) => {
                let user = res.data;
                console.log("user => "+ JSON.stringify(user));
                
                this.setState({
                        user_id: user.user_id,
                        user_pw: user.user_pw,
                        user_major: user.user_major,
                        user_grade: user.user_grade
                    });
            });
        }
    }
    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                               this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label> 학번 </label>
                                        <input type="text" placeholder="user_id" name="user_id" className="form-control"
                                            value={this.state.user_id} onChange={this.changeIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> 비번 </label>
                                        <input type="text" placeholder="user_pw" name="user_pw" className="form-control" 
                                        value={this.state.user_pw} onChange={this.changePwHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 전공  </label>
                                        <textarea placeholder="user_major" name="user_major" className="form-control" 
                                        value={this.state.user_major} onChange={this.changeMajorHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> 학년  </label>
                                        <input placeholder="user_grade" name="user_grade" className="form-control" 
                                        value={this.state.user_grade} onChange={this.changeGradeHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.createUser}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CreateUserComponent;