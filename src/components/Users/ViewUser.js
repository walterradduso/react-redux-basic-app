import React, { Component } from 'react';
import Loading from "../Loading";

import {connect} from "react-redux";
import {getUser } from "../../actions/users";
import { Card } from 'antd';

const { Meta } = Card;

class ViewUser extends Component {
    constructor(props) {
        super(props);

        this.getUserFromServer.bind(this);
    }

    componentDidMount() {
        this.getUserFromServer();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userId !== prevProps.userId) {
            this.getUserFromServer();
        }
    }

    /**
     * Get user from API by UserId.
     */
    getUserFromServer() {
        const { userId } = this.props;

        if (userId) {
            this.props.getUser(userId);
        }
    }

    render() {
        const { getUser } = this.props.users;
        let title = "";

        if (getUser) {
            title = `${getUser.data.first_name} ${getUser.data.last_name}`;
        }

        return (
            <div className="users-view">
                { getUser ?
                <Card className="user-view" hoverable cover={<img alt="example" src={getUser.data.avatar} />}>
                    <Meta className="text-center" title={title} />
                </Card> : <Loading /> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

export default connect(mapStateToProps, { getUser })(ViewUser);
