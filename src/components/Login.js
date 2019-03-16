import React from 'react';
import { connect } from 'react-redux';
import { googleLogin, facebookLogin, twitterLogin } from "../actions/auth";

import { Button, Col, Icon, Row } from 'antd';

const Login = ({ google, facebook, twitter }) => (
    <Row className="login">
        <Col className="login-panel">
            <h2>
                <Icon type="lock" /> Social Login <Icon type="unlock" />
            </h2>

            <Button className="login-btn btn-google" onClick={google} icon="google">
                Login with Google
            </Button>
            <Button className="login-btn btn-facebook" onClick={facebook}>
                <Icon type="facebook" theme="filled" /> Login with Facebook
            </Button>
            <Button className="login-btn btn-twitter" onClick={twitter} icon="twitter">
                Login with Twitter
            </Button>
        </Col>
    </Row>
);

const mapDispatchToProps = (dispatch) => ({
    google: () => dispatch(googleLogin()),
    facebook: () => dispatch(facebookLogin()),
    twitter: () => dispatch(twitterLogin()),
});

export default connect(undefined, mapDispatchToProps)(Login);
