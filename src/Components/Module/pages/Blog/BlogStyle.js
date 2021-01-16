import styled from 'styled-components';
export const BlogWrapper = styled.div`
    position: relative;
    height: calc(100vh - 100px);
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
.CardPri{
    height: calc(100vh - 160px);
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(325px,1fr));
    padding: 10px 0px 10px 10px;
    overflow-x: hidden;
    .Card:hover{
        background-color: ${({ theme }) => theme.Page.Blog.SelectedCard} !important;
        .Modify{
            display: flex;
        }
    }
    .Modify{
        display: none;
    }
    .Card{
        background-color: ${({ theme }) => theme.Page.Blog.CardBG};
        transition: 0.8s;
        width: 314px;
        height: 225px;
        border-radius: 5px;
        margin: 5px;
        .CardBody{
            height: fit-content;
            padding: 2px;
        }
        .CardFooter{
            padding: 0px 5px;
            .HedData{
                display: grid;
                .Tital{
                    letter-spacing: 0.75px;
                    font-size: 16px;
                    font-family: Roboto-Regular;
                    color: ${({ theme }) => theme.Page.Blog.CardTital};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    width: 122px;
                }
                .Time{
                    letter-spacing: 0.75px;
                    font-size: 10px;
                    font-family: Roboto-Light;
                    color: ${({ theme }) => theme.Page.Blog.CardTime};
                }
            }
             .Author{
                letter-spacing: 0.75px;
                font-size: 10px;
                font-family: Roboto-Light;
                bottom: 2px;
                position: relative;
                margin-left: 10px;
                color: ${({ theme }) => theme.Page.Blog.CardAuthor};
             }
        }
    }
}
.ant-spin, .ant-spin-spinning{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: fit-content;
    width: fit-content;
}
.ant-spin-container::after {
    background: #419fe4;
}
`;