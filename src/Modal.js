import React, { Component } from 'react';
import Portal from './Portal';
import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWraper>
            <button onClick={toggle}>Close</button>
            {children}
          </ModalWraper>
        )}
      </Portal>
    );
  }
}

const ModalWraper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: orange;
`