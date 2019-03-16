import React, { Component } from 'react';
import SiderMenu from "../SiderMenu";
import Header from "../Header";
import { connect } from "react-redux";
import { newUser } from "../../actions/users";

import {Layout, message, Form, Input, Button } from 'antd';

const { Content } = Layout;

class NewUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuSelected: ['2'],
            name: null,
            job: null
        };

        this.handleName.bind(this);
        this.handleJob.bind(this);
        this.hasErrors.bind(this);
    }

    componentDidMount() {
        this.props.form.validateFields();
    }

    /**
     * Update the input name his value
     * @param event
     */
    handleName(event) {
        this.setState({name: event.target.value});
    }

    /**
     * Update the input job his value
     * @param event
     */
    handleJob(event) {
        this.setState({job: event.target.value});
    }

    /**
     * Add a user if every field are valid.
     * @param e
     */
    handleSubmit = (e) => {
        const { form } = this.props;

        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                // Update the user
                this.props.newUser(values);
                form.resetFields();

                message.success('User created!');

                this.setState({
                    name: null,
                    job: null
                });
            }
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
        const { menuSelected } = this.state;

        const {
            getFieldDecorator,
            getFieldsError,
            getFieldError,
            isFieldTouched,
        } = this.props.form;

        const nameError = isFieldTouched('name') && getFieldError('name');
        const jobError = isFieldTouched('job') && getFieldError('job');

        return (
            <Layout className="users">
                <SiderMenu menuSelected={menuSelected} />

                <Layout>
                    <Header />

                    <Content className="users-new">
                        <h2 className="text-center">Add New User</h2>

                        <Form layout="horizontal" onSubmit={this.handleSubmit}>
                            <Form.Item
                                label="Name"
                                validateStatus={nameError ? 'error' : ''}
                                help={nameError || ''}
                            >
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'Please input your name!' }],
                                })(
                                    <Input placeholder="Name" />
                                )}
                            </Form.Item>

                            <Form.Item
                                label="Job"
                                validateStatus={jobError ? 'error' : ''}
                                help={jobError || ''}
                            >
                                {getFieldDecorator('job', {
                                    rules: [{ required: true, message: 'Please input your job!' }],
                                })(
                                    <Input placeholder="Job" />
                                )}
                            </Form.Item>

                            <Button
                                type="primary"
                                htmlType="submit"
                                className="new-user-btn"
                                disabled={this.hasErrors(getFieldsError())}
                            >
                                Add
                            </Button>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = (state) =>  {
    return { ...state };
};

export default Form.create({ name: 'newUser' })(connect(mapStateToProps, { newUser })(NewUser));
