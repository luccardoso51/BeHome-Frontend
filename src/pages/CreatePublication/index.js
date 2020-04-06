import React from 'react'

import SideProfile from '../../components/SideProfile/SideProfile'
import './styles.css'

export default function CreatePublication() {

  function fileSelectedHandler (event) {
    console.log(event.target.files[0]);
  }
  

  return (
    <div className="createpublication-container">
      <SideProfile />
      <div id="title"> <h2>Criar uma publicação</h2> </div>
      <div className="content">
        <form>
          <div>
            <label htmlFor="fileinp">
              <span id="text">Faça o update de uma imagem</span>
              <input type="file" id="fileinp" onChange={fileSelectedHandler}/>
            </label>
          </div>
          <input placeholder="Título da publicação" />
          <select >
            <option value="education">Education</option>
            <option value="music">Music</option>
            <option value="sport">Sport</option>
            <option value="outher">Others</option>
          </select>
          <textarea placeholder="Descrição da publicação"></textarea>
          <button type="submit">Criar publicação</button>
        </form>
      </div>
    </div>
  )
}