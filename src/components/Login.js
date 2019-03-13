import React from 'react';
import { connect } from 'react-redux';
import { googleLogin, facebookLogin, twitterLogin } from "../actions/auth";

const Login = ({ google, facebook, twitter }) => (
    <div>
        <h1>Login</h1>

        <button onClick={google}>Login with Google</button>
        <button onClick={facebook}>Login with Facebook</button>
        <button onClick={twitter}>Login with Twitter</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    google: () => dispatch(googleLogin()),
    facebook: () => dispatch(facebookLogin()),
    twitter: () => dispatch(twitterLogin()),
});

export default connect(undefined, mapDispatchToProps)(Login);
