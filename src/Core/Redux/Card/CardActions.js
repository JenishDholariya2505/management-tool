import axios from "axios";
import store from "../Store";

const postConstant = {
    GET_POST_REQUEST: "GET_POST_REQUEST",
    GET_POST_SUCCESS: "GET_POST_SUCCESS",
    GET_POST_FAILURE: "GET_POST_FAILURE",
    POST_DELETE_REQUEST: "POST_DELETE_REQUEST",
    POST_DELETE_SUCCESS: "POST_DELETE_SUCCESS",
    POST_DELETE_FAILURE: "POST_DELETE_FAILURE",
};


export const getBlogs = () => {
    return async (dispatch) => {
        dispatch({
            type: postConstant.GET_POST_REQUEST,
        });
        const res = await axios.get("/Db.json");
        if (res.status === 200) {
            dispatch({
                type: postConstant.GET_POST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: postConstant.GET_POST_FAILURE,
                payload: 'NOT GET DATA USER',
            });
        }
    };
};

export const deleteBlogs = (id) => {
    return async (dispatch) => {
        const Blogs = store.getState().blog.Post
        const DeletePost = Blogs.filter((b) => b.token !== id)
        dispatch({
            type: postConstant.POST_DELETE_REQUEST,
        });
        dispatch({
            type: postConstant.POST_DELETE_SUCCESS,
            payload: DeletePost,
        });
    };
};