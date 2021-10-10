import { PostActionType } from "../actions/PostAction";

const allPosts = {
    isAllLoaded: false,
    posts: [],
}

const postReducer = (state = allPosts, action) => {
    switch(action.type) {
        case PostActionType.GET_POSTS : 
            return {
                ...state,
                isAllLoaded: true,
                posts: action.payload,
            }
        default : 
            return state;
    }
}

export default postReducer;