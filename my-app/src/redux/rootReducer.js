import { combineReducers } from "@reduxjs/toolkit";
import shopReducer from "./shopping/shopping-reducer";
const rootReducer = combineReducers({ shop: shopReducer });

export default rootReducer;
