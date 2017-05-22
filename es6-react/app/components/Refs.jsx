import React, { Component } from 'react'

export default class Refs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {input: ''}
        this.handler = this.handler.bind(this)
        this.submit = this.submit.bind(this)

    }

    handler(e) {
        this.setState({
            input: e.target.value
        })
    }

    submit() {
        this.setState({
            input: ''
        }, () => {
            ReactDOM.findDOMNode(this.refs.inputBox).focus()
        })
    }

    render() {
        return (
            <div>
                <input ref='inputBox' value={this.state.input} onChange={this.handler} />
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

