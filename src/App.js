import React from 'react';
import logo from './logo.svg';
import './App.css';

import Toggle from './ToggleRenderChildrenProps';

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
          {
            (on, toggle) => {
              return (
                <div>
                  {on && <h1>Toggle me</h1>}
                  <button onClick={toggle}>Show / Hide</button>
                </div>
              );
            }
          }
        </Toggle>
      </header>
    </div>
  );
}

export default App;
