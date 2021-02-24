import React, { Component } from 'react';
import UserService from '../service/UserService';
class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_no: 2
        }

    }

    componentDidMount() {
        UserService.login().then((res) => {
            this.setState({ login: res.data });
            console.log("get result => " + JSON.stringify(res.data));
        });
    }
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={UserService.login()}>Save</button>
            </div>
        );
    }
}

export default ListUserComponent;