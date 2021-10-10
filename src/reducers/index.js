import authReducer from './AuthReducer';
import { combineReducers } from 'redux';
import userReducer from './UsersReducer';

export default combineReducers({
    authState: authReducer,
    allUserState: userReducer,
});