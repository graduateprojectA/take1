import React, { Component } from 'react';
import UserService from '../service/UserService';
import Main from "../cservice/Main";
class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_no: 2
        }

    }

    componentDidMount() {
        UserService.login().then((res) => {
            this.setState({ user_no: res.data });
            console.log("get result => " + JSON.stringify(res.data));
        });
    }
    render() {
        return (
            // <div>
            //     <button className="btn btn-success" onClick={UserService.login()}>Save</button>
            // </div>
           <Main user_no = {this.state.user_no}></Main>
        );
    }
}

export default ListUserComponent;