import { GET_USERS, NEXT_USERS, GET_USER } from "../types";

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS:
        case NEXT_USERS:
            return action.payload;
        case GET_USER:
            return { ...state, getUser: action.payload };
        default:
            return state;
    }
};
