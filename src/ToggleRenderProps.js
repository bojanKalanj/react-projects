import React, { Component, Fragment } from 'react'

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
          <Fragment>
            { render(on, this.toggleClick) }
          </Fragment>
        );
    }
}
