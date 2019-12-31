import React, { useEffect, useState } from 'react';
import axios from 'axios';



function Frase({frase}) {
  return (
          <div className="frase">
              <h1> {frase.quote} </h1>
              <p>- {frase.author} </p>
          </div>

  )
}

function App() 
{
  const [ frase, obtenerFrase ] = useState({}); 

  const ConsultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    //console.log(resultado.data[0]);
    //agregar el resultado de la consulta al state obtenerFrase
    obtenerFrase(resultado.data[0]);
  }

  // CONSULTA A UN REST API ==> useEffect
  useEffect(
              () => 
              { 
                ConsultarAPI(); 
              }, []
           )

           console.log(frase);
  
           return (

          <div className="contenedor">
                <Frase 
                  frase={frase}            
                />
                <button
                  onClick={ConsultarAPI}
                >
                        Generar una nueva frase
                </button>
          </div>
  )
}

export default App;