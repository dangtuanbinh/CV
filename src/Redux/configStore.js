import {combineReducers, createStore} from 'redux';
import project from "./ProjectReducer"

const reducer = combineReducers({
    project,
})

const store = createStore(
    reducer,
);

export default store;