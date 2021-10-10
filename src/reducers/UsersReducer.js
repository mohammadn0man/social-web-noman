import {UsersActionType} from "../actions/UsersAction";

const allUserState = {
    isAllLoaded: false,
    users: [],
}

const userReducer = (state = allUserState, action) => {
    switch(action.type) {
        case UsersActionType.GET_ALL_USERS : 
            return {
                ...state,
                isAllLoaded: true,
                users : action.payload,
            }
        case UsersActionType.FOLLOW_USER:
            return state;
        default :
            return state;
    }
}

export default userReducer;