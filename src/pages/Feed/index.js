import React from 'react'
import {Link} from 'react-router-dom'

import Aside from '../../components/Aside/Aside'
import Button from '../../components/Button/Button'
import Publication from '../../components/Publication/Publication'
import Description from '../../components/Description/Description'

import imgLogo from '../../assets/Logo.png'
import imgBack from '../../assets/teste.png'

import './styles.css'

export default function Feed() {
  return(
    <div className="feed-container">
      <Aside>
        <img src={imgLogo} alt="Be Home" width="200px"/>
        <h3>Lucas Cardoso</h3>
        <h4>Seu Id:</h4>
        <h4>66609333</h4>
        <Link to="/mypublication">Minhas publicações</Link>
        <p>Categorias:</p>

        <Button background="#FF7B7B">Todas</Button>
        <Button background="#28B95A">Saúde</Button>
        <Button background="#D93453">Ajuda</Button>
        <Button background="#7B80FF">Entretenimento</Button>
        <Button background="#CCC13C">Educação</Button>
        <button className="sair">Sair</button>
      </Aside>
      <Publication className="publication">
      
          <img id="imgback" src={imgBack} alt="ImageMusic"/>
          <div className="buttons">
            <Button background="#CCC13C">Educação</Button>
            <Button background="#7B80FF">Musica</Button>
          </div>
        
        <Description>
        
          <h2 className="back-white">Aula de violão gratis online</h2>
          <p className='back-white'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
            ipsum dolor sit amet. Lorem ipsum dolor sit amet
          </p>
          <button className="acessar" background="#FF7B7B">Acessar</button>
        </Description>

      </Publication>
    </div>
  )
}