import React, { Component } from 'react'

export class App2 extends Component {

    state = {
        name: null,
        family: null,
        age: null
    }
    getname = (e) => {
        this.setState({
            name: e.target.value
        })

    }
    getname1 = (e) => {
        this.setState({
            family: e.target.value
        })

    }

    getname2 = (e) => {
        this.setState({
            age: e.target.value
        })

    }

    handclick = (e) => {
        e.preventDefault()

        console.log(this.state)
    }



    render() {
        return ( <
            div >
            <
            form >
            NAME: < input type = 'text'
            onChange = { this.getname }
            />
            FAMILY: < input type = 'text'
            onChange = { this.getname1 }
            />
            age: < input type = 'text'
            onChange = { this.getname2 }
            /> <
            button onClick = { this.handclick } > click me! < /button>

            <
            /form> <
            div >
            <
            h1 > { this.state.name } < /h1> <
            h1 > { this.state.family } < /h1> <
            h1 > { this.state.age } < /h1> < /
            div > <
            /div>

        )
    }
}

export default App2