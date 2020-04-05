import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

import LogoImg from '../../assets/Logo.png'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
        };
        
       try {
        const response = await api.post('users', data);

        alert(`Seu ID de acesso: ${response.data.id}`);
       } catch (err) {
           alert('Erro no cadastro, tente novamente.');
       }
    }

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

            <form onSubmit={handleRegister}>
                <input 
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                />

                <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <button type="submit">CADASTRAR</button>
            </form>
        </div>
    );
}