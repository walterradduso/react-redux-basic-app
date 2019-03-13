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
                // console.log('login user id: ', user.uid);
                // console.log('name: ', user.displayName);
                store.dispatch(login(user.uid));
            } else {
                // console.log('logout');
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
