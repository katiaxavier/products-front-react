import React, { Component } from 'react'
import api from "../../services/api"

import './styles.css'

export default class Main extends Component {
    state = {
        products: [],
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
                <div id="divBusca">
                    <input type="text" id="busca" placeholder="Buscar..." />
                    <button id="btnBusca">Buscar</button>
                </div>

                {products.map(product => (
                    <article key={product._id}>
                        <div className="card-polaroid">
                            <div className="card"> <img src={product.img} alt="product" /></div>
                            <p id="productTitle"><strong>{product.title}</strong></p>
                            <p id="idprice">De: <span className="price">R$ {product.price}</span></p>
                            <p> <strong>Por: R$ {product.sPrice}</strong></p>
                        </div>
                    </article>

                ))}
            </div>
        )
    }
}