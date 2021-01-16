import React, { Component } from 'react'
import { JDModal, Icons, JdFormComponents } from '../../components/Index'
const { JdButton } = JdFormComponents

export default class DeleteModalSet extends Component {
    render() {
        const { Privew, close, Delete, data, loading } = this.props
        return (
            <div>
                <JDModal centered={true} Tital={'Delete Post'} modalField={Privew} SecondBTN={<JdButton key='1' className='Close' onClick={close} tital='Cancle' />} MainBTN={<JdButton loading={loading} className='MainBTN' key='2' onClick={Delete} tital='Delete' />} closebtn={false} Footer={true}>
                    <div className='Modal'>
                        <span className='BodyText'>Are you sure to delete this post permenently ?</span>
                        <div className='d-flex'>
                            <div>
                                <Icons style={{ lineHeight: '24px' }} type='GroupUser' />
                            </div>
                            <span className='FileName'>{data === null ? null : data.groupName}</span>
                        </div>
                    </div>
                </JDModal>
            </div>
        )
    }
}
