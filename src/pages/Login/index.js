import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import LogoImg from '../../assets/Logo.png'
import BeHomeImg from '../../assets/BeHome.png'

export default function Login() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="BeHome"/>


                <form>
                    <h1>Login</h1>

                    <input placeholder="Entre com seu código ID"/>
                    
                    <section className='login-btn'>
                        <Link to="/feed">
                            <button type="submit">Entrar</button>
                        </Link>
                    </section>

                </form>
                <section className="register">
                    <Link to="/Register">
                        Não tenho cadastro
                    </Link>
                </section>
                  
               
            </section>
            <img src={BeHomeImg} alt="BeHome"/>
        </div>
    );
}
