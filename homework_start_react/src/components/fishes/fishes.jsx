import React from 'react'
import './fishes.css'

export class Fishes extends React.Component {
    render() {
        return(
        <div className="fishes__urls">
            <a href="#">{this.props.name}</a>
            <span>{this.props.text}</span>
        </div>
        )
    }
}