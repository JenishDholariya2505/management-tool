import React, { Component } from 'react'
import { ChartRoomWrapper } from './Chat-RoomStyle';
import { JDDescriptions, JdFormComponents } from '../../components/Index';
const { JdButton } = JdFormComponents

export default class ChatRoom extends Component {
    render() {
        return (
            <ChartRoomWrapper>
                <div className='d-flex Box'>
                    <JDDescriptions title="ChatRoom" />
                    <JdButton tital='Create' />
                </div>
            </ChartRoomWrapper>
        )
    }
}
