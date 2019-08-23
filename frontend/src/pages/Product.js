import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

import api from '../config/api'


export default class Product extends Component {


    constructor(props) {
        super(props)
        this.state = {
            products: [],
            element: ''
        }
        this.getProduct().then(res => res)
    }
    getProduct = async () => {
        let result = await api.get('/product', { headers: { authorization: `Bearer ${this.props.location.token}` } })
        this.setState({ products: result.data })
    }

    createTable() {
        let table = this.state.products.map(product => {
            return <tr>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>
                        <Link id={product._id} className="linkButtons" to="#" onClick={e => this.showDetail(e)} >Detalhes</Link>
                        <Link className="linkButtons" to="#">Deletar</Link>
                        <Link className="linkButtons" to="#">alterar</Link>
                    </td>
                   </tr>
        })

        return table
    }

    showDetail = async event => {

        event.preventDefault()

        let id = event.target.id
        let result = await api.get(`/product/${id}`, { headers: { authorization: `Bearer ${this.props.location.token}` } })

        let product = result.data
        console.log(product)

        this.elementDetail(product)

    }

    elementDetail = product => {
        this.setState( { element : (
            <div className="divDetailProduct">
                <div className="interDivDetail" id="iterDivDetail">
                    <h1>Detalhes do produto</h1>
                    <p>Nome: {product.name}</p>
                    <p>Descrição: {product.description}</p>
                    <p>Data de Criação: {product.createdAt}</p>
                </div>
            </div>
        )})
    }

    render(){
        return (
            <div className="containerProduct">
                <div className="divTableProduct">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Botões</th>
                            </tr>                           
                        </thead>
                        <tbody>
                            {this.createTable()}
                        </tbody>
                    </table>
                </div>
                {this.state.element}
            </div>
        )
    }
}

