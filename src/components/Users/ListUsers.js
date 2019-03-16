import React, { Component } from 'react';
import ListUsersEmpty from './ListUsersEmpty';
import ViewUser from './ViewUser';
import { history } from "../../routes/AppRouter";
import {Pagination, Table, Avatar, Button, Modal} from 'antd';


class ListUsers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            visible: false,
            userId: null
        };

        this.showUsers.bind(this);
    }

    showModal = (key) => {
        this.setState({
            visible: true,
            userId: key
        });
    };

    handleCancel = (e) => {
        this.setState({
            visible: false,
            userId: null
        });
    };

    componentDidMount() {
        this.setState({
            users: this.props.users
        })
    }

    /**
     * Redirect to the page selected for the user.
     * @param page
     */
    onPageChange = (page) => {
        if (page === 1) {
            history.push(`/users`);
        } else {
            history.push(`/users?page=${page}`);
        }
    };

    /**
     * Show the list of users in a table.
     * @returns {*}
     */
    showUsers() {
        const { users } = this.props;

        // Columns for the table
        const columns = [
            { title: 'First Name', dataIndex: 'firstname', key: 'name' },
            { title: 'Last Name', dataIndex: 'lastname', key: 'lastname' },
            { title: 'Avatar', dataIndex: 'avatar', key: 'avatar', align: 'center', render: (value) => { return <Avatar size={64} src={value} /> } },
            {
                title: 'Actions', dataIndex: '', key: 'actions', align: 'center', render: (value) => {
                    let { key } = value;

                    return (
                        <div className="table-btns">
                            <Button className="table-btn btn-view" value={key} onClick={() => this.showModal(key)} icon="eye">
                                View
                            </Button>
                            <Button className="table-btn btn-view" onClick={this.editUser} icon="edit">
                                Edit
                            </Button>
                            <Button className="table-btn btn-view" onClick={this.deleteUser} icon="delete">
                                Delete
                            </Button>
                        </div>
                    )
                },
            },
        ];

        // Data to show in the table
        const data = users.data.map(user => {
            return {
                key: user.id,
                firstname: user.first_name,
                lastname: user.last_name,
                avatar: user.avatar
            }
        });

        return (
            <div>
                <Table
                    className="table-users"
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                />

                <Pagination onChange={this.onPageChange} className="text-center" current={users.page} pageSize={users.per_page} total={users.total} />
            </div>
        );
    }

    render() {
        const { users } = this.props;
        const { visible, userId } = this.state;

        return (
            <div>
                { users.data.length > 0 ? this.showUsers() : <ListUsersEmpty /> }

                <Modal
                    visible={visible}
                    centered
                    onCancel={this.handleCancel}
                    footer={false}
                >
                    <ViewUser userId={userId} />
                </Modal>
            </div>
        );
    }
}

export default ListUsers;
