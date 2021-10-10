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

const AddPost = (post, history) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/post/add", post);
            console.log("follow user response : ", res.data);
            dispatch({ type: PostActionType.ADD_POST, payload: res });
            history.push("/home");
        } catch (error) {
            console.log("add post errror : ". error);
        }
    }
}


export {
    PostActionType,
    GetPosts,
    AddPost,
}