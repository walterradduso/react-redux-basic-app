import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';

export default () => {
    return createStore(
        combineReducers({
            auth: authReducer
        }),
        applyMiddleware(thunk));
};
