import { combineReducer } from "redux";
import userReducer from "./User/userReducer";

export default combineReducer({
  users: userReducer,
});
