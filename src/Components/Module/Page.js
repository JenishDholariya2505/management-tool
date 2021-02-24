import React, { useState } from 'react'
import { PageWrapper } from './pageStyle'
import { Topbar, Sidebar, Footer } from '../layout/Index'
import PageRouter from './PageRouter';
import { auth } from '../../Core/Helper/Data'
import { Redirect } from 'react-router-dom';

export default function Page() {
    // const { Theme } = this.props
    const [bradCrumb, setbradCrumb] = useState(window.location.pathname.split('/')[2])
    const Menu = (d) => {
        setbradCrumb(d)
    }
    console.log(bradCrumb, 'test')
    return (
        <div>
            {auth ?
                <PageWrapper>
                    <Topbar bradCrumb={bradCrumb} />
                    <div className='Layout'>
                        <Sidebar menuBTN={Menu} bradCrumb={bradCrumb} />
                        <div className='Page'>
                            <PageRouter />
                        </div>
                    </div>
                    <Footer Theme={'Theme'} />
                </PageWrapper>
                : <Redirect to={'/Auth/Login'} />
            }
        </div>
    )
}
