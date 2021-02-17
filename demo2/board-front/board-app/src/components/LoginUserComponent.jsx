import React, { Component } from 'react';
import UserService from '../service/UserService';
import styled from "styled-components";
import backgroundImage2 from "../components/image/backgroundImage3.png"
import Logo from "../cservice/Logo";
const LoginBackDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const LoginDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 26%;
    margin-left: -240px;
    width: 480px;
    height: 360px;
    border: solid 4px #00462A;
    border-radius: 10px;
    background-color: white;
`;

const LoginButton = styled.button`
posiiton: relative;
margin-left: 90px;
margin-top: 20px;
width: 306px;
height: 50px;
border: solid 0px;
background-color: #00462A;
color: white;
outline:0px;
`;

const label = styled.input`
    position: relative;
    margin-left:90px;
    margin-top:15px;
    width: 300px;
    height: 40px;
    border: solid 0px;
    border-bottom: solid 1px #00462A;
    background-color:transparent;
    outline:0px;
    color: #00462A;
`;

const P1 = styled.p`
    margin-top:25px;
    width: 100%;
    text-align: center;
    font-size: 16px; 
`;

const P2 = styled.p`
    display: inline; 
    color: #00462A; 
    font-weight: bold;
`;
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
                this.props.history.push('/');
            });
        } 
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
                 <LoginBackDiv>
                 <Logo/>
                 <LoginDiv>
                 <br/>
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
                                    <LoginButton onClick={this.loginUser}>회원가입</LoginButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </LoginDiv>
                </LoginBackDiv>
            </div>
        );
    }
}

export default LoginUserComponent;