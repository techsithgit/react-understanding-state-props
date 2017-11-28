import React, { Component } from 'react';
import User from './User';

class Users extends Component {
  // Setting Initial State
  state = {
    users: [
      {name:"John", age:20},
      {name:"Jill", age:30},
      {name:"Peter", age:40},
      {name:"Techsith", age:30},
      {name:"Jackson", age:50}
    ],
    title:"Users List"
  }

  // Handle to modify state
  makeMeYounger = () => {
    const newState = this.state.users.map((user)=>{
      const tempUser = user;
      tempUser.age -=10;
      return tempUser;
    });
    this.setState({
      newState
    });
  }

  render(){
    return (<div>
      <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
      <br/>
      <h1>{this.state.title}</h1>
      {
        this.state.users.map((user)=>{
          return <User age={user.age}>{user.name}</User>
        })
      }
      </div>)
  }
}

export default Users;
