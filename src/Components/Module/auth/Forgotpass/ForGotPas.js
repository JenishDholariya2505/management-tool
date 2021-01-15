import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForWrapper } from './Style'
import { Icons, JdFormComponents } from '../../components/Index'
import { OtpSend } from '../../../../Core/Redux/RestPassword/RestAction'
import { Link } from 'react-router-dom'

export default function ForGotPas() {
    const dispatch = useDispatch()
    const { JdInput, JdButton, JdForm } = JdFormComponents
    let Res = useSelector(state => state.auth)
    const onFinish = value => {
        dispatch(OtpSend(value.username));
    }
    return (
        <ForWrapper>
            <div className='right'>
                <Link to='/Auth/Login'><Icons type={'Arrow'} className='Arrow' /></Link>
                <div className='rightData'>
                    <div className='heding'>
                        <Icons type='ZeronSec' className='Brand' />
                        <span className='othertital'>Forgot Password</span>
                        <span className='welcometital'>You’ll receive OTP via email.</span>
                    </div>
                    <JdForm
                        name="normal_login"
                        layout="vertical"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}>
                        <JdForm.Item hasFeedback
                            name="username"
                            label='Enter Registered Email'
                            rules={[{ required: true, whitespace: true, type: 'email', message: 'Please input your Email!' }]}
                        >
                            <JdInput autoComplete='off' placeholder="Enter Registered Email" />
                        </JdForm.Item>
                        <JdForm.Item style={{ textAlign: 'center' }}>
                            <JdButton loading={Res.authentication} type="primary" htmlType="submit" className="login-form-button" tital='Request OTP' />
                        </JdForm.Item>
                    </JdForm>
                </div>
            </div>
        </ForWrapper>
    )
}
