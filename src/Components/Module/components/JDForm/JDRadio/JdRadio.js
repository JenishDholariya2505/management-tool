import React, { Component } from 'react'
import { Radio } from 'antd';

export default class JdRadio extends Component {
    static Group = ({ ...rest } = this.props) => <Radio.Group {...rest} />
    render() {
        const { ...rest } = this.props
        return (
            <Radio {...rest} />
        )
    }
}
