import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser, getUsers } from "../../actions/users";
import { Modal, message, Form, Input, Button } from 'antd';

class EditUserModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            firstName: null,
            lastName: null
        };

        this.handleFirstName.bind(this);
        this.handleLastName.bind(this);
        this.hasErrors.bind(this);
    }

    componentDidMount() {
        let { user } = this.props;

        if (user) {
            this.setState({
                firstName: user.firstname,
                lastName: user.lastname
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let { user } = this.props;

        if (user && user !== prevProps.user) {
            this.setState({
                visible: true,
                firstName: user.firstname,
                lastName: user.lastname
            });

            this.props.form.validateFields();
        }
    }

    /**
     * Update the input filename his value
     * @param event
     */
    handleFirstName(event) {
        this.setState({firstName: event.target.value});
    }

    /**
     * Update the input lastname his value
     * @param event
     */
    handleLastName(event) {
        this.setState({lastName: event.target.value});
    }

    /**
     * Update the user if every field is valid.
     * @param e
     */
    handleEdit = (e) => {
        const { form, user } = this.props;

        form.validateFields((err, values) => {
            if (!err) {
                // Update the user
                this.props.updateUser(values, user.key);

                message.success('User edited!');

                this.setState({
                    visible: false
                });
            }
        });
    };

    /**
     * Close the modal.
     * @param e
     */
    handleCancel = (e) => {
        this.setState({
            visible: false
        });
    };

    /**
     * Show if the form has error
     * @param fieldsError
     * @returns {boolean}
     */
    hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    render() {
        const { user } = this.props;
        const { visible } = this.state;

        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
        } = this.props.form;

        const firstNameError = isFieldTouched('firstName') && getFieldError('firstName');
        const lastNameError = isFieldTouched('lastName') && getFieldError('lastName');

        return (
            <div>
                {
                    user ?
                    <Modal
                        title="Edit User"
                        visible={visible}
                        centered
                        onCancel={this.handleCancel}
                        onOk={this.handleEdit}
                        okText="Edit"
                        destroyOnClose={true}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
                            <Button key="submit" type="primary" disabled={this.hasErrors(getFieldsError())} onClick={this.handleEdit}>
                                Edit
                            </Button>,
                        ]}
                    >
                        <div className="text-center">
                            <Form layout="inline">
                                <Form.Item
                                    label="First Name"
                                    validateStatus={firstNameError ? 'error' : ''}
                                    help={firstNameError || ''}
                                >
                                    {getFieldDecorator(
                                        'firstName',
                                        {
                                            initialValue: user.firstname,
                                            rules: [{ required: true, message: 'Please input your first name!' }],
                                        }
                                    )(
                                        <Input placeholder="First name" />
                                    )}
                                </Form.Item>

                                <Form.Item
                                    label="Last Name"
                                    validateStatus={lastNameError ? 'error' : ''}
                                    help={lastNameError || ''}
                                >
                                    {getFieldDecorator(
                                        'lastName',
                                        {
                                            initialValue: user.lastname,
                                            rules: [{ required: true, message: 'Please input your last name!' }],
                                        }
                                    )(
                                        <Input placeholder="Last name" />
                                    )}
                                </Form.Item>
                            </Form>
                        </div>
                    </Modal>
                    : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
};

export default Form.create({ name: 'editUser' })(connect(mapStateToProps, { updateUser, getUsers })(EditUserModal));
