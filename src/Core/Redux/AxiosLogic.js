export const Axios = (ActionP) => {
    return async (dispatch) => {
        dispatch({ type: ActionP.type + '_REQUEST' });
        try {
            let res = await ActionP.IP({
                method: ActionP.method,
                url: ActionP.url,
                data: ActionP.data
            })
            if (res.data.status) {
                dispatch({
                    type: ActionP.type + '_SUCCESS',
                    payload: res.data
                })
            } else {
                dispatch({
                    type: ActionP.type + '_FAIL',
                    payload: res.data.message
                })
            }
        } catch (error) {
            dispatch({
                type: ActionP.type + '_ERROR_FAIL',
                payload: error.response !== undefined ? error.response.data.message : 'Client Not Connecting Server'
            })
        };
    }
}