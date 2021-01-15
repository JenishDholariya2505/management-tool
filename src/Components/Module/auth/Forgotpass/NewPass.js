import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ForWrapper } from './Style'
import { Icons, JdFormComponents } from '../../components/Index'
import { NewPassword } from '../../../../Core/Redux/RestPassword/RestAction'
import { Link } from 'react-router-dom'

export default function NewPass() {
    const dispatch = useDispatch()
    const { JdInput, JdButton, JdForm } = JdFormComponents
    let Res = useSelector(state => state.auth)
    const access = localStorage.getItem('Access')
    useEffect(() => {
        if (!access) {
            window.location.assign('/Auth/Login')
        }
    }, [access]);
    const onFinish = value => {
        let data = value
        data['username'] = JSON.parse(access)
        if (value.username !== '') {
            dispatch(NewPassword(data));
        }
    }
    return (
        <div>
            <ForWrapper>
                <div className='right' >
                    <Link to='/Auth/OTP'><Icons type={'Arrow'} style={{ top: '180px' }} className='Arrow' /></Link>
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
                            <JdForm.Item hasFeedback label="New Password" name="newpassword" rules={[{ required: true, message: 'Please input your password!' }]}
                                hasFeedback >
                                <JdInput.Password autoComplete="off" placeholder='Enter New Password' />
                            </JdForm.Item>
                            <JdForm.Item hasFeedback name='confirmpassword'
                                label="Confirm Password"
                                hasFeedback
                                dependencies={['newpassword']}
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your confirmpassword!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('newpassword') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                ]}>
                                <JdInput.Password autoComplete="off" placeholder='Enter Confirm Password' />
                            </JdForm.Item>
                            <JdForm.Item style={{ textAlign: 'center' }}>
                                <JdButton type="primary" htmlType="submit" loading={Res.authentication} className="login-form-button" tital='Change Password' />
                            </JdForm.Item>
                        </JdForm>
                    </div>
                </div>
            </ForWrapper>
        </div>
    )
}
