import { GET_USERS, NEXT_USERS, GET_USER } from "../types";
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
