import { combineReducers, createStore } from "redux";
import adminReducer from "./DataStore/AdminState/Admin";


const rootReducer = combineReducers({
  admin: adminReducer,
});

const store = createStore(rootReducer);



export default store;
