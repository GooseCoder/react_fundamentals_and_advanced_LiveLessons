import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Profile from './Profile'
import AddProfile from "./AddProfile";
import {getProfile} from './profileApi'
import {WrappedComp1, WrappedComp2} from './higherOrderComponent'
import MyPropsTypeComponent from './propTypes'
import Refs from './Refs'


var MyFunctionalComponent = props => (
    <div>
        <p>This is my functional component</p>
        <p>{props.x}</p>
    </div>
)

class AnotherComponent extends React.Component {
    render() {
        return <p>Yet another component</p>
    }
}

class MyComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>My Component</h1>
                {this.props.children}
                <p>More Content</p>
            </div>
        )
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: []
        }
        this.addUser = this.addUser.bind(this)
    }

    componentDidMount() {
        getProfile()
            .then(profiles => {
                this.setState({
                    profiles: profiles
                })
            })
    }

    addUser(newProfile) {
        // e.target  button
        console.log(this)

        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }

    render() {
        let profile1 = this.state.profiles[0]
        let profile2 = this.state.profiles[1]
        let profiles = this.state.profiles.map ( profile => {
            return (
                <Profile name={profile.name} age={profile.age} bio={profile.bio} hobbies={profile.hobbies}/>
            )
        })

        return (
            <div>
            {profiles}
                <AddProfile addUser={this.addUser}/>
                <MyFunctionalComponent x='Hello Massimo'/>
                <MyComponent><AnotherComponent/></MyComponent>
                <WrappedComp1/>
                <WrappedComp2/>
                <MyPropsTypeComponent count={4} />
                <Refs/>
            </div>
        )
    }
}
