import React from 'react'

import './styles.css'

export default function CreatePublication() {
  return (
    <div className="createpublication-container">
      <div id="title"> <h2>Criar uma publicação</h2> </div>
      <div className="content">
        <form>
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
          <textarea placeholder="Descrição da publicação"></textarea>
          <button type="submit">Criar publicação</button>
        </form>
      </div>
    </div>
  )
}