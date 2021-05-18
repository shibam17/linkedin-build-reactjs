import {combineReducers} from "redux";
import userReducer from './userReducer';

const rootReducer = combineReducer({
    userState: userReducer;
})