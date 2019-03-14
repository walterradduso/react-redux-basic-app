import {
    firebase,
    googleAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
} from '../firebase';

import {
    LOGIN,
    LOGOUT
} from "../types";

export const login = (uid, user) => ({
    type: LOGIN,
    uid,
    user
});

export const logout = () => ({
    type: LOGOUT
});

export const googleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const facebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

export const twitterLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(twitterAuthProvider);
    };
};

export const firebaseLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
};
