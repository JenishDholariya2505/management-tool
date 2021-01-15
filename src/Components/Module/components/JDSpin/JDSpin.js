import React, { Component } from 'react'
import { Spin } from 'antd'

export default class JDSpin extends Component {
    render() {
        const { spinning } = this.props
        return (
            <div>
                <Spin spinning={spinning} />
            </div>
        )
    }
}
