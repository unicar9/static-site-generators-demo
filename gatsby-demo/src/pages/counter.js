import React from 'react'
import Link from 'gatsby-link'

export default class Counter extends React.Component {
    constructor() {
        super()
        this.state={ count: 0 }
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <p>current count: {this.state.count}</p>
                <button 
                    style={{ width: 100 }}
                    onClick={() => this.setState({ count: this.state.count + 1 })}
                >plus</button>
                <div style={{ height: 10 }}></div>
                <button 
                    style={{ width: 100 }}
                    onClick={() => this.setState({ count: this.state.count - 1 })}
                >minus</button>
            </div>
        )
    }
} 
