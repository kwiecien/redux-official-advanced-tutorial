import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore} from "redux";
import {fetchPosts, fetchPostsIfNeeded, selectSubreddit} from "./actions/actions";
import rootReducer from "./reducers/reducers";

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )
);

store.dispatch(selectSubreddit('reactjs'));
store.dispatch(fetchPosts('reactjs')).then(() => console.log(store.getState()));
store
    .dispatch(fetchPostsIfNeeded('reactjs'))
    .then(() => console.log(store.getState()));
