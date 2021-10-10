import axios from "axios";

const PostActionType = {
    GET_POSTS : "GET_POSTS",
    ADD_POST : "ADD_POST"
}

const GetPosts = (userName) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/post/get/${userName}`);
            dispatch({ type: PostActionType.GET_POSTS, payload: res.data});
        } catch (error) {
            console.log("error in loading post ", error);
        }
    }
}


export {
    PostActionType,
    GetPosts
}