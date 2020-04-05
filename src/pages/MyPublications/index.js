import React from 'react';
import { Link } from 'react-router-dom';
import {FaArrowLeft} from 'react-icons/fa';


import './styles.css';


import ImgLogo from '../../assets/Logo.png';
import publicationImg from '../../assets/publication.png';

export default function MyPublications() {
    return (
        <div className="profile-container">
            <div className="sideprofile-container">
                <div className="sideprofile-contend">
                    <img src={ImgLogo} alt="Be Home" />
                    <h3>Lucas Cardoso</h3>
                    <p>Seu ID: 66609333</p>
                    <button>Criar uma publicação</button>
                </div>
                <Link to="/"><FaArrowLeft size={20} /><span>Voltar</span></Link>
            </div>

       <section>
       <h1>Minhas publicações</h1>
            <div className="grid">

            <div className="content">
                
            </div>
            <div className="content">

            </div>
            <div className="content">

            </div>
            <div className="content">

            </div>

            </div>
            </section>

        </div>
        
        

    );
}