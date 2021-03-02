import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Page from './Components/Module/Page'
import AuthRouter from './Components/Module/auth/AuthRotue'

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Route path={'/ZeronSec'} component={Page} />
                <Route path={'/Auth'} component={AuthRouter} />
            </div>
        )
    }
}
