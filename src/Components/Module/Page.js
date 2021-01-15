import React, { Component } from 'react'
import { PageWrapper } from './pageStyle'
import { Topbar, Sidebar, Footer } from '../layout/Index'
import PageRouter from './PageRouter';
import { auth } from '../../Core/Helper/Data'
import { Redirect } from 'react-router-dom';

export default class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bradCrumb: window.location.pathname.split('/')[2],
        }
    }
    Menu = (d) => {
        this.setState({ bradCrumb: d })
    }
    render() {
        const { Theme } = this.props
        const { bradCrumb } = this.state
        return (
            <div>
                {auth ?
                    <PageWrapper>
                        <Topbar bradCrumb={bradCrumb} />
                        <div className='Layout'>
                            <Sidebar menuBTN={this.Menu} bradCrumb={bradCrumb} />
                            <div className='Page'>
                                <PageRouter />
                            </div>
                        </div>
                        <Footer Theme={Theme} />
                    </PageWrapper>
                    : <Redirect to={'/Auth/Login'} />
                }
            </div>
        )
    }
}
