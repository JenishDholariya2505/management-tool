import React, { Component } from 'react'
import { JDModal, Icons, JdFormComponents } from '../../components/Index'
const { JdButton } = JdFormComponents;

export default class DeleteListUser extends Component {
    render() {
        const { Privew, close, Delete, data, loading } = this.props
        return (
            <div>
                <JDModal centered={true} Tital={'Delete Post'} key='0' modalField={Privew} SecondBTN={<JdButton className='Close' key='1' onClick={close} tital='Cancle' />} MainBTN={<JdButton className='MainBTN' key='2' loading={loading} onClick={Delete} tital='Delete' />} closebtn={false} Footer={true}>
                    <div className='Modal'>
                        <span className='BodyText'>Are you sure to delete this post permenently?</span>
                        <div className='d-flex'>
                            <div>
                                <Icons type='UserOnly' />
                            </div>
                            <span className='FileName'>{data === null ? null : data.email}</span>
                        </div>
                    </div>
                </JDModal>
            </div>
        )
    }
}
