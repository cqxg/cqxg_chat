import { createStore, combineReducers } from 'redux';

import { loginReducer } from './reducers/LoginReducer';
// import { mainReducer } from './reducers/MainReducer';

const reducers = combineReducers({
    loginPage: loginReducer,
    // mainPage: mainReducer,
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;