const initState = {
    group: [],
    loading: false,
    error: null,
};
export default (state = initState, action) => {
    switch (action.type) {
        case 'GET_GROUP_REQUEST':
            state = {
                group: [],
                loading: true,
            };
            break;
        case 'GET_GROUP_SUCCESS':
            state = {
                loading: false,
                group: action.payload,
            };
            break;
        case 'GET_GROUP_FAILURE':
            state = {
                loading: false,
                error: action.payload.error,
            };
            break;
        case 'GROUP_DELETE_REQUEST':
            state = {
                group: [],
                loading: true,
            };
            break;
        case 'GROUP_DELETE_SUCCESS':
            state = {
                loading: false,
                group: action.payload,
            };
            break;
    }
    return state;
};