import React from 'react'
import {useState} from 'react' 
import { useFetchContext } from '../../context/FetchContext'
import './Header.scss'


const Header = () => {
const {getAll, setPersonajes, personajes} = useFetchContext();
const arrayFiltrados= []
 const searchInput = (name) => {
   if(name === '') {
     getAll();
   }
    for (const personaje of personajes) {
      if(personaje.name.includes(name)) {
          arrayFiltrados.push(personaje);
        }
    }
    setPersonajes(arrayFiltrados);
 }
 
 
  return (

    <div className="App">
      <div className="title">
        <h1>Personajes de Rick and Morty</h1>
        <input type="text" placeholder="Busca un personaje..." onChange={e=> searchInput(e.target.value)}/>
      
      </div>
  </div>
    )
}

export default Header