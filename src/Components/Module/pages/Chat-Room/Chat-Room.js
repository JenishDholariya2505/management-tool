import React, { Component } from 'react'
import { ChartRoomWrapper } from './Chat-RoomStyle';
import { JDDescriptions, JdFormComponents, JdChart } from '../../components/Index';

const { JdSunburst } = JdChart
const { JdButton } = JdFormComponents

export default class ChatRoom extends Component {
    render() {
        console.log('asdasdasda')
        return (
            <ChartRoomWrapper>
                <div className='d-flex Box'>
                    <JDDescriptions title="ChatRoom" />
                    <JdButton tital='Create' />
                </div>
                <div className='Chart'>
                    <div id='legend1' />
                    {/* <div id='sunburst' /> */}
                    <JdSunburst />
                    <div id='legend2' />
                </div>
            </ChartRoomWrapper>
        )
    }
}
