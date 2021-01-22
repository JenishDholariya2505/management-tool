import styled from 'styled-components';
export const NoteWrapper = styled.div`
.Box{
    border-bottom: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
    padding: 0px 10px 10px;
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
export const NoteWrapperNote = styled.div`
        display: flex;
        .Note{
            border-right: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
            .ant-btn{
                background-color: ${({ theme }) => theme.Page.Users.ButtonBG};
                color: ${({ theme }) => theme.Page.Users.BtnText};
                border: none;
                cursor: pointer;
                font-family: Roboto-Regular;
                margin: 0px 5px;
            }
            .cratebtn{
                justify-content: flex-end;
                display: flex;
                padding-right: 10px;
                padding: 10px 10px 0px 0px;
            }
            .overflow{
                height: calc(100vh - 184px);
                overflow: auto;
                padding-right: 15px;
            }
            width: 400px;
            height: calc(100vh - 145px);
            padding: 0px 15px 20px;
            .title{
                color: ${({ theme }) => theme.Notes.Title};
                font-size: 12px;
                letter-spacing: 0.75px;
                font-family: 'Roboto-Regular';
                font-weight: 500;
                margin: 10px 0px;
                position: relative;
                display: flex;
            }
            .TextEditor{
                font-size: 12px;
                letter-spacing: 0.35px;
                font-family: 'Roboto-Regular';
                font-weight: 300;
                line-height: 40px;
                padding: 10px 15px 19px;
                background-image: url(/Line-01.png);
                background-repeat: repeat-y, repeat;
                background-size: 350px 40px;
            }
            
            .over{
                &::-webkit-scrollbar {
                    width: 1px;
                    height: 1px;
                }
                &::-webkit-scrollbar-track {
                    background: ${({ theme }) => theme.Notes.NoteBorder}17; !important;
                }
                height: 431px;
                overflow: auto;
                border: 1px solid ${({ theme }) => theme.Notes.NoteBorder}47;
                border-radius: 2px;
            }
            .ant-input {
                color: ${({ theme }) => theme.Notes.Text};
                background-color: ${({ theme }) => theme.Notes.NoteBG}42;
                border: none;
                width: 352px;
            }
            .ant-input::placeholder{
                color: ${({ theme }) => theme.Notes.InputPlce};
            }
        }
        .ShowNote{
            height: calc(100vh - 145px);
            width: calc(100vw - 510px);
            overflow: auto;
            padding: 37px 15px;
            .title{
                color: ${({ theme }) => theme.Notes.Title};
                font-size: 12px;
                letter-spacing: 0.75px;
                font-family: 'Roboto-Regular';
                font-weight: 500;
                position: relative;
                display: flex;
            }
            .MyNotes{
                margin-bottom: 10px;
                height: 170px;
                .NoteData{
                    height: 90%;
                    padding: 0px 10px;
                    display: flex;
                    overflow: auto;
                    .Card{
                        background-color: ${({ theme }) => theme.Notes.CardBG};
                        height: 118px;
                        margin: 15px 10px;
                        min-width: 366px;
                        max-width: 366px;
                        border-radius: 5px;
                        position: relative;
                        .Body{
                            padding: 0px 10px 10px;
                            display: grid;
                            overflow: auto;
                            height: 75px;
                            margin-top: 6px;
                            .bodytext{
                                color: ${({ theme }) => theme.Notes.BodyText};
                                font-family: 'Roboto-Regular';
                                font-size: 12px;
                                letter-spacing: 0.75px;
                                font-weight: 400;
                            }
                        }
                        .Footer{
                            display: flex;
                            justify-content: space-between;
                            padding: 2px 15px;
                            position: absolute;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            margin: auto;
                            height: fit-content;
                            .icons{
                                width: 40px;
                                justify-content: space-between;
                                display: flex;
                                line-height: 30px;
                            }
                            .userdate{
                                display: grid;
                                font-size: 10px;
                                letter-spacing: 0.65px;
                                font-family: 'Roboto-Regular';
                                font-weight: 400;
                                color: ${({ theme }) => theme.Notes.Footertext};
                            }
                        }
                    }
                }
            }
        }
        .ant-form-item {
            margin-bottom: 0px;
        }
        @media only screen and (max-width: 900px) {
            display: grid;
            .Note{
                width: 100%;
                height: calc(100vh - 385px);
                .overflow {
                    height: calc(100vh - 424px);
                }
                .TextEditor {
                    background-size: 100% 40px;
                    padding: 10px 25px 19px;
                    width: 100%;
                }
            }
            .ShowNote{
                margin-top: 10px;
                padding: 10px;
                display: flex;
                width: calc(100vw - 100px);
                overflow: auto;
                height: auto;
                .MyNotes{
                    height: none;
                }
            }
          }
`;