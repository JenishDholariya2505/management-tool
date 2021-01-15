import React, { useState } from 'react';
import { Form, Input } from 'antd';
import { JDModal, Icons, JdFormComponents, JdSelect, JdUpload } from '../../components/Index'
const { JdInput, JdButton, JdForm } = JdFormComponents

const { TextArea } = Input;
const children = [];

const AddCard = ({ visible, onCreate }) => {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([])
    const handleChange = info => {
        let fileList = [...info.fileList]
        fileList = fileList.slice(-1);
        fileList = fileList.map(file => {
            if (file.response) {
                file.url = file.response.url;
            }
            return file;
        });
        setFileList(fileList)
    };
    const propsmaltiy = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type={'close'} />,
        },
    }
    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange: handleChange,
        multiple: true,
        progress: {
            strokeColor: {
                '0%': '#788A97',
                '100%': '#87d068',
            },
            strokeWidth: 1,
        },
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type={'close'} />,
        },
    };
    const Close = () => {
        form.resetFields();
        onCreate()
    }
    return (
        <JDModal
            modalField={visible}
            Tital="New Post"
            Footer={true}
            onCancel={Close}
            closebtn={true}
            centered={true}
            MainBTN={<JdButton key='0' className='MainBTN' onClick={
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
            <div className='Modal' style={{ width: '473px', minHeight: 'calc(100vh - 450px)', padding: '0px 41px' }}>
                <JdForm form={form} name="basic" layout="vertical" initialValues={{ remember: true }}>
                    <JdForm.Item hasFeedback className='TitalModal' label="Post Title" name="Post Title" rules={[{ required: true, whitespace: true, message: 'Enter Post Title' }]}>
                        <JdInput placeholder='Enter Post Title' />
                    </JdForm.Item>
                    <JdForm.Item className='Selectpng' label="Post Cover Image">
                        <JdUpload className='d-flex' multiple={true} fileList={fileList} accept=".png" {...props}>
                            <JdButton className='Select' name='ViewImg' style={{ marginRight: '5px' }} tital='Select' />
                        </JdUpload>
                    </JdForm.Item>
                    <JdForm.Item hasFeedback className='ContentData' label="Post Content" name='Content' rules={[{ type: 'string', whitespace: true, required: true, message: 'Enter Post Content' }]}>
                        <TextArea name='Content' autoSize={{ minRows: 2, maxRows: 6 }} placeholder="Enter Post Content" />
                    </JdForm.Item>
                    <JdForm.Item className='UploadFile' label="Attachments">
                        <JdUpload style={{ display: 'contents' }} multiple={true} {...propsmaltiy}>
                            <JdButton className='Select' name='ViewImg' style={{ marginRight: '5px' }} tital='Select' />
                        </JdUpload>
                    </JdForm.Item>
                    <JdForm.Item  className='SelectHash' name="HashTAG" label="Hashtags" rules={[{ type: 'array', whitespace: true, required: true, message: 'Enter Hashtags' }]}>
                        <JdSelect name="HashTAG" mode="tags" style={{ width: '100%' }} placeholder="Hashtags">
                            {children}
                        </JdSelect>
                    </JdForm.Item>
                </JdForm>
            </div>
        </JDModal>
    );
};

export default AddCard