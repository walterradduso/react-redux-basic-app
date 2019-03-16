import { GET_USERS, NEXT_USERS, GET_USER, NEW_USER, UPDATE_USER } from "../types";
import axios from 'axios';
import config from '../config';

export const getUsers = () => {
    return (dispatch) => {
        axios.get(`${config.api.host}/users`).then( (result) => {
            dispatch({type: GET_USERS, payload: result.data})
        })
    }
};

export const nextUsers = (page) => {
    return (dispatch) => {
        axios.get(`${config.api.host}/users?page=${page}`).then( (result) => {
            dispatch({type: NEXT_USERS, payload: result.data})
        })
    }
};

export const getUser = (userId) => {
    return (dispatch) => {
        axios.get(`${config.api.host}/users/${userId}`).then( (result) => {
            dispatch({type: GET_USER, payload: result.data})
        })
    }
};

export const newUser = (user) => {
    const userData = {
        name: user.name,
        job: user.job
    };

    return (dispatch) => {
        axios.post(`${config.api.host}/users`, userData).then( (result) => {
            dispatch({type: NEW_USER, payload: result.data})
        })
    }
};

export const updateUser = (user, userId) => {
    const userData = {
        first_name: user.firstName,
        last_name: user.lastName
    };

    return (dispatch) => {
        axios.patch(`${config.api.host}/users/${userId}`, userData).then( (result) => {
            dispatch({type: UPDATE_USER, payload: result.data})
        })
    }
};
