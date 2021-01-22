import React, { useState, useEffect } from 'react'
import { NoteWrapper, NoteWrapperNote } from './NotesStyle'
import { JDDescriptions, JdFormComponents, Icons, JDTooltip } from '../../components/Index';
import { Input, Form } from 'antd';
import NotesRemove from './Delete'
const { JdButton, JdForm } = JdFormComponents

export default function Notes() {
    const [form] = Form.useForm();
    const [Note, setNote] = useState({})
    const [Final, setFinal] = useState([])
    const [Remove, setRemove] = useState(false)
    const [Index, setIndex] = useState(null)
    const [EditNoteD, setEditNoteD] = useState(false)

    useEffect(() => {
        document.getElementById('root').style.filter = Remove ? 'blur(10px)' : 'blur(0px)';
    }, [Remove])

    const Dataset = (e) => {
        // let j = e.target.value.split(`\n`)
        // let d = j.join(`@`)
        // let x = d.split(`@`)
        // console.log(x, 'asd')
        setNote({
            User: 'John Smith',
            Time: '12 January 2021, 06:33',
            Note: e.target.value
        })
        // console.log(e.target.value)
        // setNote(e.target.value)
    }
    const CreateNote = () => {
        console.log(Note)
        // console.log(typeof(Note))
        Final.push(Note)
        console.log(Final)
        setNote({})
        form.resetFields();
    }
    const RemoveNoteModal = (i) => {
        setIndex(i)
        setRemove(true)
    }
    const Close = () => {
        setRemove(false)
    }
    const deletenote = () => {
        let Remove = Final
        Remove.splice(Index, 1);
        setFinal(Remove)
        Close()
    }
    const EditNote = (data, i) => {
        setIndex(i)
        setEditNoteD(true)
        form.setFieldsValue({
            textNote: data.Note
        });
    }
    const Update = () => {
        Final[Index]['Note'] = Note.Note
        form.resetFields();
        setEditNoteD(false)
        setNote({})
    }
    return (
        <NoteWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="Notes" />
            </div>
            <NoteWrapperNote>
                <div className='Note'>
                    <span className='title'>{EditNoteD ? 'Edit Note' : 'New Note'}</span>
                    <div className='overflow'>
                        <JdForm form={form} name="basic" layout="vertical" initialValues={{ remember: true }}>
                            <div className='over'>
                                <JdForm.Item name='textNote'>
                                    <Input.TextArea className='TextEditor' name='textNote' onChange={Dataset} autoSize={{ minRows: 10 }} placeholder="Add Text To Create Note" />
                                </JdForm.Item>
                            </div>
                        </JdForm>
                        <div className='cratebtn'>
                            <JdButton tital={EditNoteD ? 'Update' : 'Create'} onClick={EditNoteD ? Update : CreateNote} />
                        </div>
                    </div>
                </div>
                <div className='ShowNote'>
                    <div className='MyNotes'>
                        <span className='title'>My Notes</span>
                        <div className='NoteData'>
                            {
                                Final.map((d, i) => (
                                    <div key={i} className='Card'>
                                        <div className='Body'>
                                            {
                                                d.Note.split(/\n/)
                                                    .map((text, index) => (
                                                        <div key={index} className='bodytext'>{text}</div>
                                                    ))
                                            }
                                        </div>
                                        <div className='Footer'>
                                            <div className='userdate'>
                                                <span>{d.Time}</span>
                                                <span>{d.User}</span>
                                            </div>
                                            <div className='icons'>
                                                <JDTooltip placement="bottom" title='Edit'>
                                                    <Icons type='Edit' onClick={() => EditNote(d, i)} />
                                                </JDTooltip>
                                                <JDTooltip placement="bottom" title='Delete'>
                                                    <Icons type='Delete' onClick={() => RemoveNoteModal(i)} />
                                                </JDTooltip>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <NotesRemove Privew={Remove} close={Close} Delete={deletenote} loading={false} />
                    <div className='MyNotes'>
                        <span className='title'>Shared With Me</span>
                        <div className='NoteData'>
                            <div className='Card'>
                                <div className='Body'>
                                    <span className='bodytext'>
                                        New Note is about to create following things on 13th Jan 2021 in project:
                                   </span>
                                    <span className='bodytext'>
                                        - API Call Of Modules User And Group and
                                   </span>
                                </div>
                                <div className='Footer'>
                                    <div className='userdate'>
                                        <span>12 January 2021, 06:33</span>
                                        <span>John Smith</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NoteWrapperNote>
        </NoteWrapper >
    )
}
