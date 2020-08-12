import React, { Component } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueUser: '',
      valuePass: ''
    };
    
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeUser(event) {
    this.setState({
      valueUser: event.target.value
    });
  }
  
  handleChangePass(event) {
    this.setState({
      valuePass: event.target.value
    });
  }
  
  handleSubmit(event) {
    alert ('an event was submitted: ' + this.state.valueUser + " " + this.state.valuePass);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" value={this.state.value} onChange={this.handleChangeUser} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChangePass} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Login;