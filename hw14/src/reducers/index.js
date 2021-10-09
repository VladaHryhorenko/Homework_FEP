import { combineReducers } from 'redux';

import { buttonColorReducer} from './buttonColorReaducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
    b: buttonColorReducer,
    p: postsReducer,
})