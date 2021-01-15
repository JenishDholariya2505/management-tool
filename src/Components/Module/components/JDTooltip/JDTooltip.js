import React, { Component } from 'react'
import { Tooltip } from 'antd'

export default class JDTooltip extends Component {
    render() {
        const { ...rest } = this.props
        return (
            <div>
                <Tooltip {...rest} />
            </div>
        )
    }
}
