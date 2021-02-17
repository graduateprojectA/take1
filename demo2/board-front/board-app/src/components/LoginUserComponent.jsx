import React, { Component } from 'react';
import UserService from '../service/UserService';
import axios from 'axios';

class LoginUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_no: this.props.match.params.user_no,
            user_id: '',
            user_pw: ''
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changePwHandler = this.changePwHandler.bind(this);
        this.createUser = this.createUser.bind(this);
    }


    changeIdHandler = (event) => {
        this.setState({user_id: event.target.value});
    }

    changePwHandler = (event) => {
        this.setState({user_pw: event.target.value});
    }

    loginUser = (event) => {
        event.preventDefault();
        let user = {
            user_id: this.state.user_id,
            user_pw: this.state.user_pw
        };
        console.log("user => "+ JSON.stringify(user));

        if (this.state.user_no === '_login') {
            UserService.loginUser(user).then(res => {
                this.props.history.push('/login');
            });
        } 
    }

    cancel() {
        this.props.history.push('/user');
    }

    // For update function add
    componentDidMount() {
        if (this.state.user_no === '_login') {
            return
        } else {
            UserService.getOneUser(this.state.user_no).then( (res) => {
                let user = res.data;
                console.log("user => "+ JSON.stringify(user));
                
                this.setState({
                        user_id: user.user_id,
                        user_pw: user.user_pw
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
                                    {/* <button className="btn btn-success" onClick={this.loginUser}>Login</button>  */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginUserComponent;