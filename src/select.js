import React, { Component } from 'react'

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ''
    };
 
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChangeSelect(event) {
    this.setState({
      language: event.target.value
    });
    event.preventDefault();
  }
  
  handleSubmit(event) {
    alert("a language was submitted " + this.state.language);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="password" value={this.state.value} onChange={this.handleChangeSelect} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
  
}
  

export default Select;