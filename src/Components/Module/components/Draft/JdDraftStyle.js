import styled from 'styled-components';
export const DraftWrapper = styled.div`
    .DraftEditor-root{
        color: ${({ theme }) => theme.TaskManagement.Tital}bf;
        height: fit-content;
        min-height: 17vh;
        background-color: #ffffff05;
        border-radius: 5px;
        padding: 10px;
        margin: 12px 0 0;
        height: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
        color: ${({ theme }) => theme.TaskManagement.Tital}bf;
    }
    .Draft_Btn{
        color: ${({ theme }) => theme.TaskManagement.Tital}bf;
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.TaskManagement.Border}66;
        margin: 5px;
    }
    .public-DraftStyleDefault-block {
        margin: 0em 0;
    }
    .fontselect{
        width: 120px;
        margin-top: 5px;
    }
    .ant-select-arrow {
        top: 47% !important;
    }
    .ant-select-selector {
        margin-left: 5px;
    }
    .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        background-color: transparent !important;
        border: 1px solid ${({ theme }) => theme.TaskManagement.Border}66 !important;
        color: ${({ theme }) => theme.TaskManagement.Tital}bf !important;
    }
    .RichEditor-editor{
        overflow: hidden;
        height: calc(100vh - 684px);
    }
    .RichEditor-styleButton{
        line-height: 30px;
        span > svg{
              fill: ${({ theme }) => theme.Dash.Saidbar.NorIconColor};
      }
    }
`;