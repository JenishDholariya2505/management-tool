import styled from 'styled-components';
export const UserGroupWrapper = styled.div`
width: calc(100vw - 102px);
.Box{
    border-bottom: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
    display: flex;
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
.ant-table{
    .ant-table-expanded-row-fixed{
        height: calc(100vh - 263px) !important;
        .ant-empty, .ant-empty-normal{
            width: fit-content;
            height: fit-content;
            margin: auto;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            position: absolute;
        }
    }
    color: ${({ theme }) => theme.Modal.BodyText}84;
    background-color: ${({ theme }) => theme.Table.Back};
    .ant-table-thead > tr > th{
        color: ${({ theme }) => theme.Table.THColor}65;
        background-color: ${({ theme }) => theme.Table.THBG};
    }
    .ant-table-tbody{
        font-family: Roboto-Light;
    }
    .ant-table-tbody > tr.ant-table-row:hover > td{
        background-color: ${({ theme }) => theme.Table.BackHover};
    }
    .ant-table-tbody > tr > td, .ant-table-thead > tr > th{
        border-bottom: 1px solid ${({ theme }) => theme.Table.BorderC};
    }
    td.ant-table-column-sort{
        background-color:  ${({ theme }) => theme.Table.THColor}05;
    }
}
.DeleteModal{
    background: transparent;
        border-color: ${({ theme }) => theme.Table.BorderC};
        color: ${({ theme }) => theme.Modal.BodyText}84;
}
.ant-pagination{
    position: absolute;
    margin: auto;
    bottom: 0;
    right: 0;
    left: 0;
    width: fit-content;
    .ant-pagination-item-active {
        background: transparent;
        border-color: transparent !important;
        a{
            color: ${({ theme }) => theme.Table.Select} !important;
        }
    }
    .ant-pagination-item{
        background: transparent;
        border-color: transparent;
        a{
            color: ${({ theme }) => theme.Modal.BodyText}84;
        }
    }
    .ant-pagination-item-link{
        border-color: transparent;
        background-color: transparent !important;
        padding-top: 3px;
        span{
            color: ${({ theme }) => theme.Modal.BodyText}84;
            vertical-align: 0.1em;
        }
    }
}
.ant-spin-container{
    height: calc(100vh - 160px);
}
.ant-spin-nested-loading > div > .ant-spin {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 4;
}
.ant-spin-container::after {
    background: #419fe4;
}
`;