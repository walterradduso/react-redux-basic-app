import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDwxs7a7QUMnZc_i_6q7VCp1nSYSHy3KzQ",
    authDomain: "react-redux-firebase-wal.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-wal.firebaseio.com",
    projectId: "react-redux-firebase-wal",
    storageBucket: "react-redux-firebase-wal.appspot.com",
    messagingSenderId: "419841904947"
};

firebase.initializeApp(config);
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
    firebase,
    googleAuthProvider,
    facebookAuthProvider,
    twitterAuthProvider
};
