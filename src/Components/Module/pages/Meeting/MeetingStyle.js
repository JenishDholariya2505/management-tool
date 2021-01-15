import styled from 'styled-components';
export const MeetingWrapper = styled.div`
.Contet{
    height: calc(100vh - 145px);
    width: calc(100vw - 100px);
    padding: 10px;
    display: flex;
    .Title{
        color: ${({ theme }) => theme.Meeting.Title};
    }
    .Arranged, .Invited{
        width: 50vw;
        padding: 5px;
        min-width: 392px;
        border-right: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
        .Arranged_Data{
            height: calc(100vh - 212px);
            position: relative;
            display: block;
            margin-top: 10px;
            padding-right: 5px;
            overflow: auto;
            .ArrangedCard{
                margin: 5px 0px;
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
        .Details{
            border: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
            margin-top: 20px;
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
        }
`;