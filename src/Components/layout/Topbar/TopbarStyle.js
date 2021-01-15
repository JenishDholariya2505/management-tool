import styled from 'styled-components';
export const TopbarWrapper = styled.div`
    .Topbar{
        background-color: ${({ theme }) => theme.Dash.TopbarBG};
        span > svg {
            width: 150px;
            .st0{
                fill: ${({ theme }) => theme.Signin.LogoDark};
              }
              .st1{
                fill: #3B55A4;
              }
        }
        .ant-page-header-heading-sub-title{
            color: ${({ theme }) => theme.Dash.BredColor}45;
            font-family: Roboto-Regular;
        }
        .ant-page-header {
            padding: 4px 24px;
        }
        .profile{
            background-color: ${({ theme }) => theme.Dash.Topbar.ProfileBG};
            color: ${({ theme }) => theme.Dash.Topbar.Text};
            border: 1px solid ${({ theme }) => theme.Dash.Topbar.Border};
            height: 32px;
            width: 32px;
            border-radius: 50%;
            text-align: center;
            padding-top: 7px;
            font-size: 12px;
            line-height: 17px;
            cursor: pointer;
        }
    }
   
   
`;