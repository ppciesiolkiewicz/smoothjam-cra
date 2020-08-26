import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];


export default createStore(
    rootReducer,
    {},
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);
