import React, { Component } from 'react';
import { Form } from 'antd';

export default class JdForm extends Component {
    static Item = ({ ...rest } = this.props) => <Form.Item {...rest} />
    render() {
        const { ...rest } = this.props
        return (
            <Form {...rest} />
        );
    }
}