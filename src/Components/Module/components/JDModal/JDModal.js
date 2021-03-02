import React, { Component } from 'react'
import { Modal } from 'antd';

export default class JDModal extends Component {
    render() {
        const { children, modalField, Tital, MainBTN, onCancel, closebtn, SecondBTN, Footer, centered } = this.props;
        return (
            <div>
                <Modal
                    mask={true}
                    maskClosable={false}
                    title={Tital}
                    centered={centered}
                    visible={modalField}
                    footer={Footer ?
                        [
                            MainBTN,
                            SecondBTN
                        ]
                        : null}
                    closable={closebtn}
                    onCancel={onCancel}
                >
                    {children}
                </Modal>
            </div >
        )
    }
}
