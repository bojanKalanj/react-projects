import React, { Component } from 'react'

export default class ToggleRenderProps extends Component {
    state = {
        on: false
    };
    toggleClick = () => {
        const { on } = this.state;
        this.setState({
            on: !on
        })
    }
    render() {
        let { on } = this.state;
        const { render } = this.props;
        return (
          <div>
            { render(on, this.toggleClick) }
          </div>
        );
    }
}
