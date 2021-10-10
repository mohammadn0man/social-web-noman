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

        case PostActionType.ADD_POST : 
            return state;
        default : 
            return state;
    }
}

export default postReducer;