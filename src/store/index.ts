import { createStore, combineReducers, applyMiddleware } from "redux";
import { customers } from "./customers/reducer";
import { teetimes } from "./teetimes/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({ customers, teetimes });

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
