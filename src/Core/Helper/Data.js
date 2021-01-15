const authData = localStorage.getItem('Token')
export const Theme = localStorage.getItem('Mode')
export const auth = authData ? authData : null
export const Panel = {
    Modual: ['Users', 'Use-Groups', 'Blog', 'Chat-Room', 'Task-Management', 'Notes', 'Meeting']
}
export const columns = [
    {
        title: 'GroupName',
        dataIndex: 'groupName',
        key: 'groupName',
        width: 100,
    },
    {
        title: 'GroupType',
        dataIndex: 'groupType',
        key: 'groupType',
        width: 150,
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: 'CreatedAt',
        dataIndex: 'createdAt',
        key: 'createdAt',
        width: 200,
        filterMultiple: false,
    },
    {
        title: 'Token',
        dataIndex: 'token',
        key: 'token',
        width: 80,
    },
];
export const MeetingData = {
    "owner": [
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "1"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "2"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "3"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "4"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "5"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "6"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "7"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "8"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "9"
        },
        {
            "subject": "Demo Meeting Subject",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Smith",
            "meetingToken": "10"
        },
    ],
    "invited": [
        {
            "subject": "Demo Meeting Subject As You invited There",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Deo",
            "meetingToken": "1"
        },
        {
            "subject": "Demo Meeting Subject As You invited There",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Deo",
            "meetingToken": "2"
        },
        {
            "subject": "Demo Meeting Subject As You invited There",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Deo",
            "meetingToken": "3"
        },
        {
            "subject": "Demo Meeting Subject As You invited There",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Deo",
            "meetingToken": "4"
        },
        {
            "subject": "Demo Meeting Subject As You invited There",
            "description": "Demo Meeting content just for display purpose only, If overflow occur then we can ellipse it and showing with three dots that are continueing to display this things same as showing up here ...",
            "startTime": "12 Jamuary 2021, 06:33",
            "meetingOwner": "John Deo",
            "meetingToken": "5"
        }
    ]
}
