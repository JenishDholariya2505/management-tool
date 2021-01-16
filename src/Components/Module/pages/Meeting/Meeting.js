import React, { useState, useEffect } from 'react'
import { MeetingWrapper } from './MeetingStyle'
import { JDDescriptions, JdFormComponents, Icons } from '../../components/Index';
import { MeetingData } from '../../../../Core/Helper/Data';
import { Link } from 'react-router-dom'
import MeetingRemove from './MeetingRemove'

const { JdButton } = JdFormComponents

export default function Meeting() {
    const [ModalVar, SetModalVar] = useState({ Show: false, Mearg: false })
    const [RemoveData, SetRemoveData] = useState([])
    useEffect(() => {
        document.getElementById('root').style.filter = ModalVar.Show || ModalVar.Mearg ? 'blur(10px)' : 'blur(0px)';
    }, [ModalVar])

    const Remove = (Arranged) => {
        SetRemoveData({ Arranged })
        SetModalVar({ Show: true })
    }
    const schedule = (Arranged) => {
        SetRemoveData({ Arranged })
        SetModalVar({ Mearg: true })
    }

    const removeaction = () => {
        console.log('removeaction')
    }
    const RescheduleAction = () => {
        console.log('RescheduleAction')
    }

    const Close = () => {
        SetModalVar({ Show: false, Mearg: false })
    }
    return (
        <MeetingWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="Meetings" />
                <Link to='/ZeronSec/Meeting_Create'>
                    <JdButton tital='Create' />
                </Link>
            </div>
            <div className='Contet'>
                <div className='Arranged'>
                    <span className='Title'>Arranged</span>
                    <div className='Arranged_Data'>
                        {
                            MeetingData.owner.map((Arranged, index) => (
                                <div key={index} className='ArrangedCard'>
                                    <span className='CardHader'>{Arranged.subject}</span>
                                    <span className='CardBody'>{Arranged.description}</span>
                                    <div className='CardFooter'>
                                        <div className='Left'>
                                            <span className='FTitle'>{Arranged.startTime}</span>
                                            <span className='FTitle'>{Arranged.meetingOwner}</span>
                                        </div>
                                        <div className='Right'>
                                            <Icons className='IconsM' onClick={() => schedule(Arranged)} style={{ cursor: 'pointer' }} type='Job_Time' />
                                            <Icons className='IconsM' type='Edit' />
                                            <Icons onClick={() => Remove(Arranged)} className='IconsM' type='Delete' style={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <MeetingRemove Privew={ModalVar.Show || ModalVar.Mearg} Mearg={ModalVar.Mearg} close={Close} Delete={ModalVar.Mearg ? RescheduleAction : removeaction} loading={true} data={RemoveData} />
                    </div>
                </div>
                <div className='Invited'>
                    <span className='Title'>Invited</span>
                    <div className='Arranged_Data'>
                        {
                            MeetingData.invited.map((Arranged, index) => (
                                <div key={index} className='ArrangedCard'>
                                    <span className='CardHader'>{Arranged.subject}</span>
                                    <span className='CardBody'>{Arranged.description}</span>
                                    <div className='CardFooter'>
                                        <div className='Left'>
                                            <span className='FTitle'>{Arranged.startTime}</span>
                                            <span className='FTitle'>{Arranged.meetingOwner}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </MeetingWrapper>
    )
}
