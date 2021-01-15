import { combineReducers } from "redux";
import blogsReducer from './Card/CardReducer'
import groupReducers from './UserGroup/UserGroupReducer'
import authReducer from './RestPassword/RestReducer'
import userBEReducer from './User/UserReducer'
import group from './Group/GroupReducer'

const rootReducer = combineReducers({
  blog: blogsReducer,
  group: groupReducers,
  auth: authReducer,
  user_BE: userBEReducer,
  group_BE: group,
});
export default rootReducer;