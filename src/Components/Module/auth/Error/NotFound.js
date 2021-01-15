import React, { Component } from 'react'
import { JdResult } from '../../components/Index'
import { ErrorWrapper } from './ErrorStyle';

export default class NotFound extends Component {
    render() {
        return (
            <ErrorWrapper>
                <JdResult
                    className='ErrorAlain'
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                />
            </ErrorWrapper>
        )
    }
}
