import React, { Component } from 'react';
import UserService from '../service/UserService';
class ListUserComponent extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={UserService.getOneUser(2)}>Save</button>
            </div>
        );
    }
}

export default ListUserComponent;