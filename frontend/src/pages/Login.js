import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import './Login.css';

import api from '../config/api';

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.id] : event.target.value })
    }

    handleSubmit = async event => {
        event.preventDefault()

        const { email, password } = this.state

        try {
            let result = await api.post('/auth', { email, password })
    
            const { token } = result.data.result
            
            bake_cookie('token', token)
    
            this.props.history.push({ pathname: '/produto', token})
        }catch(err) {
            alert('Usuário ou senha inválidos.')
        }
    }

    validateButton() {
        return this.state.email.length > 0 && this.state.password.length > 0
    }
    render() {
        return (
            <div className="containerLogin">
                <form className="formLogin" onSubmit={this.handleSubmit}>
                    <input type="email" className="inputLogin" name="email" id="email" onChange={e => this.handleChange(e)} placeholder="Digite seu email" />
                    <input type="password" className="inputLogin" name="password" id="password" onChange={e => this.handleChange(e)} placeholder="Digite sua senha" />
                    <button type="submit" className="buttonLogin" disabled={!this.validateButton()}>Entrar</button>
                </form>
                <div className="divLabel">
                    <label>Não tem uma conta? <Link className="linkLogin" to="/cadastro">Cadastre-se</Link></label>
                </div>
            </div>
        )
    }
}