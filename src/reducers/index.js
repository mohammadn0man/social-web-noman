import authReducer from './AuthReducer';
import { combineReducers } from 'redux';
import userReducer from './UsersReducer';
import postReducer from './PostReducer';

export default combineReducers({
    authState: authReducer,
    allUserState: userReducer,
    allPosts: postReducer,
});