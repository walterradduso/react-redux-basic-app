import React, { Component } from 'react';
import Header from '../Header';
import ListUsers from './ListUsers';
import Loading from '../Loading';
import SiderMenu from '../SiderMenu';
import { connect } from 'react-redux';
import { getUsers, nextUsers } from "../../actions/users";

import { Layout } from 'antd';

const { Content } = Layout;

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
            menuSelected: ['1']
        }
    }

    componentDidMount() {
        let url = this.props.location.search;
        let page = url.split("=");

        if (url) {
            this.props.nextUsers(page[1]);
        } else {
            this.props.getUsers();
        }
    }

    render() {
        const { menuSelected } = this.state;
        const { users } = this.props;

        return (
            <Layout className="users">
                <SiderMenu menuSelected={menuSelected} />

                <Layout>
                    <Header />

                    <Content className="users-list">
                        {users.length === 0 ? <Loading/> : <ListUsers users={users} />}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

export default connect(mapStateToProps, { getUsers, nextUsers })(Users);
