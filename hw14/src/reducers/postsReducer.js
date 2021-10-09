import { SET_POSTS, SET_POSTS_FAIL } from "../constants";

const defaultValues = {
    posts: []
}


export const postsReducer = (state = defaultValues, action) => {
    switch(action.type) {
        case SET_POSTS: {
            return {
                posts: action.payload
            };
        }
        case SET_POSTS_FAIL : {
            return state;
        }
        default: {
            return state;
        }
    }
};