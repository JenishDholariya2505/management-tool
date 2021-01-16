import { Axios } from '../AxiosLogic';
import { Group_API } from '../AxiosBase';

export const groupGet = () => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/getAll", type: "GROUP_GET", method: 'get', IP: Group_API })
        )
    };
};
export const createGroup = (group) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/add", data: group, type: "GROUP_ADD", method: 'post', IP: Group_API })
        )
    };
};
export const deleteGroup = (token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/delete/" + token, type: "GROUP_REMOVE", method: 'delete', IP: Group_API })
        )
    };
};
export const findGroup = (token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/findByToken/" + token, type: "GROUP_FIND", method: 'get', IP: Group_API })
        )
    };
};
export const updateGroup = (token, Data) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/update/" + token, data: Data, type: "GROUP_UPDATE", method: 'put', IP: Group_API })
        )
    };
};
export const getUsers = () => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/getUsers", type: "GROUP_GET_USER", method: 'get', IP: Group_API })
        )
    };
};