import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRenderChildrenProps';
import Portal from "./Portal";
import Modal from './Modal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Toggle render={(on, toggle) => {
          return (
            <div>
              {on && <h1>Toggle me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          );
        }}/> */}
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
    </div>
  );
}

export default App;
