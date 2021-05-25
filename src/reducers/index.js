import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  artcleState: articleReducer,
});

export default rootReducer;
