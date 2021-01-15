import { Axios } from '../AxiosLogic';
import { Auth } from '../AxiosBase';

export const LoginAPI = (user) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "login", data: user, type: "LOGIN", method: 'post', IP: Auth })
        )
    };
};
export const OtpSend = (email) => {
    const form = new FormData();
    form.append('email', email);
    return async (dispatch) => {
        dispatch(
            Axios({ url: "forgot-password", data: form, type: "OTP_SEND", method: 'post', IP: Auth })
        )
    };
};
export const OtpVerify = (otp) => {
    const form = new FormData();
    form.append('otp', otp);
    return async (dispatch) => {
        dispatch(
            Axios({ url: "verify-otp", data: form, type: "OTP_VERIFY", method: 'post', IP: Auth })
        )
    };
};
export const NewPassword = (NewPass) => {
    return async (dispatch) => {
        dispatch(
            Axios({ url: "change-password", data: NewPass, type: "SET_NEW_PASS", method: 'post', IP: Auth })
        )
    };
};
