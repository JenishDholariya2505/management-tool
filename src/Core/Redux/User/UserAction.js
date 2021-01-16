import { Axios } from '../AxiosLogic';
import { User_API } from '../AxiosBase';
export const userGet = () => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/listAll", type: "USER_GET", method: 'get', IP: User_API })
        )
    };
};
export const userRemove = (Token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/delete/" + Token, type: "USER_REMOVE", method: 'delete', IP: User_API })
        )
    };
};
export const userAdd = (User) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/create", data: User, type: "USER_ADD", method: 'POST', IP: User_API })
        )
    };
};
export const UserUpdate = (Update, Token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/update/" + Token, data: Update, type: "USER_UPDATE", method: 'put', IP: User_API })
        )
    };
};
export const UserFind = (Token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/findByToken/" + Token, type: "USER_FIND", method: 'get', IP: User_API })
        )
    };
};