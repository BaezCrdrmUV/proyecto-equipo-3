import React, { Component, useState } from "react";
import './login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.onSumbit = this.onSumbit.bind(this);
  }



  handleChangeUsername (e){
    this.setState({username: e.target.value});
  }

  handleChangePassword (e){
    this.setState({password: e.target.value});
  }

  onSumbit (e){
    e.preventDefault();
    this.props.userLogin(this.state.username, this.state.password);

  }

  render() {
    return (
      <div className="login">
        <Form  onSubmit={this.onSumbit} >
          <h2>Login</h2>
          <hr />
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username" onChange={this.handleChangeUsername}  required />
          </Form.Group>


          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handleChangePassword }  required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
            </Button>

          <Button className="button-register" variant="link" type="button" >
            Register
            </Button>
        </Form>

      </div>
    );

  }
}


const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};



const mapDispatchToProps = {
  userLogin
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);


