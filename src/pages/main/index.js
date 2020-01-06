import React, { Component } from 'react'
import api from "../../services/api"

import './styles.css'

export default class Main extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('search?terms=teste');

        this.setState({ products: response.data });
    }

    render() {
        const { products } = this.state
        return (
            <div className="products-list">
                {products.map(product => (
                    <article key={product._id}>
                        <div className="polaroid">
                            <div className="card"> <img src={product.img} /></div>
                            <p>{product.title}</p>
                            <p>De: <span className="price">{product.price}</span></p>
                            <p>Por: <span>{product.sPrice}</span></p>
                        </div>
                    </article>

                ))}
            </div>
        )
    }
}