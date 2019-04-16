import React, { Component } from 'react';



class Home extends React.Component {
  state={ users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }
//add a remove user option (by id), alert are you sure
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h2>User List</h2>
        <ul>
          {this.state.users.map(user =>
            <li key={user.id}>{user.firstname} {user.lastname}</li>)}
        </ul>
      </div> 
    );
  }
}

export default Home