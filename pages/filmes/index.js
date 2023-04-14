import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiDeputados from '../../services/apiDeputados';
import axios from 'axios';
import apiFilmes from '@/services/apiFilmes';

const index = (props) => {



  return (
    <Pagina titulo="Filmes">
    {props.filmes.map(item => (
        <p>{item.title}</p>
    ))}
    </Pagina>
  );
}

export default index;


export async function getServerSideProps(context) {

    const resultado = await apiFilmes.get('/movie/popular')
    const filmes = resultado.data.results

    return {
      props: { filmes },
    }
  }