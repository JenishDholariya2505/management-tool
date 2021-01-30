import styled from 'styled-components';
export const ChartRoomWrapper = styled.div`
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
}
.Chart{
    width: fit-content;
    background-color: ${({ theme }) => theme.Dash.Saidbar.Bg};
    margin: 20px 10px 0px;
    border-radius: 5px;
    padding: 10px;
    height: fit-content;
    .Title{
        color: ${({ theme }) => theme.Page.Users.Tital};
        font-size: 12px;
        display: block;
        margin: 1px 0px 0px 10px;
        position: relative;
    }
    #legend1, #legend2{
        cursor: pointer;
        overflow: auto;
        padding: 5px 5px 0px;
        transition: 0.5s;
        position: relative;
        width: 83px;
        height: auto;
    }
    #legend1 > div, #legend2 > div{
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        height: fit-content;
        margin: auto;
    }
}
`;