import { combineReducers, createStore } from "redux";
import adminReducer from "./DataStore/AdminState/Admin";
import userReducer from "./DataStore/MemberState/MemberState";

const rootReducer = combineReducers({
  admin: adminReducer,
  member:userReducer
});

const store = createStore(rootReducer);



export default store;
