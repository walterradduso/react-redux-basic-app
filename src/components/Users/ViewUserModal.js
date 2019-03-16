import React, { Component } from 'react';
import ViewUser from './ViewUser';
import { Modal } from 'antd';

class ViewUserModal extends Component {
    state = {
        visible: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        let { userId } = this.props;

        if (userId && userId !== prevProps.userId) {
            this.setState({
                visible: true,
            });
        }
    }

    /**
     * Close the modal
     * @param e
     */
    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { userId } = this.props;
        const { visible } = this.state;

        return (
            <Modal
                visible={visible}
                centered
                onCancel={this.handleCancel}
                footer={false}
            >
                <ViewUser userId={userId} />
            </Modal>
        );
    }
}

export default ViewUserModal;
