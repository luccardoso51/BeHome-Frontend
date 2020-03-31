import React from 'react'

import './styles.css'

export default function CreatePublication() {
  return (
    <div className="createpublication-container">
      <div className="content">
        <form className="form-content">
          <div>
            Faça o upload de uma imagem
          </div>
          <input placeholder="Título da publicação" />
          <select >
            <option value="education">Education</option>
            <option value="music">Music</option>
            <option value="sport">Sport</option>
            <option value="outher">Outher</option>
          </select>
          <textarea name="" id="" cols="30" rows="10" placeholder="Descrição da publicação"></textarea>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}