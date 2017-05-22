import React, { Component } from 'react'
import PropTypes from 'prop-types';
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
    name: PropTypes.string,
    count: PropTypes.number.isRequired
}

MyPropsTypeComponent.defaultProps = {
    name: 'joe'
}