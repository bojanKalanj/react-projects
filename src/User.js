import React, { Component } from 'react'
import { UserContext } from './UserContext';

export default class User extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {context => (
          <div>
            <h1>{context.user.name}</h1>
            <h3>{context.user.email}</h3>
            <h5>{context.user.id}</h5>
            <button onClick={context.logout}>logout</button>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}
