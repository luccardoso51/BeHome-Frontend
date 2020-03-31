import React from 'react';

import styles from './styles.css';

import LogoImg from '../../assets/Logo.png'
import BeHomeImg from '../../assets/BeHome.png'

export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt=""/>

                <form>
                    <h1>Login</h1>

                    <input placeholder="Entre com seu código ID"/>
                    <button type="submit">Entrar</button>

                </form>
                <section className="register">
                    <a href="/Register">
                        Não tenho cadastro
                    </a>
                </section>
                  
               
            </section>

            <img src={BeHomeImg} alt="BeHome"/>
        </div>
    );
}
