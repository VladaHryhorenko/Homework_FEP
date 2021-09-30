import { combineReducers } from 'redux';

import { buttonColorReducer} from './buttonColorReaducer';

export const rootReducer = combineReducers({
    b: buttonColorReducer,
})