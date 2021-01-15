import React, { Component } from 'react'
import { Space } from 'antd'

export default class JDSpace extends Component {
    render() {
        const { ...rest } = this.props
        return (
            <div>
                <Space {...rest} />
            </div>
        )
    }
}
