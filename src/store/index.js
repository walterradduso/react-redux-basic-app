import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';
import thunk from 'redux-thunk';

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer,
            users: usersReducer
        }),
        applyMiddleware(thunk));
};
