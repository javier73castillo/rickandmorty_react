import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
//crear el contexto en la siguiente linea
export const FetchContext = React.createContext();
//exporto para poder utilziarlo en toda la app
export const useFetchContext = () =>{
    return useContext( FetchContext)
}
export default function FetchProvider ({children}){
    const [personajes, setPersonajes] = useState([])
    const [id, setId] = useState(1)
    const url= 'https://rickandmortyapi.com/api/character?page=' + id;
    const getAll = async () => {
        await axios
         .get(url)
         .then((element) => {
             setPersonajes(element.data.results);
         })
   }  
      useEffect(() => {
         getAll();
 
     },[url]);

     const contextExport={
         personajes,
         id,
         setId,
         getAll,
         setPersonajes,
     }  
     return <FetchContext.Provider value={contextExport}>{children}</FetchContext.Provider>

}

