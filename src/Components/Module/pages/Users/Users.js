import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserWrapper } from './UserStyle';
import { userGet, userRemove, userAdd, UserUpdate, UserFind } from '../../../../Core/Redux/User/UserAction'
import { Icons, JDTable, JDDescriptions, JDTooltip, JDSpace, JdFormComponents } from '../../components/Index'
import DeleteListUser from './DeleteListUser'
import AddUser from './AddUser'

const { JdButton } = JdFormComponents;
const Users = () => {
    const dispatch = useDispatch()
    const Users = useSelector(state => state.user_BE)
    const [ModalVar, SetModalVar] = useState({ CreateM: false, EditM: false, DeleteM: false })
    const [SelectData, SetSelectData] = useState(null)
    const [Edit, SetEdit] = useState([])
    // Modal Open and Off Effect
    useEffect(() => {
        dispatch(userGet())
    }, [dispatch])
    
    useEffect(() => {
        if (Users.Find !== undefined) {
            SetEdit(Users.Find)
            SetModalVar({ CreateM: true, EditM: true })
        }
        if (Users.getData) { CloseModal() }
    }, [Users.getData, Users.Find])

    // open modal all 
    const Delete = (e) => {
        SetSelectData(e)
        SetModalVar({ DeleteM: true })
    }
    const edit = (data) => {
        dispatch(UserFind(data.tokenuser))
    }
    const AddModal = () => {
        SetModalVar({ CreateM: true })
    }
    // action call in redux
    const UseAddAction = (values) => {
        dispatch(userAdd(values))
    }
    const DeleteModal = () => {
        dispatch(userRemove(SelectData.tokenuser))
    }
    const editdata = (values) => {
        dispatch(UserUpdate(values, Edit.tokenuser))
    }
    // modal close all
    const CloseModal = () => {
        SetModalVar({ CreateM: false, EditM: false, DeleteM: false })
    }
    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'fullname',
            key: 'fullname',
            sorter: ((a, b) => a.firstName.localeCompare(b.firstName)),
            render: (i, fullname) => (
                <JDSpace size="middle" key={i}>
                    {fullname.firstName + " " + fullname.lastName}
                </JDSpace>
            ),
            width: 80,
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
            width: 70,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Email',
            render: (i) => (
                <JDTooltip key={i} placement="bottom" title={i.length > 20 ? i : null}>
                    {i}
                </JDTooltip>
            ),
            dataIndex: 'email',
            key: 'email',
            width: 60,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Contact',
            dataIndex: 'contact',
            key: 'contact',
            width: 40,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'User ID',
            dataIndex: 'username',
            key: 'username',
            width: 40,
            ellipsis: {
                showTitle: false,
            },
        },
        {
            title: 'Created Time',
            dataIndex: 'createdTime',
            key: 'createdTime',
            width: 45,
            ellipsis: {
                showTitle: false,
            },
            render: createdTime => (
                <JDTooltip placement="topLeft" title={createdTime}>
                    {createdTime}
                </JDTooltip>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            width: 30,
            ellipsis: true,
            render: (e, d) => (
                <JDSpace size="middle" key='0'>
                    <JDTooltip placement="bottom" key='0' title={'Edit User'}>
                        <Icons type='Edit' style={{ marginRight: '5px' }} onClick={() => edit(d)} />
                    </JDTooltip>
                    <JDTooltip placement="bottom" key='1' title={'Delete User'}>
                        <Icons data-test='deleteUser' type='Delete' style={{ marginRight: '5px' }} onClick={() => Delete(e)} />
                    </JDTooltip>
                </JDSpace>
            )
        },
    ];
    return (
        <UserWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="User" />
                <JdButton tital='Create' className='ant-btn' data-test='AddUser' onClick={AddModal} />
                <AddUser data-test='EditUser' clr={Users.getData} loading={Users.status} visible={ModalVar.CreateM} NameModal={ModalVar.EditM ? 'Edit User' : 'New User'} Data={ModalVar.EditM ? Edit : null} onCreate={ModalVar.EditM ? editdata : UseAddAction} close={CloseModal} />
            </div>
            <div>
                <div>
                    <JDTable
                        columns={columns}
                        dataSource={Users.user === undefined ? null : Users.user}
                        rowKey='token'
                        bordered={false}
                        pagination={{ pageSize: 15 }}
                        scroll={{ x: 'calc(600px + 50%)', y: 'calc(100vh - 260px)' }}
                        loading={Users.status}
                    />
                    <DeleteListUser loading={Users.status} Delete={DeleteModal} Privew={ModalVar.DeleteM} data-test='CloseModal' close={CloseModal} data={SelectData} />
                </div>
            </div>
        </UserWrapper>
    );
}
export default Users;