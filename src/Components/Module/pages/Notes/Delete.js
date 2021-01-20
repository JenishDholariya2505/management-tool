import React from 'react'
import { JDModal, JdFormComponents } from '../../components/Index'

const { JdButton } = JdFormComponents
export default function NotesRemove({ Privew, close, Delete, loading }) {
    return (
        <div>
            <JDModal centered={true} Tital={'Delete This Note'} key='0' modalField={Privew} SecondBTN={<JdButton className='Close' key='1' onClick={close} tital='Cancle' />} MainBTN={<JdButton className='MainBTN' key='2' loading={loading} onClick={Delete} tital={'Delete'} />} closebtn={false} Footer={true}>
                <div className='Modal' style={{ width: '400px' }}>
                    <span className='BodyText'>{'Are you sure to to delete this note?'}</span>
                </div>
            </JDModal>
        </div>
    )
}