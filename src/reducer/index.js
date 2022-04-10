import todoReducer from './todoReducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers ({
    todoReducer
})

export default rootReducer;