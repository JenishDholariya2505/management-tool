import React, { Component } from 'react'
import { TopbarWrapper } from './TopbarStyle'
import { Popover } from 'antd'
import { Icons, JdPageHeader, JdFormComponents, JDModal } from '../../Module/components/Index'
const { JdButton } = JdFormComponents

export default class Topbar extends Component {
    state = {
        visible: false,
        Modal: false,
    };
    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    Logout = () => {
        localStorage.clear()
        window.location.reload()
        this.setState({ Modal: false })
        document.getElementById('root').style.filter = 'blur(0px)';
    }
    Modal = () => {
        this.setState({ Modal: !this.state.Modal })
        document.getElementById('root').style.filter = (this.state.Modal ? "blur(0px)" : "blur(10px)")
    }
    render() {
        const { bradCrumb } = this.props
        const { visible, Modal } = this.state
        return (
            <TopbarWrapper>
                <div className='Topbar'>
                    <JdPageHeader
                        ghost={true}
                        title={<Icons type='ZeronSec' />}
                        subTitle={bradCrumb}
                        extra={[
                            <Popover key='0' content={<JdButton onClick={this.Modal} className='logoutbtn' tital={"Logout"} />} visible={visible} onVisibleChange={this.handleVisibleChange}>
                                <div className='profile'>JD</div>
                            </Popover>]}>
                    </JdPageHeader></div>
                <JDModal Tital={'Logout'} centered={false} modalField={Modal} SecondBTN={<JdButton key='1' className='Close' onClick={this.Modal} tital='Cancle' />} MainBTN={<JdButton key='0' className='MainBTN' onClick={this.Logout} tital='Logout' />} closebtn={false} Footer={true}>
                    <div className='Modal'>
                        <span className='Tital'>“Are you sure you want to log out?”</span>
                    </div>

                </JDModal>
            </TopbarWrapper>
        )
    }
}