import React, { Component } from 'react'

export default class MyPropsTypeComponent extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Count: {this.props.count}</p>
            </div>
        )
    }
}
MyPropsTypeComponent.propTypes = {
    name: React.PropTypes.string,
    count: React.PropTypes.number.isRequired
}

MyPropsTypeComponent.defaultProps = {
    name: 'joe'
}