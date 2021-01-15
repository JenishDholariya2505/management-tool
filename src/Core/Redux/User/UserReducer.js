import { JDNotification, JdSuccess } from '../../../Components/Module/components/Index'
const initState = {
    user: [],
    getData: false,
    status: false,
    Find: undefined,
};
export default (state = initState, action) => {
    switch (action.type) {
        case "USER_GET_REQUEST":
            return (
                state = {
                    getData: false,
                    user: [],
                    status: true,
                }
            )
        case "USER_GET_SUCCESS":
            return (
                state = {
                    getData: true,
                    user: action.payload.data,
                    status: false,
                }
            )
        case "USER_GET_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    getData: false,
                    status: false,
                }
            )
        case "USER_GET_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    getData: false,
                    status: false,
                }
            )
        case "USER_REMOVE_REQUEST":
            return (
                state = {
                    ...state,
                    getData: false,
                    status: true,
                }
            )
        case "USER_REMOVE_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                state = {
                    getData: true,
                    user: state.user.filter(d => d.token !== action.payload.Data),
                    status: false,
                }
            )
        case "USER_REMOVE_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "USER_REMOVE_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "USER_ADD_REQUEST":
            return (
                state = {
                    ...state,
                    getData: false,
                    status: true,
                }
            )
        case "USER_ADD_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                state = {
                    ...state,
                    user: [...state.user, action.payload.data],
                    getData: true,
                    status: false,
                }
            )
        case "USER_ADD_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "USER_ADD_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "USER_UPDATE_REQUEST":
            return (
                state = {
                    ...state,
                    Noti: false,
                    getData: false,
                    status: true,
                }
            )
        case "USER_UPDATE_SUCCESS":
            JdSuccess({ text: action.payload.message })
            state.user = state.user.filter(d => d.token !== action.payload.data.token);
            return (
                state = {
                    ...state,
                    Noti: false,
                    user: [...state.user, action.payload.data],
                    getData: true,
                    status: false,
                }
            )
        case "USER_UPDATE_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "USER_UPDATE_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "USER_FIND_REQUEST":
            return (
                state = {
                    ...state,
                    getData: false,
                    status: true,
                }
            )
        case "USER_FIND_SUCCESS":
            return (
                state = {
                    ...state,
                    Find: action.payload.data[0],
                    getData: false,
                    status: false,
                }
            )
        case "USER_FIND_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "USER_FIND_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
    }
    return state;
};