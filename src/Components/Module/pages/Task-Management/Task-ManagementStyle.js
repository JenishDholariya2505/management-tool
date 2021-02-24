import styled from 'styled-components';
export const TaskManageWrapper = styled.div`
.graph{
    width: calc(100vw - 230px);
    height: calc(100vh - 154px);
    margin: 10px 0 0 0;
}
.Box{
    border-bottom: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
    padding: 0px 10px 10px;
}
.Closebtn{
    background: ${({ theme }) => theme.Meeting.Closebtn} !important;
    border: 1px solid ${({ theme }) => theme.Meeting.CloseBorder} !important;
    color: ${({ theme }) => theme.Meeting.CardTitle}85 !important;
}
.ant-btn, .nodebtn{
    background-color: ${({ theme }) => theme.Page.Users.ButtonBG};
    color: ${({ theme }) => theme.Page.Users.BtnText};
    border: none;
    cursor: pointer;
    font-family: Roboto-Regular;
    margin: 0px 5px;
}
.active{
    transition: 0.5s;
    background-color: #429fe42e;
    color: #429FE4;
}
.graphbox{
    margin-top: 10px;
    #net{
        border-radius: 10px;
        background-color: ${({ theme }) => theme.graph.bg};
    }
    .btnstore{
        display: flex;
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
    }
    .modify{
        background-color: ${({ theme }) => theme.graph.bg}45;
        border: 1px solid ${({ theme }) => theme.graph.bg};
        height: 60px;
        position: relative;
        margin-top: 10px;
        border-radius: 10px;
        .innerdata{
            display: flex;
            justify-content: space-between;
            padding: 8px 25px;
            .View_Name, .SkinUpdate, .Scale, .Caption{
                background-color: ${({ theme }) => theme.Page.Users.ButtonBG}12;
                padding: 5px 10px;
                border-radius: 5px;
                border-bottom: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
                height: fit-content;
                span{
                    line-height: 32px;
                    color: ${({ theme }) => theme.Page.Users.Tital};
                }
            }
            .Title{
                margin-right: 5px;
            }
            .captionbtn{
                background-color: ${({ theme }) => theme.Page.Users.ButtonBG}35;
                padding: 7px 10px;
                line-height: 32px;
                transition: 0.5s;
                border-radius: 5px;
                cursor: pointer;
                color: ${({ theme }) => theme.Page.Users.Tital}bf;
                margin: 0px 3px;
                border: 1px solid ${({ theme }) => theme.Page.Users.ButtonBG}65;
            }
            .SkinUpdate, .Scale{
                display: flex;
                width: 210px;
            .Size, .skin{
                border-radius: 100%;
                cursor: pointer;
                background-color: ${({ theme }) => theme.Page.Users.ButtonBG}65;
                margin: 0px 5px;
                font-size: 1px;
                transition: 0.8s;
            }
            .Size{
                border: 1px solid ${({ theme }) => theme.Page.Users.Border}00;
                line-height: 32px;
            }
            .activesize, .Size:hover{
                border: 1px solid ${({ theme }) => theme.Page.Users.Border}84;
            }
            .skin:hover, .activeskin{
                border-radius: 5px;
                transition: 0.8s;
            }
            .skin{
                padding: 11px;
                height: 10px;
                margin: 0px 4px;
                margin-top: 6px;                    
            }
        }
        .activecap, .captionbtn:hover{
            background-color: ${({ theme }) => theme.Page.Users.ButtonBG}00;
            border: 1px solid ${({ theme }) => theme.Page.Users.ButtonBG}65;
        }
        .sizeModify{
            display: grid;
            width: 50vw;
            span{
                border-radius: 0px !important;
                margin: 1px 0px;
                border: none !important;
            }
        }
        }
    }
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
export const NewTaskWrapper = styled.div`
height: calc(100vh - 143px);
padding: 0px 10px;
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
`;
