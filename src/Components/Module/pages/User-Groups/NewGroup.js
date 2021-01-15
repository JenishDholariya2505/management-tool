import React, { useState, useEffect } from 'react';
import { Form } from 'antd';
import { JDModal, JdFormComponents, JdSelect } from '../../components/Index'
const { JdRadio, JdInput, JdButton, JdForm } = JdFormComponents;

const options = [{ value: '40g4aPlo' }, { value: 'pO9pX8Ww' }, { value: 'Hover User' }, { value: 'Simple User2' }];
const NewGroup = ({ visible, onCreate, data, NameModal, loading, clr }) => {
    const [form] = Form.useForm();
    const [value, setvalue] = useState(1)
    const onChange = e => {
        setvalue(e.target.value)
    };
    console.log(data, 'datamodal')
    useEffect(() => {
        if (clr) { form.resetFields(); }
        if (data) { form.setFieldsValue(data); }
    }, [form, data, clr])

    const Close = () => {
        form.resetFields();
        onCreate()
    }
    return (
        <JDModal
            modalField={visible}
            Tital={NameModal}
            Footer={true}
            onCancel={Close}
            closebtn={true}
            centered={true}
            MainBTN={<JdButton loading={loading} key='0' className='MainBTN' onClick={
                () => {
                    form
                        .validateFields()
                        .then((values) => {
                            form.resetFields();
                            onCreate(values);
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }
            } tital='Save' />}
        >
            <div className='Modal' style={{ width: '512px', padding: '0px 30px' }}>
                <JdForm form={form} name="basic" layout="vertical">
                    <JdForm.Item hasFeedback label="Group Name" name="groupName" rules={[{ required: true, whitespace: true, message: 'Enter Group Name' }]}>
                        <JdInput placeholder='Enter Group Name' />
                    </JdForm.Item>
                    <JdForm.Item label="Group Type" name="groupType" rules={[{ required: true, whitespace: true, message: 'Select Group Type' }]}>
                        <JdRadio.Group onChange={onChange} value={value}>
                            <JdRadio value={'Public'}>
                                Public (Readable to users outside group)
                            </JdRadio>
                            <JdRadio value={'Private'}>
                                Private (Accessible to Group Users Only)
                            </JdRadio>
                        </JdRadio.Group>
                    </JdForm.Item>
                    <JdForm.Item hasFeedback name="groupUsers" style={{ marginTop: '4px' }} label="Group Users" rules={[{ type: 'array', whitespace: true, required: true, message: 'Enter Group Users' }]}>
                        <JdSelect placeholder='Enter Group Users' mode="multiple" name="Group Users" style={{ width: '100%', marginTop: '4px' }} options={options} />
                    </JdForm.Item>
                </JdForm>
            </div>
        </JDModal>
    );
};

export default NewGroup;