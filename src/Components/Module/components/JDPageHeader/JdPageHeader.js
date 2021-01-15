import React, { Component } from 'react'
import { PageHeader } from 'antd';

export default class JdPageHeader extends Component {
    render() {
        const { ...rest } = this.props
        return (
            <PageHeader {...rest} />
        )
    }
}
