import styled from 'styled-components';
export const SidebarWrapper = styled.div`
    margin: 10px 0px 0px 10px;
    background-color: ${({ theme }) => theme.Dash.Saidbar.Bg};
    .ant-menu, .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
        background-color: ${({ theme }) => theme.Dash.TopbarBG}00;
        overflow: auto;
        height: calc(100vh - 100px);
        border-right: none;
        .selected{
            background-color: ${({ theme }) => theme.Dash.Saidbar.MenuBG};
            border: 1px solid ${({ theme }) => theme.Dash.Saidbar.Select};
        }
        ;
        .selected, .ant-menu-item:hover{
            svg{
                path{
                    fill: ${({ theme }) => theme.Dash.Saidbar.IconColor} !important;
                }
            }
        }
        .ant-menu-item-icon > svg > path {
            fill: ${({ theme }) => theme.Dash.Saidbar.NorIconColor};
        }
    }
    .ant-menu-item, .ant-menu-item-selected{
        border: 1px solid transparent;
        background-color: ${({ theme }) => theme.Dash.Saidbar.MenuBG};
        padding: 12px 19.5px;
        border-bottom: 1px solid ${({ theme }) => theme.Dash.Background};
        height: 60px !important;
    }

`;