import styled from 'styled-components';
export const PageWrapper = styled.div`
    background-color: ${({ theme }) => theme.Dash.Background};
    height: calc(100vh - 0px);
    .Layout{
        display: flex;
        height: calc(100vh - 90px);
        .Page{
            padding: 10px 15px;
        }
        .ant-empty-description{
            color: ${({ theme }) => theme.Modal.BodyText}84;
        }
        .ant-empty-img-simple-ellipse {
            fill: ${({ theme }) => theme.Table.emptyfill};
            fill-opacity: .08;
        }
        .ant-empty-img-simple-g {
            stroke: ${({ theme }) => theme.Table.emptystroke};
        }
        .ant-empty-img-simple-path {
            fill: ${({ theme }) => theme.Table.emptystroke};
            stroke: ${({ theme }) => theme.Table.emptystroke};
        }
        .ant-table-expanded-row-fixed:hover, .ant-table-cell:hover, .ant-table-tbody > tr.ant-table-row:hover > td{
            background-color: ${({ theme }) => theme.Table.BackHover};
        }
        // .ant-table-expanded-row-fixed:hover, .ant-table-tbody:hover, .ant-table-cell:hover, .ant-table-tbody > tr.ant-table-row:hover > td{
        //     background-color: ${({ theme }) => theme.Table.BackHover};
        // }
    }
`;