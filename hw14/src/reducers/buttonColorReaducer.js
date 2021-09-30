import { COLOR } from "../constants";

export const buttonColorReducer = (state = '',action) => {
    switch(action.type) {
        case COLOR: {
            return {
                color: action.color
            };
        }
        default: {
            return state;
        }
    }
};