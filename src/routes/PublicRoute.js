import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({isAuthenticated, component: Component, ...otherProps}) => (
    <Route {...otherProps} component={(props) => {
        return (
            isAuthenticated ? <Redirect to='/users' /> : <Component {...props} />
        );
    }} />
);

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: !!auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
