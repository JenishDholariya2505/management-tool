import React from 'react'
import { JDModal, JdFormComponents, Icons, JdDatepicker } from '../../components/Index'

const { JdButton, JdForm } = JdFormComponents
export default function MeetingRemove({ Privew, close, Delete, data, loading, Mearg }) {
    const date = {
        margin: '10px 0px',
        padding: '0px'
    }
    return (
        <div>
            <JDModal centered={true} Tital={Mearg ? 'Reschedule This Meeting' : 'Delete This Meeting'} key='0' modalField={Privew} SecondBTN={<JdButton className='Close' key='1' onClick={close} tital='Cancle' />} MainBTN={<JdButton className='MainBTN' key='2' loading={loading} onClick={Delete} tital={Mearg ? 'Reschedule' : 'Delete'} />} closebtn={false} Footer={true}>
                <div className='Modal'>
                    <span className='BodyText'>{Mearg ? null : 'Are you sure to to delete this meeting?'}</span>
                    <div className='d-flex'>
                        <div>
                            <Icons type='Meeting' />
                        </div>
                        <span className='FileName'>{data.Arranged === undefined ? null : data.Arranged.subject}</span>
                    </div>
                    {
                        Mearg ? <div className='Datepiker' style={date}>
                            <div className='d-flex' style={{ marginBottom: '5px' }}>
                                <span style={{ minWidth: '50%', paddingLeft: '10px' }}>Start Time :</span>
                                <span style={{ minWidth: '50%' }}>End Time :</span>
                            </div>
                            <JdForm>
                                <JdForm.Item name='DatePicker' rules={[{ required: true, message: 'Please Select Date!' }]}>
                                    <JdDatepicker suffixIcon={<Icons type='DatePicker' />} style={{ width: '100%' }} showTime />
                                </JdForm.Item>
                            </JdForm>
                        </div> : null
                    }
                </div>
            </JDModal>
        </div>
    )
}