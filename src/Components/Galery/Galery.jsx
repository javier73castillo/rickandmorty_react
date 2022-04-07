import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Galery.scss'
import Header from '../Header/Header';
import { useFetchContext } from '../../context/FetchContext';

export const Galery = () => {
    const {id, setId, personajes} = useFetchContext();

    const siguiente = () => {
        setId(id + 1)
       
    }
    const previous = () =>{
        setId(id -1)

    }
   
    return(
            <>
            <Header/>
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
            <div className='container-btn'>
                <button onClick={()=>siguiente()}>Next Page</button>
                <button onClick={()=>previous()}>Previous Page</button>
            </div>
            </>
    )};
    
 
