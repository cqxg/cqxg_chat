import { LOGIN, RELOGIN } from '../actions/ActionTypes';

const initialState = {
    id: '',
    from: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                id: action.id,
                from: action.from,
            };

        // case RELOGIN:
        //     return {

        //     };

        default:
            return state;
    }
};

export { loginReducer };