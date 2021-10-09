import axios from "axios";

import { SET_POSTS, SET_POSTS_FAIL, POSTS_URL } from "../constants";

export const actionSetPosts = (data) => ({
    type: SET_POSTS,
    payload: data
})

export const actionSetPostsFail = () => ({
    type: SET_POSTS_FAIL
})

export const getPosts = () => {
    return (dispatch) => {
        axios.get(POSTS_URL)
            .then((response) => dispatch(actionSetPosts(response.data)))
            .catch(() => dispatch(actionSetPostsFail()));
    };
};

//dispatch(actionSetPosts(response.data.posts))