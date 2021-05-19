import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import Logo from "../cservice/Logo";
import UserService from '../service/UserService';
import backgroundImage2 from "./image/backgroundImage3.png"
import "../css/style.css";

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
    left: 33%;
    top: 23%;
    width: 35%;
    height: 62%;
    border: solid 4px #00462A;
    border-radius: 10px;
    background-color: white;
`;

const Input = styled.input`
position: relative;
margin-left:20%;
margin-top:2%;
width: 60%;
height: 10%;
border: solid 0px;
border-bottom: solid 1px #00462A;
background-color:transparent;
border-radius: 0%;
outline:0px;
color: #00462A;
`;


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
        let log = {
            user_id: this.state.user_id,
            user_pw: this.state.user_pw
        };
        if (this.state.user_no == '_create') {
            UserService.createUser(user);
            UserService.loginUser(log).then(res => {
                this.props.history.push('../courseCheck');
            });
        }
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
                 <LoginBackDiv>
                    <Logo />
                    <LoginDiv>
                        <br />
                        <Input type="text" placeholder="학번 7자리" name="user_id" className="form-control"
                            value={this.state.user_id} onChange={this.changeIdHandler} />
                        <Input type="text" placeholder="비밀번호" name="user_pw" className="form-control"
                            value={this.state.user_pw} onChange={this.changePwHandler} />
                        <Input type="text" placeholder="전공" name="user_major" className="form-control"
                            value={this.state.user_major} onChange={this.changeMajorHandler} />
                        <Input type="text" placeholder="학년" name="user_grade" className="form-control"
                            value={this.state.user_grade} onChange={this.changeGradeHandler} />
                        <button className="LoginButton" onClick={this.createUser}>회원가입</button>

                        <div>
                            <p className ="P1">
                                이미 계정이 있으신가요?<br />지금
                            <Link to="../login">
                                <p className ="P2"> 로그인</p>
                            </Link>
                            하세요!
                            </p>
                        </div>
                    </LoginDiv>
                </LoginBackDiv>
            </div>
        );
    }
}

export default CreateUserComponent;