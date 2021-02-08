import React, { useEffect, useState } from 'react'
import { ChartRoomWrapper } from './Chat-RoomStyle';
import { JDDescriptions, JdFormComponents, JdChart, Icons, JDTooltip } from '../../components/Index';

const { JdSunburst, Tree } = JdChart
const { JdButton } = JdFormComponents
export default function ChatRoom() {
    return (

        <ChartRoomWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="ChatRoom" />
                <JdButton tital='Create' />
            </div>
            <div className='d-flex'>
                <div className='Chart'>
                    <div className='d-flex'>
                        <JDTooltip placement="bottom" title='Rest'>
                            <Icons id="reset" type='Arrow' style={{ height: 'fit-content', color: 'white', cursor: 'pointer' }} />
                        </JDTooltip>
                        <span className='Title'>Sunburst</span>
                    </div>
                    <div className='d-flex'>
                        <div id='legend1' />
                        <div id='sunburst' />
                        <JdSunburst />
                        <div id='legend2' />
                    </div>
                </div>
                <div className='Chart'>
                    <div className='d-flex'>
                        <span className='Title'>Collapsible Tree</span>
                    </div>
                    <div className='d-flex'>
                        <div id='tree' />
                        <Tree />
                    </div>
                </div>
            </div>
        </ChartRoomWrapper>
    )
}

