import React from 'react'
import { MeetingWrapper, MeetingCreateWrapper } from './MeetingStyle'
import { JDDescriptions, JdFormComponents, Icons } from '../../components/Index';
import { Link } from 'react-router-dom'
const { JdButton } = JdFormComponents

export default function CreateMeeting() {
    return (
        <div>
            <MeetingWrapper>
                <div className='d-flex Box'>
                    <JDDescriptions title="New Meeting" />
                    <JdButton tital='Save' />
                    <Link to='/ZeronSec/Meeting'>
                        <JdButton tital='Cancle' className='Closebtn' />
                    </Link>
                </div>
            </MeetingWrapper>
            <MeetingCreateWrapper>
                <div className='Details'>
                    <span className='Tital'>Details</span>
                </div>
                
            </MeetingCreateWrapper>
        </div>
    )
}
