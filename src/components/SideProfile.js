import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

import ImgLogo from '../assets/Logo.png'
import './SideProfile.css'

export default function SideProfile () {
  return (
    <div className="sideprofile-container">
      <div className="sideprofile-contend">
        <img src={ImgLogo} alt="Be Home" />
        <h3>Lucas Cardoso</h3>
        <p>Seu ID: 66609333</p>
        <button>Minhas publicações</button>
      </div>
      <Link to="/"><FaArrowLeft size={20} /><span>Voltar</span></Link>
    </div>
  )
}