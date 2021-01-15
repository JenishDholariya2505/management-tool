import React, { Component } from 'react'
import { Result } from 'antd'

export default class JdResult extends Component {
    render() {
        const { ...rest } = this.props
        return (
            <Result  {...rest} />
        )
    }
}
