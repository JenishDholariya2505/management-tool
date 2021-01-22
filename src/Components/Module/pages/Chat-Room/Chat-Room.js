import React, { Component } from 'react'
import { ChartRoomWrapper } from './Chat-RoomStyle';
import { JDDescriptions, JdFormComponents, JdChart } from '../../components/Index';

const { JdSunburst } = JdChart
const { JdButton } = JdFormComponents

export default class ChatRoom extends Component {
    render() {
        return (
            <ChartRoomWrapper>
                <div className='d-flex Box'>
                    <JDDescriptions title="ChatRoom" />
                    <JdButton tital='Create' />
                </div>
                <div>
                    <div id='sunburst' style={{ width: '900px' }} />
                    <div id='Tooltip' />
                    <JdSunburst />
                </div>
            </ChartRoomWrapper>
        )
    }
}
