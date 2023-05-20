export { 
    getUserAuthData, getUserInited 
} from "./model/selectors/getUserData";

export {
    userReducer, userActions
} from "./model/slice/userSlice";

export type {
    UserSchema,
    User,
} from './model/types/user';
