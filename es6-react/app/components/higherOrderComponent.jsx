import React, { Component } from 'react'
let HOCGen = (Component, state) => class extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            count: state.count
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    render() {
        return <Component {...this.props} {...this.state} />
    }
}

class Comp1 extends React.Component {
    render() {
        return (
            <div>
                <p>Comp1</p>
                {this.props.count}
            </div>
        )
    }
}
class Comp2 extends React.Component {
    render() {
        return (
            <div>
                <p>Comp2</p>
                {this.props.count}
            </div>
        )
    }
}
export let WrappedComp1 = HOCGen(Comp1, {count:0})
export let WrappedComp2 = HOCGen(Comp2, {count:100})

