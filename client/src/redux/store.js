import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { usersReducer } from "./reducers/userReducer";
import { alertsReducer } from "./reducers/alertsReducer";

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  alertsReducer: alertsReducer,
});

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
