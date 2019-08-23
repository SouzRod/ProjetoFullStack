import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import api from '../config/api'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.id] : event.target.value })
    }

    handleSubmit = async event => {
        event.preventDefault()
        
        let result = await api.post('/user', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })

        console.log(result)

        if (result.statusText !== 'OK') {
            alert(result.statusText)
            return false
        }

        alert('Cadastrado com sucesso!')

        this.props.history.push('/')
    }

    validateButton() {
        return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0
    }

    render() {
        return (
            <div className="containerRegister">
                <form className="formRegister" onSubmit={this.handleSubmit}>
                    <input type="text" className="inputRegister" name="name" id="name" onChange={e => this.handleChange(e)} placeholder='Digite seu nome' />
                    <input type="email" className="inputRegister" name="email" id="email" onChange={e => this.handleChange(e)} placeholder='Digite seu email' />
                    <input type="password" className="inputRegister" name="password" id="password" onChange={e => this.handleChange(e)} placeholder="Digite sua senha" />
                    <button type="submit" className="buttonRegister" disabled={!this.validateButton()}>Entrar</button>
                </form>
                <div className="divLabel">
                    <label>Já possui uma conta? <Link className="linkRegister" to="/">Conecte-se</Link></label>
                </div>
            </div>
        )
    }
}