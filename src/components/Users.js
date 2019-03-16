import React, { Component } from 'react';
import Header from './Header';
import SiderMenu from './SiderMenu';
import { connect } from 'react-redux';

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

    render() {
        const { menuSelected } = this.state;

        return (
            <Layout className="users">
                <SiderMenu menuSelected={menuSelected} />

                <Layout>
                    <Header />

                    <Content className="users-list">
                        List of Users
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default connect()(Users);
