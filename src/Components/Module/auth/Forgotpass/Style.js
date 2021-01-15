import styled from 'styled-components';
export const ForWrapper = styled.div`
    background-color: ${({ theme }) => theme.Signin.Background};
    height: 100vh;
    .right{
      .Arrow{
        font-size: 18px;
        width: fit-content;
        position: absolute;
        margin: auto;
        top: 230px;
        left: -380px;
        right: 0;
        color: ${({ theme }) => theme.Signin.LogoDark};
      }
      height: 100vh;
      .rightData{
        height: fit-content;
        width: 400px;
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
        span > svg{
          .st0{
            fill: ${({ theme }) => theme.Signin.LogoDark};
          }
          .st1{
            fill: #3B55A4;
          }
        }
        .ant-form-item-required{
          color: ${({ theme }) => theme.Signin.InputTital};
          font-family: 'Roboto-Regular';
          font-size: 16px;
        }
        #normal_login_username{
          border: 1px solid  ${({ theme }) => theme.Signin.LeftText};
          background: transparent;
          color: ${({ theme }) => theme.Signin.Text};
          font-size: 14px;
          height: 44px;
          border-radius: 5px;
        }
        #normal_login_password, #normal_login_newpassword, #normal_login_confirmpassword{
          border: none !important;
          background: transparent;
          color: ${({ theme }) => theme.Signin.Text};
          font-size: 14px;
          height: 34px;
        }
        .ant-form-item-children-icon{
          margin-top: -6px;
        }
        #normal_login_confirm{
          border: none !important;
          background: transparent;
          color: ${({ theme }) => theme.Signin.Text};
          font-size: 14px;
          height: 34px;
        }
        .ant-input-affix-wrapper{
          background: transparent;
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
          margin-top: 5px;
        }
        .login-form-forgot{
          color: ${({ theme }) => theme.Signin.Forgotpa};
          font-family: 'Roboto-Regular';
          font-size: 14px;
        }
        #normal_login_username::placeholder, #normal_login_password::placeholder, #normal_login_newpassword::placeholder, #normal_login_confirmpassword::placeholder{
          color: ${({ theme }) => theme.Signin.Text}65;
        }
        .heding{
            display: grid;
          .welcometital{
            color: ${({ theme }) => theme.Signin.Tital} !important;
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
`;