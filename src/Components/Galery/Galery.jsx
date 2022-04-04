import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Galery.scss'

export const Galery = () => {
    const [personajes, setPersonajes] = useState([])
    const url= 'https://rickandmortyapi.com/api/character'
   
    useEffect(() => {
        axios
        .get(url)
        .then((element) => {
            setPersonajes(element.data.results);
        })
    },[]);
    return(
            <div className='container-card'>
            { personajes && personajes.map(personaje => {
                 return (
                    <div className='card' key={personaje.id} >
                        <h1>{personaje.name}</h1>
                        <img src={personaje.image} alt={personaje.name}/>
                    </div>
                 )           
            })
            }
            </div>
    )};
    
 
