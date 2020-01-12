import React, { Component } from 'react'
import api from "../../services/api"
import {FaSearch} from 'react-icons/fa'

import './styles.css'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = { products: [], search: '' };

        this.handleChange = this.handleChange.bind(this);

    }

    loadProducts = async () => {
        try {
            const response = await api.get(`search?terms=${this.state.search}`);

            if (response.status === 200) {
                return this.setState({ products: response.data });
            }
        }
        catch (e) {
            return e
        }
    }

    handleChange(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        const { products } = this.state
        return (

            <div className="products-list">
                <div className="header">
                <div className="divBusca">
                    <input type="text" id="busca" placeholder="Buscar..." onChange={this.handleChange} />
                    <button id="btnBusca" onClick={this.loadProducts}> <FaSearch/></button>
                </div>
                </div>

                <p id="nProdutos"> {this.state.products.length} PRODUTOS ENCONTRADOS </p>


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