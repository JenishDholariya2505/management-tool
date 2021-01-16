import { JDNotification, JdSuccess } from '../../../Components/Module/components/Index'

const initState = {
    group: [],
    getData: false,
    status: false,
    Find: undefined,
    User: undefined
};

export default (state = initState, action) => {
    console.log(action.type, 'action')
    switch (action.type) {
        case "GROUP_GET_REQUEST":
            return (
                state = {
                    getData: false,
                    group: [],
                    status: true,
                }
            )
        case "GROUP_GET_SUCCESS":
            return (
                state = {
                    getData: true,
                    group: action.payload.data,
                    status: false,
                }
            )
        case "GROUP_GET_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_GET_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_ADD_REQUEST":
            return (
                state = {
                    ...state,
                    getData: false,
                    status: true,
                }
            )
        case "GROUP_ADD_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                state = {
                    ...state,
                    group: [...state.group, action.payload.data],
                    getData: true,
                    status: false,
                }
            )
        case "GROUP_ADD_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_ADD_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_REMOVE_REQUEST":
            return (
                state = {
                    ...state,
                    getData: false,
                    status: true,
                }
            )
        case "GROUP_REMOVE_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                state = {
                    getData: true,
                    group: state.group.filter(d => d.token !== action.payload.data),
                    status: false,
                }
            )
        case "GROUP_REMOVE_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_REMOVE_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_FIND_REQUEST":
            return (
                state = {
                    ...state,
                    getData: false,
                    status: true,
                }
            )
        case "GROUP_FIND_SUCCESS":
            return (
                state = {
                    ...state,
                    Find: action.payload.data,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_FIND_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_FIND_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_UPDATE_REQUEST":
            return (
                state = {
                    ...state,
                    Noti: false,
                    getData: false,
                    status: true,
                }
            )
        case "GROUP_UPDATE_SUCCESS":
            JdSuccess({ text: action.payload.message })
            state.group = state.group.filter(d => d.token !== action.payload.data.groupToken);
            return (
                state = {
                    ...state,
                    Noti: false,
                    group: [...state.group, action.payload.data],
                    getData: true,
                    status: false,
                }
            )
        case "GROUP_UPDATE_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_UPDATE_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_GET_USER_REQUEST":
            return (
                state = {
                    ...state,
                    Noti: false,
                    getData: false,
                    status: true,
                }
            )
        case "GROUP_GET_USER_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                state = {
                    ...state,
                    Noti: false,
                    User: action.payload.data,
                    getData: true,
                    status: false,
                }
            )
        case "GROUP_GET_USER_FAIL":
            JDNotification({ mes: action.payload.message })
            return (
                state = {
                    ...state,
                    getData: false,
                    status: false,
                }
            )
        case "GROUP_GET_USER_ERROR_FAIL":
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