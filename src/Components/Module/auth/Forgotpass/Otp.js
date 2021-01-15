import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icons, JdFormComponents } from '../../components/Index'
import { ForWrapper } from './Style';
import { OtpVerify } from '../../../../Core/Redux/RestPassword/RestAction'
import { Link } from 'react-router-dom'

export default function Otp() {
    const dispatch = useDispatch()
    const { JdInput, JdButton, JdForm } = JdFormComponents
    let Res = useSelector(state => state.auth)
    const onFinish = value => {
        dispatch(OtpVerify(value.username))
    }
    return (
        <ForWrapper>
            <div className='right'>
                <Link to='/Auth/Forgot'><Icons type={'Arrow'} className='Arrow' /></Link>
                <div className='rightData'>
                    <div className='heding'>
                        <Icons type='ZeronSec' className='Brand' />
                        <span className='othertital'>Verify OTP</span>
                        <span className='welcometital'>Enter 6 digit OTP received via mail.</span>
                    </div>
                    <JdForm
                        name="normal_login"
                        layout="vertical"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}>
                        <JdForm.Item
                            hasFeedback
                            name="username"
                            label='Enter OTP'
                            rules={[{ required: true, message: '' }, () => ({
                                validator(rule, value) {
                                    if (/^\d*$/.test(value) && value.length > 5 && value.length < 7) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Enter 6 Digit OTP');
                                },
                            })]}
                        >
                            <JdInput autoComplete='off' placeholder="Enter OTP" type='number' />
                        </JdForm.Item>
                        <JdForm.Item style={{ textAlign: 'center' }}>
                            <JdButton type="primary" htmlType="submit" className="login-form-button" loading={Res.authentication} tital='Request OTP' />
                        </JdForm.Item>
                    </JdForm>
                </div>
            </div>
        </ForWrapper>
    )
}
