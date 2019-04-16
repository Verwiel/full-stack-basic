import React from 'react';

class Register extends React.Component {
  state ={
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    username: "",
    password: "",
    passwordConfirm: ""
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
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      username: "",
      password: "",
      passwordConfirm: ""
    })
  }
//change to post
  // componentDidMount() {
  //   fetch('/users')
  //     .then(res => res.json())
  //     .then(users => this.setState({users}));
  
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <input type="text" 
            placeholder="First Name" 
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}/>
      
          <input type="text" 
            placeholder="Last Name" 
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}/>

          <input type="email" 
            placeholder="Email Address"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />

          <input type="tel" 
            placeholder="Phone Number"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}/>

          <input type="number" 
            placeholder="Age" 
            name="age"
            value={this.state.age}
            onChange={this.handleChange}/>

          <input type="text" 
            placeholder="Choose a Username" 
            name="username"
            value={this.state.username}
            onChange={this.handleChange}/>

          <input type="password" 
            placeholder="Choose a Password" 
            name="password"
            value={this.state.password}
            onChange={this.handleChange}/>

          <input type="password" 
            placeholder="Confirm Password" 
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}/>

          <label>
            Agree to terms and conditions
            <input type="checkbox" value="" />
          </label>
          <input type="submit"
            value="Register" />

          <p> Already Have an Account?
          <a href="/Login"> Login Here!</a>
          </p>
        </form>
      </div>
    );
  }
};

  export default Register