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
              <ModalWindow>
                <CloseButton onClick={toggle}>Close</CloseButton>
                <div>{children}</div>
              </ModalWindow>
            <Background onClick={toggle}/>
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
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWindow = styled.div`
    position: relative;
    background: #fff;
    border-radius: 5px;
    padding: 15px;
    z-index: 10;
`

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: black;
    opacity: .5;
`