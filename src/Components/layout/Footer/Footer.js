import React, { Component } from 'react'
import { FooterWrapper } from './FooterStyle'
// import { Switch } from 'antd';


export default class Footer extends Component {
    render() {
        const Year = new Date().getFullYear()
        return (
            <FooterWrapper>
                Zeronsec India Pvt. Ltd. - {Year}
                {/* <Switch
                    onChange={this.props.Theme}
                    checkedChildren={'Dark'}
                    unCheckedChildren={'Light'}
                    checked={localStorage.getItem("Mode") === "Dark" ? true : false}
                /> */}
            </FooterWrapper>
        )
    }
}
