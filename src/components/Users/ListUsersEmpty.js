import React, { Component } from 'react';
import Link from "react-router-dom/es/Link";

import { Icon } from 'antd';

class ListUsersEmpty extends Component {
    render() {
        return (
            <div className="text-center">
                This page doesn't exist.
                <p>
                    <Link to="/users">
                        <Icon type="left-circle" /> Go back
                    </Link>
                </p>
            </div>
        );
    }
}

export default ListUsersEmpty;
