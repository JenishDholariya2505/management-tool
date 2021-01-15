import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SigninWrapper } from './SigninStyle'
import { Icons, JdFormComponents } from '../../components/Index'
import { Link } from 'react-router-dom';
import { LoginAPI } from '../../../../Core/Redux/RestPassword/RestAction'

export default function Signin() {
    const dispatch = useDispatch()
    const { JdInput, JdButton, JdForm } = JdFormComponents
    let Res = useSelector(state => state.auth)
    const onFinish = (values) => {
        dispatch(LoginAPI(values))
    };
    return (
        <SigninWrapper>
            <div className='MainPage'>
                <div className='left'>
                    <div style={{ position: 'relative', width: 'inherit' }}>
                        <div className='leftData'>
                            <Icons type='ZeronSec' className='Brand' />
                            <span>
                                We are Zeronsec, team of passionate security enineers and inustry
                                veterans spread across the globe, specializing in niche information security
                                areas. We exist to protext our customers.
                                </span>
                            <span>
                                Our obsession to engineer robust & meaningfull solutions drives us forward
                                every day. We are the company where passion meets detailed engineering.
                                </span>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <div style={{ position: 'relative', width: 'inherit' }}>
                        <div className='rightData'>
                            <div className='heding'>
                                <Icons type='ZeronSec' className='Brand2' />
                                <span className='welcometital'>Welcome back</span>
                                <span className='othertital'>Login to your account</span>
                            </div>
                            <JdForm name="normal_login" layout="vertical" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                                <JdForm.Item hasFeedback name="username" label='Username' rules={[{ required: true, whitespace: true, message: 'Please input your User Name!' }]} >
                                    <JdInput autoComplete='off' placeholder="User Name" />
                                </JdForm.Item>
                                <JdForm.Item hasFeedback name="password" label="Password" rules={[{ required: true, whitespace: true, message: 'Please input your Password!' }]} >
                                    <JdInput.Password type="password" placeholder="Password" />
                                </JdForm.Item>
                                <JdForm.Item style={{ textAlign: 'end' }}>
                                    <Link className="login-form-forgot" to='/Auth/Forgot'>Forgot password</Link>
                                </JdForm.Item>
                                <JdForm.Item style={{ textAlign: 'center' }}>
                                    <JdButton type="primary" htmlType="submit" loading={Res.authentication} className="login-form-button" tital=' Log in' />
                                </JdForm.Item>
                            </JdForm>
                        </div>
                    </div>
                </div>
            </div>
        </SigninWrapper>
    )
}
