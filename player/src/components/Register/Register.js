import React, { Component, useState } from "react";
import './Register.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { createUser } from '../../redux/actions/user';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.onSumbit = this.onSumbit.bind(this);
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value });
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value });
    }


    handleChangeEmail(e) {
        this.setState({ email: e.target.value });
    }


    onSumbit(e) {
        e.preventDefault();
        this.props.createUser(this.state.username, this.state.password, this.state.email);
    }


    render() {
        return (
            <div className="Register">
                <Form onSubmit={this.onSumbit} >
                    <h2>Register</h2>
                    <hr/>

                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter Username" onChange={this.handleChangeUsername} required />
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChangePassword} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" onChange={this.handleChangeEmail} required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>

                </Form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {

    };
};



const mapDispatchToProps = {
    createUser
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);
