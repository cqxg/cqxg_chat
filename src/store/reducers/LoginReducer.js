import { LOGIN, RELOGIN } from "../actions/ActionTypes";

const loginReducer = () => {
    switch (action.type) {
        case LOGIN:
            return {

            };

        case RELOGIN:
            return {

            };

        default:
            return state;
    }
};

export { loginReducer };