import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import admin from "redux/reducer/admin"

const reducer = combineReducers({
    admin,
});

const store = createStore(
    reducer,
    composeWithDevTools( applyMiddleware(thunk))
);

export default store;