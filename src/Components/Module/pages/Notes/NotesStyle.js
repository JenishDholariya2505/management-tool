import styled from 'styled-components';
export const NoteWrapper = styled.div`
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