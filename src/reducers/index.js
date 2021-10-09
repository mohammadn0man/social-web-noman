import authReducer from './AuthReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    authState: authReducer,
});