import React from 'react';
import { connect } from 'react-redux';
import { firebaseLogout } from "../actions/auth";

const Dashboard = ({ logout }) => (
    <div className='container__list'>
        <h1>Dashboard</h1>

        <button onClick={logout}>Logout</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(firebaseLogout())
});

export default connect(undefined, mapDispatchToProps)(Dashboard);
