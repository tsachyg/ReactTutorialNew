import * as Redux from "redux";
import rootReducer from "reducers/index";
import forbiddenPlayerMoveMiddleware from "middleware/index";

const storeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] || Redux.compose;

const store = Redux.createStore(rootReducer, storeEnhancers(Redux.applyMiddleware(forbiddenPlayerMoveMiddleware)));
export default store;