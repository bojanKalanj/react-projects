import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRenderChildrenProps';
import Portal from "./Portal";
import Modal from './Modal';
import { UserContext } from './UserContext';
import User from './User';

class UserProvider extends Component {
  state = {
    id: '1',
    name: 'Bojan',
    email: 'bojan@gmail.com'
  }

  render() {
    return (
      <UserContext.Provider value={{ user: this.state }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}


function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Toggle>
            {(on, toggle) => {
              return (
                <Fragment>
                  <button onClick={toggle}>Login</button>
                  <Modal on={on} toggle={toggle}>
                    <h1>IN MODAL</h1>
                  </Modal>
                </Fragment>
              );
            }}
          </Toggle>
          <Portal>
            <h1>I am Portal</h1>
          </Portal>
        </header>
        <User />
      </div>
    </UserProvider>
  );
}

export default App;
