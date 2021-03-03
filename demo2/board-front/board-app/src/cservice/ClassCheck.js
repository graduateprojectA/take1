/*
TableCheck
*/

import styled from "styled-components";
import React, { Component } from 'react';
import UserService from '../service/UserService';
import "../css/style.css";
import Logo from "./Logo";
import My from "./My";
import backgroundImage2 from "../components/image/backgroundImage2.png";
import  CheckBox  from './CheckBox';
const ClassCheckDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage2});
    background-size: cover;
`;

const ClassCheckWrapWrapDiv = styled.div`
    position: absolute;
    top: 120px;
    left: 50%;
    margin-left: -370px;
    border: solid 1px;
    height: 585px;
    width: 740px;
    background-color: #fff5ee;
    opacity: 0.8;
    border: solid 5px #00462A;
    border-radius: 10px;
`;

const ClassCheckP = styled.p`
    text-align: center; 
    font-size: 1.2em;
`;

const NextA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    right: 1%;
    &:hover{
        color: #00462A;
    }
`;

const PreA = styled.a`
    font-size: 40px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top:-20px;
    padding: 16px;
    color: white;
    left: 1%;
    &:hover{
        color: #00462A;
    }
`;

class ClassCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_no:2,
            box1: "f",box2: 1,box3: 1,
            fruites: [
                {id: 1, value: "banana", isChecked: false},
                {id: 2, value: "apple", isChecked: false},
                {id: 3, value: "mango", isChecked: false},
                {id: 4, value: "grap", isChecked: false}
              ],
            class:[]
        };
    }
    handleCheckChieldElement = (event) => {
        let fruites = this.state.fruites
        let f= this.state.f
        fruites.forEach(fruite => {
           if (fruite.value === event.target.value){
               
              fruite.isChecked =  event.target.checked
              f=fruite.value
              console.log(f)
           }
        })
        this.setState({fruites: fruites})
        let box1 = this.state.box1
        const checked = event.target.checked;
        if (checked ) {
            this.setState({ [box1]: 0 });
        }else{
            this.setState({ [box1]: 1 });
        }
        
      }
    componentDidMount() {
        UserService.courseUser().then((res) => {
            this.setState({ class: res.data});
            console.log("get result => " + JSON.stringify(res.data));
        });
        UserService.login().then((res) => {
            this.setState({ user_no: res.data });
            console.log("get result => " + JSON.stringify(res.data));
        });
    }
    render() {
        return (
            <div>
                <ClassCheckDiv>
                    <Logo />
                    <My />
                    <ClassCheckWrapWrapDiv>
                        <ClassCheckP>제외할 수업을 선택해주세요.</ClassCheckP>
                        <div className="ClassDiv">
                            {
                                this.state.class.map((c) => {
                                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...c} />)
                                })
                                
                            }
                        </div>
                        <ul>
                            {
                                this.state.fruites.map((f) => {
                                    return (<CheckBox handleCheckChieldElement={this.handleCheckChieldElement}  {...f} />)
                                  })
                            }
                        </ul>
                    </ClassCheckWrapWrapDiv>
                </ClassCheckDiv>
            </div>
        );
    }
}

export default ClassCheck;