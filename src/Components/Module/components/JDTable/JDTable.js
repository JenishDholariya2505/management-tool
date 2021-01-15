import React from 'react'
import { Table } from 'antd'

export default function JDTable({ dataSource, ...rest } = this.props) {
    return (
        <Table dataSource={dataSource} {...rest} />
    )
}
