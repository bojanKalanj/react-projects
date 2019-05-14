import React, { Component } from 'react'

export default class Toggle extends Component {
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
        return (
            <div>
            { on && this.props.children }
            <button onClick={this.toggleClick}>Show / Hide</button>
            </div>
        );
    }
}
