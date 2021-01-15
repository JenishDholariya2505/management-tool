import React from 'react'
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

export default function JdDatepicker({ ...rest } = this.props) {
    return (
        <RangePicker {...rest} />
    )
}
