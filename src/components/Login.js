import React, { Component } from 'react';

export default class extends Component {
  state ={
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, console.log([event.target.name] , event.target.value))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render () {
    return (
      <fieldset>
          <legend>Login</legend>
          <form onSubmit={this.handleSubmit}>
            <input type="text" 
              placeholder="Username" 
              name="username" 
              value ={this.state.username} 
              onChange={this.handleChange} />

            <input type="password"
              placeholder="password" 
              name="password" 
              value ={this.state.password} 
              onChange={this.handleChange} />

            <input type="submit"
              value="Login" />
          </form>
      </fieldset>
    )
  }
}