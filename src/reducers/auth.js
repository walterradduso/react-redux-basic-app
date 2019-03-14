import {
    LOGIN,
    LOGOUT
} from "../types";

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN:
            let { uid, user } = action;

            return {
                uid,
                user
            };
        case LOGOUT:
            return {};
        default:
            return state;
    }
};
