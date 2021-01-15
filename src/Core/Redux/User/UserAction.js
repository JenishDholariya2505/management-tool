import { Axios } from '../AxiosLogic';
import { User } from '../AxiosBase';
export const userGet = () => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/listAll", type: "USER_GET", method: 'get', IP: User })
        )
    };
};
export const userRemove = (Token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/delete/" + Token, type: "USER_REMOVE", method: 'delete', IP: User })
        )
    };
};
export const userAdd = (User) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/create", data: User, type: "USER_ADD", method: 'POST', IP: User })
        )
    };
};
export const UserUpdate = (Update, Token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/update/" + Token, data: Update, type: "USER_UPDATE", method: 'put', IP: User })
        )
    };
};
export const UserFind = (Token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "user/findByToken/" + Token, type: "USER_FIND", method: 'get', IP: User })
        )
    };
};