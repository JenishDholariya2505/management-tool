import styled from 'styled-components';

export const NewGraphWrapper = styled.div`
.addgraph{
    height: calc(100vh - 115px);
    width: calc(100vw - 100px);
    background-color: ${({ theme }) => theme.graph.bg}45;
    margin-top: 5px;
    border-radius: 5px;
}
.nodebtn{
    background-color: ${({ theme }) => theme.Page.Users.ButtonBG};
    color: ${({ theme }) => theme.Page.Users.BtnText};
    border: none;
    cursor: pointer;
    font-family: Roboto-Regular;
    margin: 0px 5px;
}
.active{
    transition: 0.5s;
    background-color: #429fe42e;
    color: #429FE4;
}
.graphbox{
    margin-top: 10px;
    .graphset{
        border-radius: 10px;
        background-color: ${({ theme }) => theme.graph.bg};
    }
    .btnstore{
        display: flex;
        position: absolute;
        margin-top: 10px;
        margin-left: 10px;
    }
    .modify{
        background-color: ${({ theme }) => theme.graph.bg}45;
        border: 1px solid ${({ theme }) => theme.graph.bg};
        height: 60px;
        position: relative;
        margin-top: 10px;
        border-radius: 10px;
        .innerdata{
            display: flex;
            justify-content: space-between;
            padding: 8px 25px;
            .View_Name, .SkinUpdate, .Scale, .Caption{
                background-color: ${({ theme }) => theme.Page.Users.ButtonBG}12;
                padding: 5px 10px;
                border-radius: 5px;
                border-bottom: 1px solid ${({ theme }) => theme.Page.Users.Border}1f;
                height: fit-content;
                span{
                    line-height: 32px;
                    color: ${({ theme }) => theme.Page.Users.Tital};
                }
            }
            .Title{
                margin-right: 5px;
            }
            .captionbtn{
                background-color: ${({ theme }) => theme.Page.Users.ButtonBG}35;
                padding: 7px 10px;
                line-height: 32px;
                transition: 0.5s;
                border-radius: 5px;
                cursor: pointer;
                color: ${({ theme }) => theme.Page.Users.Tital}bf;
                margin: 0px 3px;
                border: 1px solid ${({ theme }) => theme.Page.Users.ButtonBG}65;
            }
            .SkinUpdate, .Scale{
                display: flex;
                width: 210px;
            .Size, .skin{
                border-radius: 100%;
                cursor: pointer;
                background-color: ${({ theme }) => theme.Page.Users.ButtonBG}65;
                margin: 0px 5px;
                font-size: 1px;
                transition: 0.8s;
            }
            .Size{
                border: 1px solid ${({ theme }) => theme.Page.Users.Border}00;
                line-height: 32px;
            }
            .activesize, .Size:hover{
                border: 1px solid ${({ theme }) => theme.Page.Users.Border}84;
            }
            .skin:hover, .activeskin{
                border-radius: 5px;
                transition: 0.8s;
            }
            .skin{
                padding: 11px;
                height: 10px;
                margin: 0px 4px;
                margin-top: 6px;                    
            }
        }
        .activecap, .captionbtn:hover{
            background-color: ${({ theme }) => theme.Page.Users.ButtonBG}00;
            border: 1px solid ${({ theme }) => theme.Page.Users.ButtonBG}65;
        }
        }
        .sizeModify{
            display: grid;
            width: 50vw;
            span{
                border-radius: 0px !important;
                margin: 1px 0px;
                border: none !important;
            }
        }
    }
}
.ant-spin-dot{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}
.ant-spin{
    width: calc(100vw - 102px);
    height: calc(100vh - 230px);
    position: absolute;
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