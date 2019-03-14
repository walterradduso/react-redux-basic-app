import React, { Component } from 'react';
import './App.css';

import getAppStore from './store';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routes/AppRouter';
import { firebase } from './firebase';
import { login, logout } from './actions/auth';

const store = getAppStore();

class App extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                let user = firebase.auth().currentUser;

                let userData = {
                    name: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                    emailVerified: user.emailVerified,
                    uid: user.uid,
                };

                store.dispatch(login(user.uid, userData));
            } else {
                store.dispatch(logout());
                history.push('/');
            }
        });
    }

    render() {
        return (
            <Provider store={store}>
                <AppRouter/>
            </Provider>
        );
    }
}

export default App;
