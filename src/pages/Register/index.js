import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

import LogoImg from '../../assets/Logo.png'

export default function Register() {
    return (
        <div className="register-container">
            <section>
                <img src={LogoImg} alt="BeHome"/>
                
                <p className="cadastro">Cadastro</p>
                <p>Faça seu cadastro na plataforma e compartilhe suas experiências durante a quarentena da COVID-19</p>
                
                <Link to="/">
                    Voltar para login
                </Link>
            </section>

            <form>
                <input placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <button type="submit">CADASTRAR</button>
            </form>
        </div>
    );
}