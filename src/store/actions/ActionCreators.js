import { LOGIN, RELOGIN, SEND_MESSAGE } from "./ActionTypes";

const login = () => ({ type: LOGIN });
const relogin = () => ({ type: RELOGIN });
const sendMessage = () => ({ type: SEND_MESSAGE });

export { login, relogin, sendMessage }