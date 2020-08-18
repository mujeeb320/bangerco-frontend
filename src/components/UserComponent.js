import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }


    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center"> Users List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> User ID</td>
                            <td> User Name</td>
                            <td> User Email</td>
                            <td> User NIC</td>
                            <td> User DOB</td>
                        </tr>

                    </thead>

                    <tbody>
                        {

                            this.state.users.map(
                                user =>
                                    <tr key={user.userId}>
                                        <td>{user.userId} </td>
                                        <td>{user.name} </td>
                                        <td>{user.email} </td>
                                        <td>{user.nic} </td>
                                        <td>{user.DOB} </td>
                                    </tr>
                            )}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent