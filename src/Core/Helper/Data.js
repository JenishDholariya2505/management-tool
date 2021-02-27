const authData = localStorage.getItem('Token')
export const Theme = localStorage.getItem('Mode')
export const auth = authData ? authData : null
export const Panel = {
    Modual: ['Users', 'Use-Groups', 'Blog', 'Chat-Room', 'Task-Management', 'Notes', 'Meeting', 'NewGraph']
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
export const Gradient1 = ['#46B1E0', '#6ADBD8', '#FCD87E', '#FC8DA8', '#B49FF4', '#edde5d', '#C2FFFC', '#FFDAC7', '#EA9F92', '#46B1E0']
export const Gradient2 = ['#185AC9', '#0C7A74', '#AD7F0C', '#AD3A55', '#654FAA', '#f09819', '#9399FF', '#E7989A', '#AF452F', '#185AC9']
export const Dataset = {
    "name": "Root",
    "children": [
        {
            "name": "A1",
            "children": [
                { "name": "B1", "size": 30 },
                { "name": "B2", "size": 40 },
                {
                    "name": "B3",
                    "children": [
                        { "name": "C1", "size": 10 },
                        { "name": "C2", "size": 15 },
                    ]
                }
            ]
        },
        {
            "name": "D4",
            "children": [
                { "name": "D1", "size": 30 },
                { "name": "D2", "size": 40 },
            ]
        },
    ]
}
export const newchart = {
    name: 'Director',
    assigned: 'Kevin Murphy',
    children: [
        {
            name: 'Business Unit Manager',
            assigned: 'Andrew Hannan',
            children: [
                {
                    name: 'Developer',
                    assigned: 'Julia Zhuang'
                },
                {
                    name: 'Consulting Manager',
                    assigned: 'Joseph Paki',
                    children: [
                        {
                            name: 'Business Solutions Manager',
                            assigned: 'Maara Heather'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Anna Gao'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Mark Ngo'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Stephanie Li'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Juliana Young'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Janine Fry'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Lidia Elias'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Katrina Madill'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Walter White'
                        }
                    ]
                },
                {
                    name: 'Helpdesk Manager',
                    assigned: 'John Tanner',
                    children: [
                        {
                            name: 'Consultant',
                            assigned: 'Erryn Vleeshouwer'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Jolie Fraser'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Johnathan Chen'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Caleb Vercoe'
                        }
                    ]
                },
                {
                    name: 'Development Manager',
                    assigned: 'Paresh Deva',
                    children: [
                        {
                            name: 'Team Leader',
                            assigned: 'Mel De Soysa',
                            children: [
                                {
                                    name: 'Business Analyst',
                                    assigned: 'Grace Wang'
                                },
                                {
                                    name: 'Developer',
                                    assigned: 'Jim Hsiao'
                                },
                                {
                                    name: 'Developer',
                                    assigned: 'Neilson Ma'
                                },
                                {
                                    name: 'Developer',
                                    assigned: 'Rhys Wang'
                                },
                                {
                                    name: 'Tester',
                                    assigned: 'Smita Mahimkar'
                                },
                                {
                                    name: 'Tester',
                                    assigned: 'Akio Nakamura'
                                }
                            ]
                        },
                        {
                            name: 'Team Leader',
                            assigned: 'Krishneel Prasad',
                            children: [
                                {
                                    name: 'Developer',
                                    assigned: 'Pauline O\'Connor'
                                }
                            ]
                        },
                        {
                            name: 'Team Leader',
                            assigned: 'Tiong Tan',
                            children: [
                                {
                                    name: 'Developer',
                                    assigned: 'Peter Simpson'
                                },
                                {
                                    name: 'Developer',
                                    assigned: 'Lingling Cui'
                                },
                                {
                                    name: 'Tester',
                                    assigned: 'Michael Laille'
                                },
                                {
                                    name: 'Tester',
                                    assigned: 'Smita Soni'
                                }
                            ]
                        },
                        {
                            name: 'Tech Lead',
                            assigned: 'Jacob Tseng',
                            children: [
                                {
                                    name: 'Tech Lead',
                                    assigned: 'Philip Booth'
                                }
                            ]
                        },
                        {
                            name: 'Team Leader',
                            assigned: 'Ali Al-Sinawi',
                            children: [
                                {
                                    name: 'Developer',
                                    assigned: 'Chelsea Farley'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'Business Unit Manager',
            assigned: 'Maxine Hefford',
            children: [
                {
                    name: 'Consultant',
                    assigned: 'Adrienne Slinn'
                },
                {
                    name: 'Consultant',
                    assigned: 'Michelle Peterson'
                },
                {
                    name: 'Consultant',
                    assigned: 'Donna Adela'
                },
                {
                    name: 'Consultant',
                    assigned: 'Lauren Edwards'
                },
                {
                    name: 'Consultant',
                    assigned: 'So\'o Faafetai'
                },
                {
                    name: 'Print Manager',
                    assigned: 'Jaivir Singh',
                    children: [
                        {
                            name: 'Printroom Operator',
                            assigned: 'Gyaneshwar Sambaru'
                        },
                        {
                            name: 'Printroom Operator',
                            assigned: 'Todd Feng'
                        },
                        {
                            name: 'Printroom Operator',
                            assigned: 'Paramita Bhattacharya'
                        }
                    ]
                },
                {
                    name: 'Team Leader',
                    assigned: 'Jasvin Sidhu',
                    children: [
                        {
                            name: 'Consultant',
                            assigned: 'Chris Muir'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Diane Sutherland'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Anita Raston'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Carol Barker'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'David Collins'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Chithira Parameshwaran'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Samantha Neehoff'
                        }
                    ]
                },
                {
                    name: 'Consultant',
                    assigned: 'Coco Yang'
                },
                {
                    name: 'Team Leader',
                    assigned: 'Pratishma Payal',
                    children: [
                        {
                            name: 'Consultant',
                            assigned: 'Victoria Tetai'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Nico Grobler'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Raj Rani'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Judi Sunich'
                        }
                    ]
                },
                {
                    name: 'Consultant',
                    assigned: 'Karim Khan'
                },
                {
                    name: 'Consultant',
                    assigned: 'Keiichi Nguyen'
                },
                {
                    name: 'Consultant',
                    assigned: 'Mayce Wong'
                },
                {
                    name: 'Consultant',
                    assigned: 'Adam Wong'
                },
                {
                    name: 'Consultant',
                    assigned: 'Tania Cleary'
                }
            ]
        },
        {
            name: 'Business Unit Manager',
            assigned: 'Chris Mar',
            children: [
                {
                    name: 'Consultant',
                    assigned: 'Madeleine Ploeg'
                },
                {
                    name: 'Consultant',
                    assigned: 'Kent Xie'
                },
                {
                    name: 'Consultant',
                    assigned: 'Nilesh Reddy'
                },
                {
                    name: 'Team Leader',
                    assigned: 'Kumar Subramanian',
                    children: [
                        {
                            name: 'Developer',
                            assigned: 'Adenline Chew'
                        },
                        {
                            name: 'Developer',
                            assigned: 'Ivan Kislitchii'
                        },
                        {
                            name: 'Consultant',
                            assigned: 'Chris Forbes'
                        }
                    ]
                },
                {
                    name: 'Consultant',
                    assigned: 'Dilan Kumar'
                },
                {
                    name: 'Consultant',
                    assigned: 'Hendra Zaldi'
                },
                {
                    name: 'Sales',
                    assigned: 'Phillip Curtis'
                },
                {
                    name: 'Consultant',
                    assigned: 'Sabrina Brookfield'
                },
                {
                    name: 'Consultant',
                    assigned: 'Cecilia Toh'
                },
                {
                    name: 'Sales',
                    assigned: 'Pranav Birla'
                }
            ]
        },
        {
            name: 'Marketing',
            assigned: 'Justin Cheong'
        },
        {
            name: 'Sales',
            assigned: 'Matt Hamilton'
        },
        {
            name: 'Consultant',
            assigned: 'Tony Rankin'
        },
        {
            name: 'Manager',
            assigned: 'Paul Lamb',
            children: [
                {
                    name: 'Production',
                    assigned: 'Amit Pratap',
                    children: [
                        {
                            name: 'Production',
                            assigned: 'Peter Ngatupuna'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Sales and Projects Coordinator',
            assigned: 'Amelia Choo'
        }
    ]
}