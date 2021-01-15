import React, { Component } from 'react'
import { Upload } from 'antd';

export default class JdUpload extends Component {
    render() {
        const { ...rest } = this.props
        return (
            <Upload  {...rest} />
        )
    }
}
