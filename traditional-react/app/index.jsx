import React, { Component } from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'

var X = React.createClass( {
    render: function() {
        return (
                <p>X</p>
        )
    }
})


var App = React.createClass( {
    render: function() {
        return (
        <div>
            <p>More Stuff</p>
            <p>Hello world</p>
            <X />
        </div>
        )
    }
})

var Sections = React.createClass({
    getInitialState: function () {
        return{
            profiles: [
            {name: 'Massimo'},
            {name: 'Pippo'}
            ]

        }
    },
    render: function () {
        console.log(this.state)
        return(
            <section>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name {this.state.profiles[0].name}</p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name {this.state.profiles[1].name}</p>
                </section>
            </section>

        )
    }
})
ReactDOM.render(<Sections />, document.getElementById('app'));