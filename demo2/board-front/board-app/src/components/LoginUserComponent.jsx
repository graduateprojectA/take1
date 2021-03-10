import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import UserService from '../service/UserService';
import styled from "styled-components";
import backgroundImage2 from "./image/backgroundImage3.png"
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
const Input = styled.input`
    position: relative;
    margin-left:20%;
    margin-top:5%;
    width: 60%;
    height: 10%;
    border: solid 0px;
    border-bottom: solid 1px #00462A;
    background-color:transparent;
    border-radius: 0%;
    outline:0px;
    color: #00462A;
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
position: relative;
margin-left: 17%;
margin-top: 10%;
width: 66%;
height: 50px;
border: solid 0px;
background-color: #00462A;
color: white;
outline:0px;
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
            real_no:2,
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
        console.log("user2 => "+ JSON.stringify(user));

            UserService.loginUser(user).then(res => {
                this.props.history.push('/Main');
            });
    }


    // For update function add
    componentDidMount() {

        UserService.login().then((res) => {
            this.setState({ login: res.data });
            console.log("get result => " + JSON.stringify(res.data));
        });
    }
    render() {
        return (
            <div>
                 <LoginBackDiv>
                 <Logo/>
                 <LoginDiv>
                        <br />
                        <Input type="text" placeholder="학번 7자리" name="user_id" className="form-control"
                            value={this.state.user_id} onChange={this.changeIdHandler} />

                        <Input type="text" placeholder="비밀번호" name="user_pw" className="form-control"
                            value={this.state.user_pw} onChange={this.changePwHandler} />

                        <LoginButton onClick={this.loginUser}>로그인</LoginButton>
                        <div>
                            <P1>
                                아직 커벨리오의 회원이 아니신가요?<br />
                                <Link to="./create-user/_create">
                                    <P2>회원가입</P2>
                                </Link>
                                하시고, 시간표를 생성해보세요!
                            </P1>
                        </div>
                    </LoginDiv>
                </LoginBackDiv>
            </div>
        );
    }
}

export default LoginUserComponent;