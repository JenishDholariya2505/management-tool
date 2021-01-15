import axios from "axios";
import store from "../Store";

const userConstant = {
    GET_GROUP_REQUEST: "GET_GROUP_REQUEST",
    GET_GROUP_SUCCESS: "GET_GROUP_SUCCESS",
    GET_GROUP_FAILURE: "GET_GROUP_FAILURE",
    GROUP_DELETE_REQUEST: "GROUP_DELETE_REQUEST",
    GROUP_DELETE_SUCCESS: "GROUP_DELETE_SUCCESS",
};

export const getGroup = () => {
    return async (dispatch) => {
        dispatch({
            type: userConstant.GET_GROUP_REQUEST,
        });
        const res = await axios.get("/ListGroup.json");
        if (res.status === 200) {
            dispatch({
                type: userConstant.GET_GROUP_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: userConstant.GET_GROUP_FAILURE,
                payload: 'NOT GET DATA GROUP',
            });
        }
    };
};

export const deleteGroup = (id) => {
    return async (dispatch) => {
        const Gorup = store.getState().group.group
        const Deletegroup = Gorup.filter((b) => b.token !== id)
        dispatch({
            type: userConstant.GROUP_DELETE_REQUEST,
        });
        dispatch({
            type: userConstant.GROUP_DELETE_SUCCESS,
            payload: Deletegroup,
        });
    };
};