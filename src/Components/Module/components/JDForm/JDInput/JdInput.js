import React, { Component } from 'react';
import { Input } from 'antd';

export default class JdInput extends Component {
    static Password = ({ ...rest } = this.props) => <Input.Password {...rest} />
    render() {
        const { ...rest } = this.props
        return (
            <Input {...rest} />
        );
    }
}