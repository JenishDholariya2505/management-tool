import { JDNotification, JdSuccess } from '../../../Components/Module/components/Index'
const initState = {
    user: null,
    message: null,
    authentication: false,
    Lognot: false,
    OTPSend: false,
    OTPVerify: false,
    SETNewPass: false,
};
export default (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return (
                state = {
                    Lognot: false,
                    authentication: true,
                }
            )
        case "LOGIN_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                window.location.assign('/ZeronSec/Users'),
                localStorage.setItem('Token', action.payload.data.jwtToken.token),
                state = {
                    Lognot: false,
                    authentication: false,
                    user: action.payload,
                }
            )
        case "LOGIN_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    Lognot: true,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "LOGIN_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    Lognot: true,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "OTP_SEND_REQUEST":
            return (
                state = {
                    OTPSend: false,
                    authentication: true,
                    message: action.payload,
                }
            )
        case "OTP_SEND_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                window.location.assign('/Auth/OTP'),
                state = {
                    OTPSend: false,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "OTP_SEND_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    OTPSend: true,
                    notification: true,
                    message: action.payload,
                }
            )
        case "OTP_SEND_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    OTPSend: true,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "OTP_VERIFY_REQUEST":
            return (
                state = {
                    OTPVerify: false,
                    authentication: true,
                    message: action.payload,
                }
            )
        case "OTP_VERIFY_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                localStorage.setItem('Access', JSON.stringify(action.payload.username)),
                window.location.assign('/Auth/NewPassword'),
                state = {
                    OTPVerify: false,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "OTP_VERIFY_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    OTPVerify: true,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "OTP_VERIFY_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    OTPVerify: true,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "SET_NEW_PASS_REQUEST":
            return (
                state = {
                    SETNewPass: false,
                    authentication: true,
                    message: action.payload,
                }
            )
        case "SET_NEW_PASS_SUCCESS":
            JdSuccess({ text: action.payload.message })
            return (
                localStorage.clear(),
                window.location.assign('/Auth/Login'),
                state = {
                    SETNewPass: false,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "SET_NEW_PASS_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    SETNewPass: true,
                    authentication: false,
                    message: action.payload,
                }
            )
        case "SET_NEW_PASS_404_ERROR_FAIL":
            JDNotification({ mes: action.payload })
            return (
                state = {
                    SETNewPass: true,
                    authentication: false,
                    message: action.payload,
                }
            )
    }
    return state;
};