import { GET_USERS, NEXT_USERS } from "../types";

const defaultState = [];

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_USERS:
        case NEXT_USERS:
            return action.payload;
        default:
            return state;
    }
};
