import React, { Component, Fragment } from "react";

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
          <Fragment>
            { children(on, this.toggle) }
          </Fragment>
        );
    }
}
