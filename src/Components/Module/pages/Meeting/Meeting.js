import React from 'react'
import { MeetingWrapper } from './MeetingStyle'
import { JDDescriptions, JdFormComponents, Icons } from '../../components/Index';
import { MeetingData } from '../../../../Core/Helper/Data';
import { Link } from 'react-router-dom'
const { JdButton } = JdFormComponents

export default function Meeting() {
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
                                            <Icons className='IconsM' type='Job_Time' />
                                            <Icons className='IconsM' type='Edit' />
                                            <Icons className='IconsM' type='Delete' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='Invited'>
                    <span className='Title' style={{ marginLeft: '15px' }}>Invited</span>
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
