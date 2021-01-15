import React from 'react';
import { Select } from 'antd';
const { Option } = Select;
export const JdOption = ({ children, ...rest }) => <Option {...rest}>{children}</Option>;
export const JdSelect = ({ children, ...rest }) => <Select {...rest}>{children}</Select>;