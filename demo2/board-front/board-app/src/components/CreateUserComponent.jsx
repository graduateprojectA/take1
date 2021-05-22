import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import Logo from "../cservice/Logo";
import UserService from '../service/UserService';
import backgroundImage2 from "./image/backgroundImage3.png"
import "../css/style.css";
import styled from "styled-components";
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
            user_major: 0,
            user_grade: '',
            Arr:["국어국문학과","중어중문학과","영어영문학과","불어중문학과","독어독문학과","사학과",
            "철학과","기독교학과","정치외교학과","행정학과","겅제학과","문헌정보학과",
            "사회학과","사회복지학과","심리학과","소비자학과","커뮤니케이션ㆍ미디어학과","수학과",
            "통계학과","물리학과","화학·나노과학과","생명과학과","컴퓨터공학과","사이버보안과",
            "화학·전자전기공학과","식품공학과","화학신소재공학과","건축학과","건축도시시스템공학과","환경공학과",
            "기후·에너지시스템공학과","휴먼기계바이오공학과","건반악기과","성악과","한국음악과","관현악과",
            "작곡과","무용과","동양화과","조소과","서양화과","도자예술과",
            "디자인학부","섬유예술과","패션디자인과","교육학과","유아교육과","초등교육과",
            "교육공학과","특수교육과","국어교육과","과학교육과","수학교육과","경영학부",
            "융합콘텐츠학과","의류산업학과","국제사무학과","식품영양학과","융합보건학과","체육과학부",
            "의학부","간호학과","글로벌건강간호학과","스크랜튼학부","뇌·인지과학과","국제학과","글로벌한국학과"],
            user_major_str: ''
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changePwHandler = this.changePwHandler.bind(this);
        this.changeMajorHandler = this.changeMajorHandler.bind(this);
        this.changeGradeHandler = this.changeGradeHandler.bind(this);
        this.createUser = this.createUser.bind(this);
    }


    changeIdHandler = (event) => {
        this.setState({ user_id: event.target.value });
    }

    changePwHandler = (event) => {
        this.setState({ user_pw: event.target.value });
    }

    changeMajorHandler = (event) => {
        if(event.target.value=="국어국문학과"){
            this.setState({ user_major : 1 });
        }else if(event.target.value=="중어중문학과"){
            this.setState({ user_major : 2 });
        }else if(event.target.value=="영어영문학과"){
            this.setState({ user_major : 3 });
        }else if(event.target.value=="불어불문학과"){
            this.setState({ user_major : 4 });
        }else if(event.target.value=="독어독문학과"){
            this.setState({ user_major : 5 });
        }else if(event.target.value=="사학과"){
            this.setState({ user_major : 6 });
        }else if(event.target.value=="철학과"){
            this.setState({ user_major : 7 });
        }else if(event.target.value=="기독교학과"){
            this.setState({ user_major : 8 });
        }else if(event.target.value=="정치외교학과"){
            this.setState({ user_major : 9 });
        }else if(event.target.value=="행정학과"){
            this.setState({ user_major : 10 });
        }else if(event.target.value=="경제학과"){
            this.setState({ user_major : 11 });
        }else if(event.target.value=="문헌정보학과"){
            this.setState({ user_major : 12 });
        }else if(event.target.value=="사회학과"){
            this.setState({ user_major : 13 });
        }else if(event.target.value=="사회복지학과"){
            this.setState({ user_major : 14 });
        }else if(event.target.value=="심리학과"){
            this.setState({ user_major : 15 });
        }else if(event.target.value=="소비자학과"){
            this.setState({ user_major : 16 });
        }else if(event.target.value=="커뮤니케이션ㆍ미디어학과"){
            this.setState({ user_major : 17 });
        }else if(event.target.value=="수학과"){
            this.setState({ user_major : 18 });
        }else if(event.target.value=="통계학과"){
            this.setState({ user_major : 19 });
        }else if(event.target.value=="물리학과"){
            this.setState({ user_major : 20 });
        }else if(event.target.value=="화학·나노과학과"){
            this.setState({ user_major : 21 });
        }else if(event.target.value=="생명과학과"){
            this.setState({ user_major : 22 });
        }else if(event.target.value=="컴퓨터공학과"){
            this.setState({ user_major : 23 });
        }else if(event.target.value=="사이버보안과"){
            this.setState({ user_major : 24 });
        }else if(event.target.value=="화학·전자전기공학과"){
            this.setState({ user_major : 25 });
        }else if(event.target.value=="식품공학과"){
            this.setState({ user_major : 26 });
        }else if(event.target.value=="화학신소재공학과"){
            this.setState({ user_major : 27 });
        }else if(event.target.value=="건축학과"){
            this.setState({ user_major : 28 });
        }else if(event.target.value=="건축도시시스템공학과"){
            this.setState({ user_major : 29 });
        }else if(event.target.value=="환경공학과"){
            this.setState({ user_major : 30 });
        }else if(event.target.value=="기후·에너지시스템공학과"){
            this.setState({ user_major : 31 });
        }else if(event.target.value=="휴먼기계바이오공학과"){
            this.setState({ user_major : 32 });
        }else if(event.target.value=="건반악기과"){
            this.setState({ user_major : 33 });
        }else if(event.target.value=="성악과"){
            this.setState({ user_major : 34 });
        }else if(event.target.value=="한국음악과"){
            this.setState({ user_major : 35});
        }else if(event.target.value=="관현악과"){
            this.setState({ user_major : 36 });
        }else if(event.target.value=="작곡과"){
            this.setState({ user_major : 37 });
        }else if(event.target.value=="무용과"){
            this.setState({ user_major : 38 });
        }else if(event.target.value=="동양화과"){
            this.setState({ user_major : 39 });
        }else if(event.target.value=="조소과"){
            this.setState({ user_major : 40 });
        }else if(event.target.value=="서양화과"){
            this.setState({ user_major : 41 });
        }else if(event.target.value=="도자예술과"){
            this.setState({ user_major : 42 });
        }else if(event.target.value=="디자인학부"){
            this.setState({ user_major : 43 });
        }else if(event.target.value=="섬유예술과"){
            this.setState({ user_major : 44 });
        }else if(event.target.value=="패션디자인과"){
            this.setState({ user_major : 45 });
        }else if(event.target.value=="교육학과"){
            this.setState({ user_major : 46 });
        }else if(event.target.value=="유아교육과"){
            this.setState({ user_major : 47 });
        }else if(event.target.value=="초등교육과"){
            this.setState({ user_major : 48 });
        }else if(event.target.value=="교육공학과"){
            this.setState({ user_major : 49 });
        }else if(event.target.value=="특수교육과"){
            this.setState({ user_major : 50 });
        }else if(event.target.value=="국어교육과"){
            this.setState({ user_major : 51 });
        }else if(event.target.value=="과학교육과"){
            this.setState({ user_major : 52 });
        }else if(event.target.value=="수학교육과"){
            this.setState({ user_major : 53 });
        }else if(event.target.value=="경영학부"){
            this.setState({ user_major : 54 });
        }else if(event.target.value=="융합콘텐츠학과"){
            this.setState({ user_major : 55 });
        }else if(event.target.value=="의류산업학과"){
            this.setState({ user_major : 56 });
        }else if(event.target.value=="국제사무학과"){
            this.setState({ user_major : 57 });
        }else if(event.target.value=="식품영양학과"){
            this.setState({ user_major : 58 });
        }else if(event.target.value=="융합보건학과"){
            this.setState({ user_major : 59 });
        }else if(event.target.value=="체육과학부"){
            this.setState({ user_major : 60 });
        }else if(event.target.value=="의학과"){
            this.setState({ user_major : 61 });
        }else if(event.target.value=="간호학과"){
            this.setState({ user_major : 62 });
        }else if(event.target.value=="글로벌건강간호학과"){
            this.setState({ user_major : 63 });
        }else if(event.target.value=="스크랜튼학부"){
            this.setState({ user_major : 64 });
        }else if(event.target.value=="뇌인지과학과"){
            this.setState({ user_major : 65 });
        }else if(event.target.value=="국제학과"){
            this.setState({ user_major : 66 });
        }else if(event.target.value=="글로벌한국학과"){
            this.setState({ user_major : 67 });
        }else{
            this.setState({ user_major : 67 });
        }
    }

    changeGradeHandler = (event) => {
        this.setState({ user_grade: event.target.value });
    }

    createUser = (event) => {
        event.preventDefault();
        let user = {
            user_id: this.state.user_id,
            user_pw: this.state.user_pw,
            user_major: this.state.user_major,
            user_grade: this.state.user_grade
        };
        console.log("user => " + JSON.stringify(user));
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
            UserService.getOneUser(this.state.user_no).then((res) => {
                let user = res.data;
                console.log("user => " + JSON.stringify(user));

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

                        <div class="dropdown">
                            <button type="button" id="dropdownMenuButton1" class="d_input" data-bs-toggle="dropdown" aria-expanded="false">
                                전공
                            </button>
                            <ul class="dropdown-menu dropdown-primary force-scroll" role = "menu" aria-labelledby="dropdownMenuButton1">
                                {
                                    this.state.Arr.map(c =>
                                        // <li><input type="checkbox" value={c} onChange={this.changeMajorHandler}  />{c}</li>
                                        // <button class = "dropdown-item" name ={c} value={c} onChange={this.changeMajorHandler} >{c}</button>
                                        <button class = "dropdown-item" name ={c} value={c} onChange={()=>this.setState({user_major_str:23})} >{c}</button>
                                    )
                                }
                            </ul>
                        </div>
                        <Input type="text" placeholder="학년" name="user_grade" className="form-control"
                            value={this.state.user_grade} onChange={this.changeGradeHandler} />
                        <button className="LoginButton" onClick={this.createUser}>회원가입</button>
                        
                        <div>
                            <p className="P1">
                                이미 계정이 있으신가요?<br />지금
                            <Link to="../login">
                                    <p className="P2"> 로그인</p>
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