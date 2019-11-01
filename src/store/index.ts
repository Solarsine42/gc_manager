import { createStore, combineReducers, applyMiddleware } from "redux";
import carsReducer from "./cars/reducer";
import locationsReducer from "./locations/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  customers: customersReducer,
  teetimes: teetimesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
