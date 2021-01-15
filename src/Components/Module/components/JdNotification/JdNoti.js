import { notification, message } from 'antd'

export const JDNotification = ({ mes }) => {
    notification.error({
        message: mes
    });
}

export const JdSuccess = ({text}) => {
    message.success(text);
};