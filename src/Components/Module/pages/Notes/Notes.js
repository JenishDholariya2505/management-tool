import React from 'react'
import { NoteWrapper } from './NotesStyle'
import { JDDescriptions, JdFormComponents } from '../../components/Index';
const { JdButton } = JdFormComponents

export default function Notes() {
    return (
        <NoteWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="Notes" />
                <JdButton tital='Create' />
            </div>
        </NoteWrapper>
    )
}
