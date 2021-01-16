import React, { useState } from 'react'
import { MeetingWrapper, MeetingCreateWrapper } from './MeetingStyle'
import { JDDescriptions, JdFormComponents, Icons, JdDatepicker, JdUpload, JdSelect } from '../../components/Index';
import { Link } from 'react-router-dom'
import { Form, Input } from 'antd'
const { JdButton, JdForm, JdInput } = JdFormComponents
const { TextArea } = Input;

export default function CreateMeeting() {
    const [form] = Form.useForm();
    const [Chip, setChip] = useState([])
    const onCreate = values => {
        window.location.assign('/ZeronSec/Meeting')
    }
    const propsmaltiy = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type={'close'} />,
        },
    }
    const handleProvinceChange = (value) => {
        let group = value
        setChip(group)
    }
    const Remove = (i) => {

        setChip(Chip.splice(i, 0))
        setChip(Chip.filter(d => d !== i))
    }
    const User = [{ value: 'High' }, { value: 'Normal' }, { value: 'Low' }];
    return (
        <div>
            <MeetingWrapper>
                <div className='d-flex Box'>
                    <JDDescriptions title="New Meeting" />
                    <JdButton onClick={() => { form.validateFields().then((values) => { onCreate(values); }).catch((info) => { console.log('Validate Failed:', info); }); }} tital='Save' />
                    <Link to='/ZeronSec/Meeting'>
                        <JdButton tital='Cancle' className='Closebtn' />
                    </Link>
                </div>
            </MeetingWrapper>
            <MeetingCreateWrapper>
                <div className='Details'>
                    <span className='Tital'>Details</span>
                    <JdForm form={form} style={{ padding: '0px 30px' }}>
                        <JdForm.Item hasFeedback label="Meeting Subject :" name="meetingSubject" rules={[{ required: true, message: 'Enter Meeting Subject', whitespace: true }]}>
                            <JdInput placeholder='Enter Meeting Subject' />
                        </JdForm.Item>
                        <JdForm.Item hasFeedback label="Description" name="TaskSubject" rules={[{ required: true, message: 'Enter Meeting Description', whitespace: true }]}>
                            {/* <JdInput placeholder='Enter Meeting Description' /> */}
                            <TextArea name='address' autoSize={{ minRows: 3, maxRows: 4 }} placeholder="Enter Address" />
                        </JdForm.Item>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <JdForm.Item className='Description' hasFeedback label="Project Name" name="projectName" rules={[{ required: true, message: 'Enter Project Name', whitespace: true }]}>
                                <JdInput placeholder='Enter Project Name' />
                            </JdForm.Item>
                            <JdForm.Item className='authorMain' hasFeedback label="Meeting Owner" name="meetingOwner">
                                <span className='d-flex'>
                                    <Icons style={{ top: '2px', position: 'relative' }} type='author' />
                                    <span className='author'>Demo User</span>
                                </span>
                            </JdForm.Item>
                        </div>
                        <JdForm.Item style={{ width: '50vw', display: 'flex' }} hasFeedback label="Meeting Duration" name="DatePicker" rules={[{ required: true, message: 'Enter Meeting Duration' }]}>
                            <JdDatepicker suffixIcon={<Icons type='DatePicker' />} style={{ width: '100%' }} showTime />
                        </JdForm.Item>
                    </JdForm>
                </div>
                <div className='Details' style={{ padding: '10px 15px', height: '119px' }}>
                    <span className='Tital'>Attendees</span>
                    <JdSelect
                        placeholder='Select Users'
                        mode="multiple"
                        showArrow
                        value={Chip}
                        onChange={handleProvinceChange}
                        className='ant-col-10'
                        style={{ minWidth: '200px' }}
                        options={User}
                    />
                    <div className='chip' style={{ marginTop: '15px' }}>
                        {
                            Chip.map((d, i) => (
                                <div key={i} className='chipbody'>
                                    <span>{d}</span>
                                    <span>{<Icons onClick={() => Remove(d)} style={{ margin: '3px 0px 0px -10px', position: 'relative', cursor: 'pointer' }} type='close' />}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='Details' style={{ height: '119px' }} >
                    <span className='Tital'>Attachments</span>
                    <div className='Up' >
                        <JdUpload style={{ display: 'contents' }} multiple={true} {...propsmaltiy}>
                            <JdButton className='SelectBTN' name='ViewImg' style={{ marginRight: '5px' }} tital='Select' />
                        </JdUpload>
                    </div>
                </div>
                <div className='Details' style={{ height: '119px' }}>
                    <span className='Tital'>Meeting Notes</span>
                    <div className='Up' >
                        <JdUpload style={{ display: 'contents' }} multiple={true} {...propsmaltiy}>
                            <JdButton className='SelectBTN' name='ViewImg' style={{ marginRight: '5px' }} tital='Add' />
                        </JdUpload>
                    </div>
                </div>
            </MeetingCreateWrapper>
        </div>
    )
}
