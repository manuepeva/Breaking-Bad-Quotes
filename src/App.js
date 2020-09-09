import React, { useState, useEffect } from 'react';
import './index.css';
import styled from '@emotion/styled';
import Frase from './Frase/Frase';

const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 28vh;
    flex-direction: column;
    max-height: 100%;

    @media(max-width: 600px){
      padding-top:25rem;
    }
`;


const Button = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #ffffff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    transition: background-size .8s ease;
    :hover{
      cursor:pointer;
      background-size: 400px;
    }

`;



function App() {


  // State de frases

  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

    const frase = await api.json();
    obtenerFrase(frase[0]);
  }


  // Cargar una frase
  useEffect(() => {
    consultarAPI();
  }, [])


  return (
    <Contenedor>
      <Frase
        frase={frase}
      />

      <Button
        onClick={consultarAPI}
      >
        Obtener Frase
    </Button>
    </Contenedor>
  );
}

export default App;
