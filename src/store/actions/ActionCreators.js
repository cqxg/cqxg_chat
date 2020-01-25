import { LOGIN, SEND_MESSAGE } from "./ActionTypes";

const login = (from) => ({ type: LOGIN, from });
const sendMessage = () => ({ type: SEND_MESSAGE });

export { login, sendMessage }