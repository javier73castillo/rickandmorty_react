import React from 'react'
import {useState} from 'react' 
import './Header.scss'

const Header = () => {
    const [personaje, setPersonaje] = useState('');

  return (

    <div className="App">
      <div className="title">
        <h1>Personajes Rick and Morty</h1>
        <input type="text" />
        <button>Buscar Personaje</button>
      </div>
  </div>
    )
}

export default Header