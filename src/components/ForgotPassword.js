import React from 'react';

class ForgotPassword extends React.Component {
  state ={
    email: ""
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
      email: ""
    })
  }

  //change to update/put
  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}));

  render() {
    return (
      <div>
        <form>
          <h1>Forgot Password</h1>
          <p>email blah blah</p>
          <input type="email"
            placeholder="Enter Email Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}/>

          <input type="submit"
            value="Send" />

          <p>Remember?
          <a href="/Login"> Login!</a>
          </p>
          <p> Need an Account?
          <a href="/Register"> Create One Here!</a>
          </p>
        </form>
      </div>
    );
  }
};

  export default ForgotPassword