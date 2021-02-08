import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./Reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootreducer,
    composeEnhancers(applyMiddleware(thunk))
);
window.store = store;
export default store;