import styled from 'styled-components';
export const MeetingWrapper = styled.div`
.Contet{
    height: calc(100vh - 145px);
    width: calc(100vw - 100px);
    padding: 10px;
    display: flex;
    .Title{
        color: ${({ theme }) => theme.Meeting.Title};
        margin-left: 15px;
    }
    .Arranged{
        border-right: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
    }
    .Arranged, .Invited{
        width: 50vw;
        padding: 5px 10px 5px 0px;
        min-width: 392px;
        .Arranged_Data{
            height: calc(100vh - 212px);
            position: relative;
            display: block;
            margin-top: 10px;
            padding: 0px 10px;
            overflow: auto;
            .ArrangedCard{
                margin: 10px 0px;
                display: block;
                height: 116px;
                padding: 10px 10px 5px;
                background-color: ${({ theme }) => theme.Meeting.CardBG};
                border-radius: 5px;
                .CardHader{
                    color: ${({ theme }) => theme.Meeting.CardTitle};
                    font-size: 13px;
                    font-weight: 700;
                    font-family: 'Roboto-Regular';
                    line-height: 15px;
                }
                .CardBody{
                    display: -webkit-inline-box;
                    margin-top: 3px;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    color: ${({ theme }) => theme.Meeting.CardBody};
                    font-size: 11px;
                        font-family: 'Roboto-Regular';
                    letter-spacing: 0.35px;
                }
                .CardFooter{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 7px;
                    .Left{
                        display: grid;
                        .FTitle{
                            color: ${({ theme }) => theme.Meeting.Title};
                            font-size: 10px;
                            font-family: 'Roboto-Regular';
                            letter-spacing: 0.65px;
                            font-weight: 400;
                        }
                    }
                    .Right{
                        padding-top: 5px;
                        display: flex;
                        .IconsM{
                            margin: 0px 5px;
                        }
                    }
                }
            }
        }
    }
}
@media only screen and (max-width: 904px) {
    .Contet{
        display: grid;
        .Arranged_Data{
            height: calc(100vh - 580px) !important;
        }
        .Arranged, .Invited{
            width: calc(100vw - 120px);
        }
    }
  }
.Box{
    border-bottom: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
    padding: 0px 10px 10px;
    .ant-btn{
        background-color: ${({ theme }) => theme.Page.Users.ButtonBG};
        color: ${({ theme }) => theme.Page.Users.BtnText};
        border: none;
        cursor: pointer;
        font-family: Roboto-Regular;
        margin: 0px 5px;
    }
    .Closebtn{
        background: ${({ theme }) => theme.Meeting.Closebtn};
        border: 1px solid ${({ theme }) => theme.Meeting.CloseBorder};
        color: ${({ theme }) => theme.Meeting.CardTitle}85;
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
`;
export const MeetingCreateWrapper = styled.div`
    overflow: auto;
    height: calc(100vh - 167px);
    margin-top: 20px;
@media only screen and (max-width: 904px) {
    .d-flex{
        display: block !important;
    }
  }
@media only screen and (max-width: 575px) {
    .ant-form{
        overflow: auto;
        height: 257px;
    }
  }
        .Details{
            border: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
            margin: 6px 0px 20px;
            border-radius: 4px;
            padding: 5px;
            .Tital{
                color: ${({ theme }) => theme.Meeting.CreateMeeting.Title};
                font-size: 14px;
                font-family: 'Roboto-Regular';
                font-weight: 400;
                letter-spacing: 0.75px;
                left: 20px;
                bottom: 17px;
                padding: 0px 10px;
                background-color: ${({ theme }) => theme.TaskManagement.TextBG};
                position: relative;
            }
            .ant-form-item-control-input-content > input, .ant-picker, .ant-picker-range, .ant-select-selector, .ant-input{
                background-color: ${({ theme }) => theme.Meeting.CreateMeeting.InputBG};
                border: 1px solid ${({ theme }) => theme.Meeting.CreateMeeting.InputBorder}2b;
                color: ${({ theme }) => theme.Meeting.CreateMeeting.Title};
                border-radius: 5px;
                .anticon-swap-right{
                    color: ${({ theme }) => theme.Page.Users.ButtonBG};
                }
            }
            .ant-form-item-explain.ant-form-item-explain-error {
                color: #ff4d4f;
                font-size: 12px;
            }
            .chipbody{
                width: 160px;
                margin: 0px 5px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                justify-content: space-between;
                display: flex;
                padding: 0px 10px;
                border-radius: 5px;
                line-height: 25px;
                font-size: 12px;
                font-family: Roboto-Light;
                color: ${({ theme }) => theme.Modal.HadText};
                background-color: ${({ theme }) => theme.Upload.BG} !important;
                padding: 0px 10px;
            }
            .ant-picker:not([disabled]):hover {
                background-color: transparent;
            }
            .ant-picker-input > input{
                color: ${({ theme }) => theme.TaskManagement.Tital}bf !important;
            }
            .ant-form-item-control-input-content > input::placeholder, .ant-input::placeholder{
                color: ${({ theme }) => theme.Meeting.CreateMeeting.InputPlassholder};
                font-family: 'Roboto-Regular';
                font-size: 12px;
                letter-spacing: 0.75px;
            }
            .chip, .ant-upload-list{
                overflow-x: auto;
                display: flex;
            }
            .SelectBTN{
                background-color: ${({ theme }) => theme.TaskManagement.UploadBTN};
                color: ${({ theme }) => theme.TaskManagement.Tital}bf;
                border: none;
                border-radius: 5px;
            }
            .Description{
                min-width: 100px;
                display: flex;
            }
            .authorMain{
                margin-right: 20%;
            }
                .author{
                    color: ${({ theme }) => theme.Meeting.CreateMeeting.Title};
                    font-size: 11px;
                    letter-spacing: 0.75px;
                    font-family: 'Roboto-Regular';
                    font-weight: 400;
                    line-height: 25px;
                    margin-left: 7px;
                }
            .ant-form-item-label{
                width: 150px;
                label{
                    color: ${({ theme }) => theme.Meeting.CreateMeeting.Title};
                    font-size: 12px;
                    letter-spacing: 0.75px;
                    font-family: 'Roboto-Regular';
                    font-weight: 400;
                }
            }
        }
        .SelectOver{
            .ant-form-item-explain-error{
                margin-left: 20px !important;
            }
            .ant-select-selector{
                background-color: ${({ theme }) => theme.Meeting.CreateMeeting.InputBG} !important;
                color: ${({ theme }) => theme.Meeting.CreateMeeting.Title};
            }
        }
        .error{
            color: #ff4d4f;
            margin-left: 20px;
            font-size: 12px;
        }
`;