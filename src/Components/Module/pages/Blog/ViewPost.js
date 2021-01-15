import React, { Component } from 'react'
import { JDModal, Icons } from '../../components/Index'

export default class ViewPost extends Component {

    render() {
        const { ModalShow, OffAndOn, data } = this.props
        return (
            <div>
                <JDModal centered={true} Tital={'View Post'} modalField={ModalShow} closebtn={true} onCancel={OffAndOn} Footer={false}>
                    {
                        data === null ? null :
                            <div className='Modal' style={{ width: '938px', height: 'calc(100vh - 435px)', padding: '5px 30px' }}>
                                <span className='BodyText'>First Sample Post For View</span>
                                <div className='d-flex'>
                                    <img src={`/${data.coverImg}`} alt={data.coverImg} style={{
                                        width: 'calc(100vw - 104px)',
                                        height: '254px'
                                    }} />
                                    <div className='imageSaid'>
                                        <span className='Tital'>Created On:</span>
                                        <span className='Data'>{data.createdTime}</span>
                                        <span className='Tital'>Author:</span>
                                        <span className='Data'>Jenish Dholariya</span>
                                        <span className='Tital'>Hash Tags:</span>
                                        <span className='Data'>#Tag1, #Reactjs, #usecases, #training, #trending, #postoftheday</span>
                                    </div>
                                </div>
                                <div style={{paddingTop: '15px'}}>
                                    <span className='DataT' >This is sample post created for design make sure if conetent is bigger then scroll will be automatic generated.</span>
                                    <span className='d-flex Data' style={{marginTop: '10px'}}>This is sample post created for design make sure if conetent is bigger then scroll will be automatic generated This is sample post created
                                    for design make sure if conetent is bigger then scroll will be automatic generated This is sample post created for design make sure if
                                    conetent is bigger then scroll will be automatic generated</span>
                                    <div style={{ display: 'grid', marginTop: '15px' }}>
                                        <span className='Tital'>Attachments:</span>
                                        <div className='DownloadD' style={{marginTop: '15px'}}>
                                            <span className='Data'>{data.coverImg}</span>
                                            <Icons type={'Download'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </JDModal>
            </div>
        )
    }
}
