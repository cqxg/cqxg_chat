import { SEND_MESSAGE } from "../actions/ActionTypes";

const mainReducer = () => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {

            };

        default:
            return state;
    }
};

export { mainReducer };