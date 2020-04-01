import React from 'react'

import ImgLogo from '../assets/Logo.png'
import './SideProfile.css'

export default function SideProfile () {
  return (
    <div className="sideprofile-contend">
      <img src={ImgLogo} alt="Be Home" />
      <h2>Lucas Cardoso</h2>
      <p>Seu ID: 66609333</p>
      <button>Minhas publicações</button>
    </div>
  )
}