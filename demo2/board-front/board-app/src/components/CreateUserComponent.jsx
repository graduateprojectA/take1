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
            user_major_str: '전공'
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
            this.setState({user_major_str : "국어국문학과"});
        }else if(event.target.value=="중어중문학과"){
            this.setState({ user_major : 2 });
            this.setState({user_major_str : "중어중문학과"});
        }else if(event.target.value=="영어영문학과"){
            this.setState({ user_major : 3 });
            this.setState({user_major_str : "영어영문학과"});
        }else if(event.target.value=="불어불문학과"){
            this.setState({ user_major : 4 });
            this.setState({user_major_str : "불어불문학과"});
        }else if(event.target.value=="독어독문학과"){
            this.setState({ user_major : 5 });
            this.setState({user_major_str : "독어독문학과"});
        }else if(event.target.value=="사학과"){
            this.setState({ user_major : 6 });
            this.setState({user_major_str : "사학과"});
        }else if(event.target.value=="철학과"){
            this.setState({ user_major : 7 });
            this.setState({user_major_str : "철학과"});
        }else if(event.target.value=="기독교학과"){
            this.setState({ user_major : 8 });
            this.setState({user_major_str : "기독교학과;"})
        }else if(event.target.value=="정치외교학과"){
            this.setState({ user_major : 9 });
            this.setState({user_major_str : "정치외교학;과"})
        }else if(event.target.value=="행정학과"){
            this.setState({ user_major : 10 });
            this.setState({user_major_str : "행정학과"});
        }else if(event.target.value=="경제학과"){
            this.setState({ user_major : 11 });
            this.setState({user_major_str : "경제학과"});
        }else if(event.target.value=="문헌정보학과"){
            this.setState({ user_major : 12 });
            this.setState({user_major_str : "문헌정보학과"});
        }else if(event.target.value=="사회학과"){
            this.setState({ user_major : 13 });
            this.setState({user_major_str : "사회학과"});
        }else if(event.target.value=="사회복지학과"){
            this.setState({ user_major : 14 });
            this.setState({user_major_str : "사회복지학과"});
        }else if(event.target.value=="심리학과"){
            this.setState({ user_major : 15 });
            this.setState({user_major_str : "심리학과"});
        }else if(event.target.value=="소비자학과"){
            this.setState({ user_major : 16 });
            this.setState({user_major_str : "소비자학과"});
        }else if(event.target.value=="커뮤니케이션ㆍ미디어학과"){
            this.setState({ user_major : 17 });
            this.setState({user_major_str : "커뮤니케이션ㆍ미디어학과"});
        }else if(event.target.value=="수학과"){
            this.setState({ user_major : 18 });
            this.setState({user_major_str : "수학과"});
        }else if(event.target.value=="통계학과"){
            this.setState({ user_major : 19 });
            this.setState({user_major_str : "통계학과"});
        }else if(event.target.value=="물리학과"){
            this.setState({ user_major : 20 });
            this.setState({user_major_str : "물리학과"});
        }else if(event.target.value=="화학·나노과학과"){
            this.setState({ user_major : 21 });
            this.setState({user_major_str : "화학·나노과학과"});
        }else if(event.target.value=="생명과학과"){
            this.setState({ user_major : 22 });
            this.setState({user_major_str : "생명과학과"});
        }else if(event.target.value=="컴퓨터공학과"){
            this.setState({ user_major : 23 });
            this.setState({user_major_str : "컴퓨터공학과"});
        }else if(event.target.value=="사이버보안과"){
            this.setState({ user_major : 24 });
            this.setState({user_major_str : "사이버보안과"});
        }else if(event.target.value=="화학·전자전기공학과"){
            this.setState({ user_major : 25 });
            this.setState({user_major_str : "화학·전자전기공학과"});
        }else if(event.target.value=="식품공학과"){
            this.setState({ user_major : 26 });
            this.setState({user_major_str : "식품공학과"});
        }else if(event.target.value=="화학신소재공학과"){
            this.setState({ user_major : 27 });
            this.setState({user_major_str : "화학신소재공학과"});
        }else if(event.target.value=="건축학과"){
            this.setState({ user_major : 28 });
            this.setState({user_major_str : "건축학과"});
        }else if(event.target.value=="건축도시시스템공학과"){
            this.setState({ user_major : 29 });
            this.setState({user_major_str : "건축도시시스템공학과"});
        }else if(event.target.value=="환경공학과"){
            this.setState({ user_major : 30 });
            this.setState({user_major_str : "환경공학과"});
        }else if(event.target.value=="기후·에너지시스템공학과"){
            this.setState({ user_major : 31 });
            this.setState({user_major_str : "기후·에너지시스템공학과"});
        }else if(event.target.value=="휴먼기계바이오공학과"){
            this.setState({ user_major : 32 });
            this.setState({user_major_str : "휴먼기계바이오공학과"});
        }else if(event.target.value=="건반악기과"){
            this.setState({ user_major : 33 });
            this.setState({user_major_str : "건반악기과"});
        }else if(event.target.value=="성악과"){
            this.setState({ user_major : 34 });
            this.setState({user_major_str : "성악과"});
        }else if(event.target.value=="한국음악과"){
            this.setState({ user_major : 35});
            this.setState({user_major_str : "한국음악과"});
        }else if(event.target.value=="관현악과"){
            this.setState({ user_major : 36 });
            this.setState({user_major_str : "관현악과"});
        }else if(event.target.value=="작곡과"){
            this.setState({ user_major : 37 });
            this.setState({user_major_str : "작곡과"});
        }else if(event.target.value=="무용과"){
            this.setState({ user_major : 38 });
            this.setState({user_major_str : "무용과"});
        }else if(event.target.value=="동양화과"){
            this.setState({ user_major : 39 });
            this.setState({user_major_str : "동양화과"});
        }else if(event.target.value=="조소과"){
            this.setState({ user_major : 40 });
            this.setState({user_major_str : "조소과"});
        }else if(event.target.value=="서양화과"){
            this.setState({ user_major : 41 });
            this.setState({user_major_str : "서양화과"});
        }else if(event.target.value=="도자예술과"){
            this.setState({ user_major : 42 });
            this.setState({user_major_str : "도자예술과"});
        }else if(event.target.value=="디자인학부"){
            this.setState({ user_major : 43 });
            this.setState({user_major_str : "디자인학부"});
        }else if(event.target.value=="섬유예술과"){
            this.setState({ user_major : 44 });
            this.setState({user_major_str : "섬유예술과"});
        }else if(event.target.value=="패션디자인과"){
            this.setState({ user_major : 45 });
            this.setState({user_major_str : "패션디자인과"});
        }else if(event.target.value=="교육학과"){
            this.setState({ user_major : 46 });
            this.setState({user_major_str : "교육학과"});
        }else if(event.target.value=="유아교육과"){
            this.setState({ user_major : 47 });
            this.setState({user_major_str : "유아교육과"});
        }else if(event.target.value=="초등교육과"){
            this.setState({ user_major : 48 });
            this.setState({user_major_str : "초등교육과"});
        }else if(event.target.value=="교육공학과"){
            this.setState({ user_major : 49 });
            this.setState({user_major_str : "교육공학과"});
        }else if(event.target.value=="특수교육과"){
            this.setState({ user_major : 50 });
            this.setState({user_major_str : "특수교육과"});
        }else if(event.target.value=="국어교육과"){
            this.setState({ user_major : 51 });
            this.setState({user_major_str : "국어교육과"});
        }else if(event.target.value=="과학교육과"){
            this.setState({ user_major : 52 });
            this.setState({user_major_str : "과학교육과"});
        }else if(event.target.value=="수학교육과"){
            this.setState({ user_major : 53 });
            this.setState({user_major_str : "수학교육과"});
        }else if(event.target.value=="경영학부"){
            this.setState({ user_major : 54 });
            this.setState({user_major_str : "경영학부"});
        }else if(event.target.value=="융합콘텐츠학과"){
            this.setState({ user_major : 55 });
            this.setState({user_major_str : "융합콘텐츠학과"});
        }else if(event.target.value=="의류산업학과"){
            this.setState({ user_major : 56 });
            this.setState({user_major_str : "의류산업학과"});
        }else if(event.target.value=="국제사무학과"){
            this.setState({ user_major : 57 });
            this.setState({user_major_str : "국제사무학과"});
        }else if(event.target.value=="식품영양학과"){
            this.setState({ user_major : 58 });
            this.setState({user_major_str : "식품영양학과"});
        }else if(event.target.value=="융합보건학과"){
            this.setState({ user_major : 59 });
            this.setState({user_major_str : "융합보건학과"});
        }else if(event.target.value=="체육과학부"){
            this.setState({ user_major : 60 });
            this.setState({user_major_str : "체육과학부"});
        }else if(event.target.value=="의학과"){
            this.setState({ user_major : 61 });
            this.setState({user_major_str : "의학과"});
        }else if(event.target.value=="간호학과"){
            this.setState({ user_major : 62 });
            this.setState({user_major_str : "간호학과"});
        }else if(event.target.value=="글로벌건강간호학과"){
            this.setState({ user_major : 63 });
            this.setState({user_major_str : "글로벌건강간호학과"});
        }else if(event.target.value=="스크랜튼학부"){
            this.setState({ user_major : 64 });
            this.setState({user_major_str : "스트랜튼학부"});
        }else if(event.target.value=="뇌인지과학과"){
            this.setState({ user_major : 65 });
            this.setState({user_major_str : "뇌인지과학과"});
        }else if(event.target.value=="국제학과"){
            this.setState({ user_major : 66 });
            this.setState({user_major_str : "국제학과"});
        }else if(event.target.value=="글로벌한국학과"){
            this.setState({ user_major : 67 });
            this.setState({user_major_str : "글로벌한국학과"});
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
                            <button type="button" style={{width: "60%", color: "gray"}} id="dropdownMenuButton1" class="d_input" data-bs-toggle="dropdown" aria-expanded="false">
                                &nbsp;{this.state.user_major_str}
                            </button>
                            <ul class="dropdown-menu dropdown-primary force-scroll" role = "menu" aria-labelledby="dropdownMenuButton1">
                                {
                                    this.state.Arr.map(c =>
                                        <li><label class="btn btn-light" style={{width: "90%", color: "#00462a", textAlign: "left"}} ><input type="checkbox" value={c} onChange={this.changeMajorHandler}  />{c}</label></li>
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