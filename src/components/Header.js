import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseLogout } from "../actions/auth";

import { Avatar, Button, Dropdown, Icon, Menu } from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);

        this.menu.bind(this);
    }

    /**
     * Content of the dropdown user menu.
     * @returns JSX
     */
    menu() {
        const { logout } = this.props;

        return (
            <Menu>
                <Menu.Item onClick={logout} className="header-menu-item">
                    <Icon type="logout" /> Logout
                </Menu.Item>
            </Menu>
        );
    }

    render() {
        const { auth } = this.props;

        return (
            <header className="ant-layout-header header-page">
                <div className="header-user">
                    <div className="header-user-data">
                        <span>
                            { auth.user.name }
                        </span>
                        <span className="user-email">
                            { auth.user.email }
                        </span>
                    </div>

                    <Dropdown overlay={this.menu()}>
                        <Button className="header-logout-btn">
                            <Avatar className="header-avatar" src={ auth.user.photoUrl } />
                        </Button>
                    </Dropdown>
                </div>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(firebaseLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
