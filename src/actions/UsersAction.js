import axios from "axios";

const UsersActionType = {
    GET_ALL_USERS : "GET_ALL_USERS",
    FOLLOW_USER : "FOLLOW_USER"
}

const GetAllUsers = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/user/all`);
            dispatch({ type : UsersActionType.GET_ALL_USERS, payload: res.data});
        } catch (error) {
            console.log("error in get all users",error);
        }
    }
}

const FollowUser = (data, history) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("follower/add", data);
            console.log("follow user response : ", res.data);
            dispatch({ type: UsersActionType.FOLLOW_USER, payload: data});
            history.push("/home");
        } catch (err) {
            console.log("user follow error;  " , err);
        }
    }
}

export {
    UsersActionType,
    GetAllUsers,
    FollowUser
}