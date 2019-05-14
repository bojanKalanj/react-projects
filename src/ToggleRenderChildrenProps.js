import React, { Component } from 'react'

export default class ToggleRenderChildrenProps extends Component {
    state = {
        on: false
    };
    toggle = () => {
        const { on } = this.state;
        this.setState({
            on: !on
        })
    }
    render() {
        let { on } = this.state;
        const { children } = this.props;
        return (
          <div>
            { children(on, this.toggle) }
          </div>
        );
    }
}
