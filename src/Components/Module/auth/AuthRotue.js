import React, { Component } from 'react'
import Signin from './signin/Signin'
import ForGotPas from './Forgotpass/ForGotPas';
import Otp from './Forgotpass/Otp'
import NewPass from './Forgotpass/NewPass'
import { Redirect, Route, Switch } from 'react-router-dom';
import { auth } from '../../../Core/Helper/Data'

export default class AuthRouter extends Component {
    render() {
        const url = window.location.pathname
        return (
            <div>
                <Route render={() => (<Redirect to={auth ? '/ZeronSec/Users' : url} />)} />
                <Switch>
                    <Route path={'/Auth/Login'} component={Signin} />
                    <Route path={'/Auth/Forgot'} component={ForGotPas} />
                    <Route path={'/Auth/OTP'}>
                        <Otp />
                    </Route>
                    <Route path={'/Auth/NewPassword'} component={NewPass} />
                </Switch>
            </div>
        )
    }
}
