import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Page from './Components/Module/Page'
import AuthRouter from './Components/Module/auth/AuthRotue'

export default class AppRouter extends Component {
    render() {
        const { Theme } = this.props
        return (
            <div>
                <Route path={'/ZeronSec'}>
                    <Page Theme={Theme} />
                </Route>
                <Route path={'/Auth'} component={AuthRouter} />
            </div>
        )
    }
}
