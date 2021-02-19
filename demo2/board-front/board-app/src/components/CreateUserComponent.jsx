import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import styled from "styled-components";
import backgroundImage2 from "./image/backgroundImage3.png"
import Logo from "../cservice/Logo";
import UserService from '../service/UserService';
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
    top: 20%;
    margin-left: -240px;
    width: 480px;
    height: 410px;
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

const Input = styled.input`
    position: relative;
    margin-left:90px;
    margin-top:15px;
    width: 300px;
    height: 40px;
    border: solid 0px;
    border-bottom: solid 1px #00462A;
    background-color:transparent;
    border-radius: 0%;
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
                        <LoginButton className="btn btn-success" onClick={this.createUser}>회원가입</LoginButton>

                        <div>
                            <P1>
                                이미 계정이 있으신가요?<br />지금
                            <Link to="./Login">
                                <P2> 로그인</P2>
                            </Link>
                            하세요!
                            </P1>
                        </div>
                    </LoginDiv>
                </LoginBackDiv>
            </div>
        );
    }
}

export default CreateUserComponent;