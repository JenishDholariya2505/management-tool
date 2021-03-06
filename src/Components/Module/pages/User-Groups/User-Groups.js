import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserGroupWrapper } from './User-GroupsStyle';
import { groupGet, createGroup, deleteGroup, findGroup, updateGroup, getUsers } from '../../../../Core/Redux/Group/GroupAction';
import { JDTable, JDDescriptions, JDTooltip, JDSpace, Icons, JdFormComponents } from '../../components/Index'
import NewGroup from './NewGroup'
import DeleteModalSet from './Delete';

const { JdButton } = JdFormComponents;

const UserGroups = () => {
    const dispatch = useDispatch()
    let ListGroup = useSelector(state => state.group_BE)
    const [ModalVar, SetModalVar] = useState({ CreateM: false, EditM: false, DeleteM: false })
    const [DeleteToken, SetDeleteToken] = useState(null)
    const [Edit, SetEdit] = useState([])
    useEffect(() => {
        dispatch(groupGet())
        dispatch(getUsers())
    }, [dispatch])
    useEffect(() => {
        if (ListGroup.Find !== undefined) {
            SetEdit(ListGroup.Find)
            SetModalVar({ CreateM: true, EditM: true })
        }
        if (ListGroup.getData) { CloseModal() }
    }, [ListGroup.getData, ListGroup.Find])
    console.log(ListGroup, 'ListGroup')
    useEffect(() => {
        document.getElementById('root').style.filter = ModalVar.CreateM || ModalVar.EditM || ModalVar.DeleteM ? 'blur(10px)' : 'blur(0px)';
    }, [ModalVar])

    const AddModal = () => {
        SetModalVar({ CreateM: true })
    }
    const UseAddAction = (values) => {
        let group = values
        values['groupUsers'] = values.groupUsers
        dispatch(createGroup(group))
    }
    const Delete = (e) => {
        SetDeleteToken(e)
        SetModalVar({ DeleteM: true })
    }
    const EditModal = (e) => {
        dispatch(findGroup(e.token))
    }
    const DeleteAction = () => {
        dispatch(deleteGroup(DeleteToken.token))
    }
    const EditAction = (value) => {
        dispatch(updateGroup(ListGroup.Find.token, value))
    }
    const CloseModal = () => {
        SetModalVar({ CreateM: false, EditM: false, DeleteM: false })
    }
    const columns = [
        {
            title: 'GroupName',
            dataIndex: 'groupName',
            key: 'groupName',
            sorter: ((a, b) => a.groupName.localeCompare(b.groupName)),
            width: 100,
            align: 'center',
        },
        {
            title: 'GroupType',
            dataIndex: 'groupType',
            key: 'groupType',
            width: 150,
            align: 'center',
        },
        {
            title: 'GroupUsers',
            dataIndex: 'groupUsers',
            key: 'groupUsers',
            width: 200,
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            width: 80,
            align: 'center',
            render: (e) => (
                <JDSpace size="middle">
                    <JDTooltip placement="bottom" title={'Edit Group'}>
                        <Icons type='Edit' style={{ marginRight: '5px' }} onClick={() => EditModal(e)} />
                    </JDTooltip>
                    <JDTooltip placement="bottom" title={'Delete Group'}>
                        <Icons type='Delete' style={{ marginRight: '5px' }} onClick={() => Delete(e)} />
                    </JDTooltip>
                </JDSpace>
            ),
        },
    ];
    return (
        <UserGroupWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="User-Groups" />
                <JdButton tital='Create' className='ant-btn' onClick={AddModal} />
                <NewGroup loading={ListGroup.status} clr={ListGroup.getData} data={ModalVar.EditM ? Edit : null} User={ListGroup.User} visible={ModalVar.CreateM} onCreate={ModalVar.EditM ? EditAction : UseAddAction} NameModal={ModalVar.EditM ? 'Edit User' : 'New User'} close={CloseModal} />
            </div>
            <div>
                <div>
                    <JDTable
                        rowKey='token'
                        columns={columns}
                        dataSource={ListGroup.group}
                        bordered={false}
                        pagination={{ pageSize: 15 }}
                        scroll={{ x: 'calc(600px + 50%)', y: 'calc(100vh - 260px)' }}
                        loading={ListGroup.status}
                    />
                    <DeleteModalSet loading={ListGroup.status} Delete={DeleteAction} Privew={ModalVar.DeleteM} close={CloseModal} data={DeleteToken} />
                </div>
            </div>
        </UserGroupWrapper>
    );
}
export default UserGroups;