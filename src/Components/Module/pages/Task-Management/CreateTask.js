import React from 'react'
import { TaskManageWrapper, NewTaskWrapper } from './Task-ManagementStyle';
import { JDDescriptions, JdFormComponents, JdUpload, Icons, JdSelect, JdOption, JdDatepicker, JdDraft } from '../../components/Index';
import { Link } from 'react-router-dom'
import { Form } from 'antd';


const { JdButton, JdForm, JdInput, JdNumber } = JdFormComponents

export default function CreateTask() {
    const [form] = Form.useForm();
    const propsmaltiy = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        showUploadList: {
            showRemoveIcon: true,
            removeIcon: <Icons type={'close'} />,
        },
    }
    const onCreate = values => {
        window.location.assign('/ZeronSec/Task-Management')
    }
    const Status = [{ value: 'Not Started' }, { value: 'Completed' }, { value: 'In Progress' }, { value: 'Working On' }, { value: 'Submited' }];
    const Priority = [{ value: 'High' }, { value: 'Normal' }, { value: 'Low' }];
    return (
        <TaskManageWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="New Task" />
                <Link to='/ZeronSec/Task-Management'>
                    <JdButton tital='Cancel' className='Closebtn' />
                </Link>
                <JdButton tital='Save' onClick={() => { form.validateFields().then((values) => { onCreate(values); }).catch((info) => { console.log('Validate Failed:', info); }); }} />
            </div>
            <NewTaskWrapper>
                <div className='d-flex Caont' style={{ marginTop: '20px' }}>
                    <div className='Content' style={{ width: '65%' }}>
                        <span className='Tital'>Details</span>
                        <div style={{ height: '235px', overflow: 'auto', marginTop: '-17px', paddingTop: '3px' }}>
                            <JdForm form={form} className='FormC' wrapperCol={{ span: 20 }}>
                                <JdForm.Item hasFeedback label="Task Subject" name="TaskSubject" rules={[{ required: true, message: 'Please Enter Task Subject!', whitespace: true }]}>
                                    <JdInput placeholder='Please Enter Task Subject!' />
                                </JdForm.Item>
                                <JdForm.Item hasFeedback label="Project Name" name="ProjectName" rules={[{ required: true, message: 'Please Enter Project Name!', whitespace: true }]}>
                                    <JdInput placeholder='Please Enter Project Name!' />
                                </JdForm.Item>
                                <JdForm.Item label="Task Priority" name="Priority" >
                                    <JdSelect className='ant-col-6' style={{ minWidth: '100px' }} defaultValue={'Normal'}>
                                        {Priority.map((d, i) => (
                                            <JdOption key={i} value={d.value}><Icons style={{ marginRight: '10px' }} type={d.value} />{d.value}</JdOption>))}
                                    </JdSelect>
                                </JdForm.Item>
                                <JdForm.Item label="Assigned To" name="AssignedTo" >
                                    <JdSelect className='ant-col-10' style={{ minWidth: '200px' }} defaultValue={'Normal'} options={Priority} />
                                </JdForm.Item>

                            </JdForm>
                        </div>
                    </div>
                    <div className='Content' style={{ width: '35%' }}>
                        <span className='Tital'>Progress</span>
                        <div style={{ height: '224px', overflow: 'auto', marginTop: '-10px' }}>
                            <JdForm form={form} className='FormC' style={{ paddingTop: '10px' }}>
                                <JdForm.Item label="Status" className='Labalset' rules={[{ required: true, message: 'Please Select Status!', whitespace: true }]}>
                                    <JdSelect defaultValue={'Not Started'} options={Status} />
                                    <JdNumber
                                        defaultValue={0}
                                        min={0}
                                        max={100}
                                        formatter={value => `${value}%`}
                                        parser={value => value.replace('%', '')}
                                    />
                                </JdForm.Item>
                                <div className='Datepiker'>
                                    <div className='d-flex' style={{ marginBottom: '15px' }}>
                                        <span style={{ minWidth: '50%', paddingLeft: '10px' }}>Start Date :</span>
                                        <span style={{ minWidth: '50%' }}>Due Date :</span>
                                    </div>
                                    <JdForm.Item name='DatePicker' rules={[{ required: true, message: 'Please Select Date!' }]}>
                                        <JdDatepicker suffixIcon={<Icons type='DatePicker' />} style={{ width: '100%' }} showTime />
                                    </JdForm.Item>
                                </div>
                                <div style={{ paddingLeft: '20px' }} className='TextStyle'>
                                    <div style={{ paddingLeft: '10px' }}>
                                        <span>Task Verifier :</span>
                                    </div>
                                    <Icons type='author' style={{ margin: '0px 10px', lineHeight: '40px' }} />
                                    <span className='Author'>Jenish.D</span>
                                </div>
                            </JdForm>
                        </div>
                    </div>
                </div>
                <div className='BotCont' style={{ height: '130px', width: 'calc(100vw - 150px)' }}>
                    <span className='Tital'>Attachments</span>
                    <div style={{ margin: '10px' }} className='Up'>
                        <JdUpload style={{ display: 'contents' }} multiple={true} {...propsmaltiy}>
                            <JdButton className='SelectBTN' name='ViewImg' style={{ marginRight: '5px' }} tital='Select' />
                        </JdUpload>
                    </div>
                </div>
                <div className='BotCont' style={{ height: 'calc(100vh - 608px)', width: 'calc(100vw - 150px)', marginTop: '20px', paddingBottom: '22px' }}>
                    <span className='Tital'>Other</span>
                    <div style={{ height: '100%', overflow: 'auto', marginTop: '-10px' }}>
                        <JdDraft />
                    </div>
                </div>
            </NewTaskWrapper>
        </TaskManageWrapper>
    )
}
