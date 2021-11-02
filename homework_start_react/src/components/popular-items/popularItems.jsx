import React from 'react'
import './popularItems.css'

export class PopularItems extends React.Component {
    render() {
        return(
            <article className="popular-items__grid">
                <picture className="popular-items__img"></picture>

                <article className="popular-items__button-area">
                    <a href="#">{this.props.name}</a>
                    <button className="popular-items__button">Купить</button>
                </article>
            </article>
        )
    }
}