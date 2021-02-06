import React, { Component } from 'react';
import UserService from '../service/UserService';

class ListUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            users: []
        }
		
    }
    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">users List</h2>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>글 번호</th>
                                <th>학번 </th>
                                <th>비번 </th>
                                <th>전공 </th>
                                <th>학년 </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user => 
                                    <tr key = {user.user_no}>
                                        <td> {user.user_id} </td>
                                        <td> {user.user_pw} </td>
                                        <td> {user.user_major} </td>
                                        <td> {user.user_grade} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>
        );       
    }
}

export default ListUserComponent;