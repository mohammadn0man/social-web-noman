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
        default :
            return state;
    }
}

export default userReducer;