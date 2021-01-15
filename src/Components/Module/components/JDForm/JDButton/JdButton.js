import React, { Component } from 'react'
import { Button } from 'antd'
import { JdStyleWrapper } from './JdStyle'

export default class JdButton extends Component {
    render() {
        const { tital, ...rest } = this.props
        return (
            <JdStyleWrapper>
                <Button {...rest}>{tital}</Button>
            </JdStyleWrapper>
        )
    }
}
