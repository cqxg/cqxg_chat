import { LOGIN } from '../actions/ActionTypes';

const initialState = {
    from: '',
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                from: action.from,
            };

        default:
            return state;
    }
};

export { loginReducer };