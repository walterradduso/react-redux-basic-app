import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({isAuthenticated, component: Component, ...otherProps}) => (
    <Route {...otherProps} component={(props) => {
        return (
            isAuthenticated ? <Component {...props} /> : <div>Loading...</div>
        );
    }} />
);

const mapStateToProps = ({ auth }) => ({
    isAuthenticated: !!auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
