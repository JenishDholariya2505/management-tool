import React from 'react'
import { TaskManageWrapper } from './Task-ManagementStyle';
import { JDDescriptions, JdFormComponents } from '../../components/Index';
import { Link } from 'react-router-dom'


const { JdButton } = JdFormComponents
export default function TaskManagement() {

    return (
        <TaskManageWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="Task-Management" />
                <Link to='/ZeronSec/Task-Management/Add'>
                    <JdButton tital='Create' />
                </Link>
            </div>
        </TaskManageWrapper>
    )
}
