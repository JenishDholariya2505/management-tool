import styled from 'styled-components';
export const SigninWrapper = styled.div`
    .MainPage{
      background-color: ${({ theme }) => theme.Signin.Background};
      height: 100vh;
      display: flex;
      .left, .right{
        width: 50vw;
        position: relative;
        display: flex;
        padding: 0px 70px;
      }
      .left{
        .leftData{
          width: fit-content;
          height: fit-content;
          margin: auto;
          position: absolute;
          padding: 0px 100px;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          .Brand{
            display: block;
          }
          span {
            color: ${({ theme }) => theme.Signin.LeftText};
            position: relative;
            display: flex;
          }
        }
        span > svg{
          margin-bottom: 15px;
          .st0{
            fill: ${({ theme }) => theme.Signin.LogoDark};
          }
          .st1{
            fill: #3B55A4;
          }
        }
      }
      .right{
        .rightData{
          height: fit-content;
          width: 350px;
          margin: auto;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          .login-form-button{
              width: -webkit-fill-available;
          }
          .Brand2{
            display: none;
          }
          .ant-form-item-required{
            color: ${({ theme }) => theme.Signin.InputTital};
            font-family: 'Roboto-Regular';
            font-size: 16px;
          }
          #normal_login_username{
            border: 1px solid  ${({ theme }) => theme.Signin.LeftText};
            height: 44px;
          }
          #normal_login_password, #normal_login_username{
            background: transparent;
            color: ${({ theme }) => theme.Signin.Text};
            font-size: 14px;
            border-radius: 5px;
          }
          #normal_login_password{
            height: 34px;
          }
          .ant-input-affix-wrapper{
            background: transparent;
            border-radius: 5px;
            border: 1px solid  ${({ theme }) => theme.Signin.LeftText};
          }
          .login-form-button{
            background-color: ${({ theme }) => theme.Signin.Button};
            color: ${({ theme }) => theme.Signin.Text};
            border: none;
            height: 48px;
            border-radius: 8px;
            font-family: 'Roboto-Bold';
            font-size: 16px;
          }
          .login-form-forgot{
            color: ${({ theme }) => theme.Signin.Forgotpa};
            font-family: 'Roboto-Regular';
            font-size: 14px;
          }
          #normal_login_username::placeholder, #normal_login_password::placeholder{
            color: ${({ theme }) => theme.Signin.Text}65;
          }
          .heding{
              display: grid;
            .welcometital{
              color: ${({ theme }) => theme.Signin.Tital};
              margin: 10px 0px;
              font-family: 'Roboto-Regular';
              font-size: 16px;
            }
            .othertital{
              color: ${({ theme }) => theme.Signin.PageTital};
              margin: 10px 0px;
              font-family: 'Roboto-Bold';
              font-size: 30px;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 880px) {
      .MainPage{
        .left{
          display: none;
        }
        .right{
          .rightData{
            .Brand2{
              display: block;
            }
            span > svg{
              .st0{
                fill: ${({ theme }) => theme.Signin.LogoDark};
              }
              .st1{
                fill: #3B55A4;
              }
            }
          }
          width: 100vw;
          padding: 0px 0px;
        }
      }
    }
`;