import React, { Component } from 'react'

export class App1 extends Component {
    render() {
        const ninrrays = this.props.ninja
        const ninitem = ninrrays.map(ninrray => {
            return ( <
                div >
                <
                h1 > { ninrray.name } < /h1> <
                h1 > { ninrray.family } < /h1> <
                h1 > { ninrray.age } < /h1> < /
                div >
            )
        })
        return ( <
            div > { ninitem } <
            /div>
        )
    }
}

export default App1