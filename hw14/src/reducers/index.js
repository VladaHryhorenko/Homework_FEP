import { combineReducers } from 'redux';

import { buttonReducer } from './counter';

export const rootReducer = combineReducers({
    b: buttonReducer,
})