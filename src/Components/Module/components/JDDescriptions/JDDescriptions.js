import React, { Component } from 'react'
import { Descriptions } from 'antd'

export default class JDDescriptions extends Component {
    render() {
        const { ...rest } = this.props
        return (
            <div>
                <Descriptions {...rest} />
            </div>
        )
    }
}
