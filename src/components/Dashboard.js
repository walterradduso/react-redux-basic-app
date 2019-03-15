import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseLogout } from "../actions/auth";

class Dashboard extends Component {
    render() {
        const { logout, auth } = this.props;

        return (
            <div className='container__list'>
                <h1>Dashboard</h1>

                <button onClick={logout}>Logout</button>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
