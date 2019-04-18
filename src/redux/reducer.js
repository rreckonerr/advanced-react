import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import authReducer, { moduleName as authModule } from "../ducks/auth";
// import { routerReducer as router } from "react-router-redux";

export default combineReducers({ form, [authModule]: authReducer });
