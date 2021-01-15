import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Blog from './pages/Blog/Blog';
import ChatRoom from './pages/Chat-Room/Chat-Room';
import TaskManagement from './pages/Task-Management/Task-Management';
import UserGroups from './pages/User-Groups/User-Groups';
import Users from './pages/Users/Users';
import { auth } from '../../Core/Helper/Data'
import NotFound from '../Module/auth/Error/NotFound'
import CreateTask from './pages/Task-Management/CreateTask'
import Notes from './pages/Notes/Notes'
import Meeting from './pages/Meeting/Meeting'
import CreateMeeting from './pages/Meeting/CreateMeeting'

export default class PageRouter extends Component {
    render() {
        const url = window.location.pathname
        return (
            <div>
                <Route render={() => (<Redirect to={auth ? (url) : '/Auth/Login'} />)} />
                <Switch>
                    <Route path='/ZeronSec/Users' component={Users} />
                    <Route path='/ZeronSec/Use-Groups' component={UserGroups} />
                    <Route path='/ZeronSec/Blog' component={Blog} />
                    <Route path='/ZeronSec/Chat-Room' component={ChatRoom} />
                    <Route path='/ZeronSec/Task-Management/Add' component={CreateTask} />
                    <Route path='/ZeronSec/Task-Management' component={TaskManagement} />
                    <Route path='/ZeronSec/Notes' component={Notes} />
                    <Route path='/ZeronSec/Meeting' component={Meeting} />
                    <Route path='/ZeronSec/Meeting_Create' component={CreateMeeting} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </div>
        )
    }
}
