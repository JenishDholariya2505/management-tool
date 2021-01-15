import React, { Component } from 'react'
import { Menu } from 'antd'

export default class JdMenu extends Component {
    static Item = ({ ...rest } = this.props) => <Menu.Item {...rest} />
    render() {
        const { ...rest } = this.props
        return (
            <Menu {...rest} />
        )
    }
}