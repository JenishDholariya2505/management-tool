import React from 'react'
import { TaskManageWrapper } from './Task-ManagementStyle';
import { JDDescriptions, JdFormComponents, JdChart } from '../../components/Index';
import { Link } from 'react-router-dom'

const { JdButton } = JdFormComponents
const { NetworkChart } = JdChart
export default function TaskManagement() {

    return (
        <TaskManageWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="Task-Management" />
                <Link to='/ZeronSec/Task-Management/Add'>
                    <JdButton tital='Create' />
                </Link>
            </div>
            <div id='net'></div>
            <div id='tooltipe'></div>
            <NetworkChart />
        </TaskManageWrapper>
    )
}
