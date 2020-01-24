import { LOGIN, RELOGIN, SEND_MESSAGE } from "./ActionTypes";

const login = (from) => ({ type: LOGIN, from });
const relogin = () => ({ type: RELOGIN });
const sendMessage = () => ({ type: SEND_MESSAGE });

export { login, relogin, sendMessage }