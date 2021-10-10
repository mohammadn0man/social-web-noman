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

export {
    UsersActionType,
    GetAllUsers
}