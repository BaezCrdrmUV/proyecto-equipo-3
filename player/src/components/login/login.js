import React, { Component, useState } from "react";
import './login.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions/user';
import { updateLoginStatus } from '../../redux/actions/user';
import { BrowserRouter as Router, Switch, Route, Link, Redirect,  } from "react-router-dom";


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loginError: "",
      loginSuccess:"",
      
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

 async onSumbit (e){
    e.preventDefault();
    await this.props.userLogin(this.state.username, this.state.password);
    const result = await this.props.user.loginStatus;
    this.formResult(result);
  }

   formResult(result){

    switch(result.status){
      case "ok":{
        console.log("todo chido");
        this.props.updateLoginStatus("ok");
        console.log(this.props.user.loginStatus);
        this.setState({loginSuccess: result.status});


        break;
      }
      case "INVALID_PASSWORD":{
        console.log("contraseña mal");
        this.setState({loginError: "Contraseña incorrecta"});
        break;
      }
      case "USER_NOT_FOUND":{
        console.log("usuario no encontrado");
        this.setState({loginError: "Usuario no encontrado"});
        break;
      }
    }
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

          <Link to="/register">
              <Button className="button-register" variant="link" type="button" >
                Register
              </Button>
          </Link>
        </Form>
        {this.state.loginError && <h3>{this.state.loginError}</h3>}
        {this.state.loginSuccess && <Redirect to="/"></Redirect>}

      </div>
    );

    }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};



const mapDispatchToProps = {
  userLogin,
  updateLoginStatus
}



export default connect(mapStateToProps, mapDispatchToProps)(Login);


