import React, { Component } from 'react';
import UserService from '../service/UserService';
class ReadUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_no: this.props.match.params.user_no,
            user: {}
        }

    }

    componentDidMount() {
        UserService.getOneUser(this.state.user_no).then( res => {
            this.setState({user: res.data});
            console.log("get result => "+ JSON.stringify(res.data));
        });
    }
    callID(){
        console.log("왜 안돼");   
    }
    render() {
        return (
            <div>
               <button className="btn btn-success" onClick={this.callID()}>Save</button>
            </div>
        );
    }
}


export default ReadUserComponent;