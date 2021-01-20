import React, { useState, useEffect } from 'react';
import { Input, Form } from 'antd';
import { JDModal, JdFormComponents, JdSelect } from '../../components/Index'

const { TextArea } = Input;
const { JdRadio, JdInput, JdButton, JdForm } = JdFormComponents;

const bloodGroup = [{ value: 'A+' }, { value: 'A-' }, { value: 'B+' }, { value: 'B-' }, { value: 'O+' }, { value: 'O-' }, { value: 'AB+' }, { value: 'AB-' }];
const Designation = [{ value: 'Graphic Designer' }, { value: 'front-end developer' }, { value: 'back-end developer' }, { value: 'testing developer' }];

const AddUser = ({ visible, onCreate, close, loading, NameModal, Data, clr }) => {

    const [form] = Form.useForm();

    useEffect(() => {
        if (clr) { form.resetFields(); }
        if (Data) { form.setFieldsValue(Data); }
    }, [form, Data, clr])
    const [value, setvalue] = useState(1)
    const onChange = e => {
        setvalue(e.target.value)
    };
    const CloseModal = () => {
        form.resetFields();
        close()
    }
    return (
        <JDModal centered={true} modalField={visible} Tital={NameModal} Footer={true} onCancel={CloseModal} closebtn={true}
            MainBTN={<JdButton loading={loading} key='0' htmlType="submit" className='MainBTN' onClick={() => { form.validateFields().then((values) => { onCreate(values); }).catch((info) => { console.log('Validate Failed:', info); }); }} tital='Save' />} >
            <div className='Modal' style={{ width: '512px', padding: '0px 30px' }}>
                <JdForm form={form} name="basic" layout="vertical" initialValues={{ remember: true }}>
                    <div className='JDForm'>
                        <JdForm.Item hasFeedback label="User Name" name='username' rules={[{ whitespace: true, required: true, message: 'username is required' }, () => ({
                            validator(rule, value) {
                                let NameValid = /[^a-z .]/gi
                                if (!NameValid.test(value)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('invalid UserName');
                            },
                        })]}>
                            <JdInput autoComplete="off" placeholder='Enter User Name' />
                        </JdForm.Item>
                    </div>
                    <div className='d-flex'>
                        <div style={{ width: '50vw', paddingRight: '5px' }} className='JDForm'>
                            <JdForm.Item hasFeedback label="First Name" name="firstName" rules={[{ required: true, whitespace: true, message: 'First Name is required' }, () => ({
                                validator(rule, value) {
                                    let NameValid = /[^a-z .]/gi
                                    if (!NameValid.test(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Invalid FirstName');
                                },
                            })]}>
                                <JdInput autoComplete="off" placeholder='Enter First Name' />
                            </JdForm.Item>
                        </div>
                        <div style={{ width: '50vw', paddingLeft: '5px' }} className='JDForm'>
                            <JdForm.Item hasFeedback label="Last Name" name="lastName" rules={[{ whitespace: true, required: true, message: 'Last Name is required' }, () => ({
                                validator(rule, value) {
                                    let NameValid = /[^a-z .]/gi
                                    if (!NameValid.test(value)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Invalid LastName');
                                },
                            })]}>
                                <JdInput autoComplete="off" placeholder='Enter Last Name' />
                            </JdForm.Item>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div style={{ width: '50vw', paddingRight: '5px' }} className='JDForm'>
                            <JdForm.Item hasFeedback label="Email" name="email" rules={[{ whitespace: true, required: true, type: 'email', message: 'Email is required' }]}>
                                <JdInput autoComplete="off" placeholder='Enter Email' />
                            </JdForm.Item>
                        </div>
                        <div style={{ width: '50vw', paddingLeft: '5px' }} className='JDForm'>
                            <JdForm.Item hasFeedback label="Contact No." name="contact" rules={[{ whitespace: true, required: true, message: '' }, () => ({
                                validator(rule, value) {
                                    if (/^\d*$/.test(value) && value.length > 9 && value.length < 11) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Enter 10 Digit Number');
                                },
                            })]}>
                                <JdInput autoComplete="off" type={'number'} placeholder='Enter Contact No' />
                            </JdForm.Item>
                        </div>
                    </div>
                    <div className='d-flex SelectOver'>
                        <div style={{ width: '50vw', paddingRight: '5px' }} className='JDForm'>
                            <JdForm.Item hasFeedback label="Designation" name="designation" rules={[{ required: true, message: 'Select Designation' }]}>
                                <JdSelect name="Designation" style={{ width: '100%' }} options={Designation} placeholder='Select Designation' />
                            </JdForm.Item>
                        </div>
                        <div style={{ width: '50vw', paddingLeft: '5px' }} className='JDForm'>
                            <JdForm.Item hasFeedback label="bloodGroup" name="bloodGroup" rules={[{ required: true, message: 'Select bloodGroup' }]}>
                                <JdSelect name="bloodGroup" style={{ width: '100%' }} options={bloodGroup} placeholder='Select bloodGroup' />
                            </JdForm.Item>
                        </div>
                    </div>
                    <div className='JDForm'>
                        <JdForm.Item label="Gender" name="gender" rules={[{ required: true, message: 'Select Gender' }]}>
                            <JdRadio.Group hasFeedback onChange={onChange} value={value}>
                                <JdRadio value={'Male'}>Male</JdRadio>
                                <JdRadio value={'Female'}>Female</JdRadio>
                            </JdRadio.Group>
                        </JdForm.Item>
                    </div>
                    <div className='JDForm'>
                        <JdForm.Item hasFeedback label="Address" name='address' rules={[{ type: 'string', whitespace: true, required: true, message: 'Enter Address' }]}>
                            <TextArea name='address' autoSize={{ minRows: 1, maxRows: 2 }} placeholder="Enter Address" />
                        </JdForm.Item>
                    </div>

                    <div className='d-flex' style={{ height: '87px' }}>
                        <div style={{ width: '50vw', paddingRight: '5px' }} className='JDForm'>
                            <JdForm.Item className='Passwordfiled' label="Password" name="password" rules={[{ whitespace: true, required: true, message: 'Please input your password!' }]} hasFeedback>
                                <JdInput.Password autoComplete="off" placeholder='Enter Password' />
                            </JdForm.Item>
                        </div>
                        <div style={{ width: '50vw', paddingLeft: '5px' }} className='JDForm'>
                            <JdForm.Item name="confirmPassword"
                                className='Passwordfiled'
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        whitespace: true, required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('you entered do not match!');
                                        },
                                    }),
                                ]}>
                                <JdInput.Password name='password' autoComplete="off" placeholder='Enter Password' />
                            </JdForm.Item>
                        </div>
                    </div>
                </JdForm>
            </div>
        </JDModal>
    );
};

export default AddUser;