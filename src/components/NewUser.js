import React, { Component } from 'react';
import SiderMenu from "./SiderMenu";
import Header from "./Header";

import { Layout } from 'antd';

const { Content } = Layout;

class NewUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSelected: ['2']
        }
    }

    render() {
        const { menuSelected } = this.state;

        return (
            <Layout className="users">
                <SiderMenu menuSelected={menuSelected} />

                <Layout>
                    <Header />

                    <Content className="users-new">
                        New User
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default NewUser;
