import styled from 'styled-components';
export const TaskManageWrapper = styled.div`
.Box{
    border-bottom: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
    padding: 0px 10px 10px;
    .Closebtn{
        background: ${({ theme }) => theme.Meeting.Closebtn} !important;
        border: 1px solid ${({ theme }) => theme.Meeting.CloseBorder} !important;
        color: ${({ theme }) => theme.Meeting.CardTitle}85 !important;
    }
    .ant-btn{
        background-color: ${({ theme }) => theme.Page.Users.ButtonBG};
        color: ${({ theme }) => theme.Page.Users.BtnText};
        border: none;
        cursor: pointer;
        font-family: Roboto-Regular;
        margin: 0px 5px;
    }
    .ant-descriptions-header {
        margin-bottom: 0px;
        .ant-descriptions-title{
            font-family: Roboto-Light;
            color: ${({ theme }) => theme.Page.Users.Tital};
            flex: none;
            line-height: 32px;
        }
    }
}
`;
export const NewTaskWrapper = styled.div`
height: calc(100vh - 143px);
padding: 0px 10px;
overflow: auto;
@media only screen and (max-width: 950px) {
    .Labalset{
        margin-left: 0px !important;
    }
    .Caont{
        display: grid !important;
        .Content{
            width: calc(100vw - 150px) !important;
            .FormC{
                padding: 0px 28px 0px 28px;
            }
        }
    }
  }
@media only screen and (max-width: 1185px) {
     .Labalset{
         margin-left: 25px;
     }
  }
    .Caont{
        display: flex;
    }
    .anticon, .anticon-swap-right{
        color: ${({ theme }) => theme.TaskManagement.Tital}bf;
    }
    .ant-form-item-explain.ant-form-item-explain-error {
        color: #ff4d4f;
        font-size: 12px;
    }
    .ant-form-item{
        margin-bottom: 5px !important;
    }
    .ant-input-number:not([disabled]):hover,.ant-picker:not([disabled]):hover {
        background-color: transparent;
    }
    .BotCont, .Content{
        margin: 10px 15px;
        height: 255px;
        border-radius: 5px;
        padding: 10px;
        border: 1px solid ${({ theme }) => theme.TaskManagement.Border}66;
        min-height: 100px !important;
        .Datepiker{
            padding: 0px 0px 0px 20px;
            margin-bottom: 10px;
        }
        .ant-col, .ant-form-item-control{
            height: 53px;
        }
        .Author{
            color: ${({ theme }) => theme.TaskManagement.Tital}bf;
            background-color: ${({ theme }) => theme.TaskManagement.TextBG};
            font-size: 14px;
            font-family: 'Roboto-Bold';
            letter-spacing: 1px;
            opacity: 0.75;
            position: relative;
        }
        .Tital{
            color: ${({ theme }) => theme.TaskManagement.Tital}bf;
            background-color: ${({ theme }) => theme.TaskManagement.TextBG};
            font-size: 14px;
            font-family: 'Roboto-Bold';
            letter-spacing: 1px;
            position: relative;
            margin: 0px 20px;
            padding: 0px 10px;
            top: -20px;
        }
        .SelectBTN{
            background-color: ${({ theme }) => theme.TaskManagement.UploadBTN};
            color: ${({ theme }) => theme.TaskManagement.Tital}bf;
            border: none;
            border-radius: 5px;
        }
        .FormC{
            padding: 0px 28px 0px 0px;
        }
        .ant-form-item-label{
            width: 130px !important;
            margin-right: 5px;
        }
        .Labalset > .ant-form-item-label{
            width: 70px !important;
        }
        label, .Datepiker, .TextStyle{
            font-family: 'Roboto-Regular';
            font-size: 12px;
            color: ${({ theme }) => theme.TaskManagement.Tital}bf;
        }
        .ant-picker{
            border: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
            background-color: transparent;
        }
        .ant-input-number-handler-down {
            border-top: 1px solid ${({ theme }) => theme.Modal.inputborder} !important;
        }
        .ant-input-number-handler-wrap {
            background-color: ${({ theme }) => theme.Modal.InputBG} !important;
            border-left: 1px solid ${({ theme }) => theme.Modal.inputborder} !important;
        }
        .ant-input-number {
            color: ${({ theme }) => theme.Signin.Text}65 !important;
            background-color: ${({ theme }) => theme.TaskManagement.InputNumber} !important;
            // border: 1px solid ${({ theme }) => theme.TaskManagement.inputborder} !important;
        }
        .ant-picker-input > input, .ant-picker{
            color: ${({ theme }) => theme.TaskManagement.Tital};
        }
        .ant-input-number-input-wrap > input{
            border: 0 !important;
        }
        .ant-form-item-control-input-content{
            input::placeholder{
                color: ${({ theme }) => theme.TaskManagement.Tital}34;
            }
            input, .ant-select-selector, .ant-input-number{
                color: ${({ theme }) => theme.TaskManagement.Tital};
                border: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
                background-color: transparent;
            }
        }
        .Labalset > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content{
            display: flex;
            .ant-select{
                margin-right: 10px;
            }
        }
    }
    .Datepiker{
        input{
            border: 1px solid transparent !important;
        }
    }
`;
