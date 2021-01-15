import { Axios } from '../AxiosLogic';
import { Group } from '../AxiosBase';

export const groupGet = () => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/getAll", type: "GROUP_GET", method: 'get', IP: Group })
        )
    };
};
export const createGroup = (group) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/add", data: group, type: "GROUP_ADD", method: 'post', IP: Group })
        )
    };
};
export const deleteGroup = (token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/delete/" + token, type: "GROUP_REMOVE", method: 'delete', IP: Group })
        )
    };
};
export const findGroup = (token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/findByToken/" + token, type: "GROUP_FIND", method: 'get', IP: Group })
        )
    };
};
export const updateGroup = (token) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "group/update" + token, type: "GROUP_UPDATE", method: 'put', IP: Group })
        )
    };
};