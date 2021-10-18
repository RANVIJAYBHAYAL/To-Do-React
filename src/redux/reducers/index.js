import { combineReducers } from "redux";

import todoReducer from "./todoReducer";

const rootReducer=combineReducers({
    app:todoReducer,
})
export default rootReducer;