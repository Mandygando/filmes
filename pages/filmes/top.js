import React, { useEffect, useState } from 'react';
import Pagina from '../../components/Pagina';
import apiDeputados from '../../services/apiDeputados';
import axios from 'axios';
import apiFilmes from '@/services/apiFilmes';
import { Card, Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

const Detalhes = ({top_rated}) => {


  return (
    <Pagina titulo="Top Rated">

      <Row md={4}>

        {top_rated.map(item => (
          <Col>
            <Card>
              <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <p>Lançamento: {item.release_date}</p>
                <p>Nota: {item.vote_average}</p>
                <Link className='btn btn-danger' href={'/filmes/' + item.id}>Detalhes</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
}

export default Detalhes;


export async function getServerSideProps(context) {

  const resultado = await apiFilmes.get('/tv/top_rated')
  const top_rated = resultado.data.results

  return {
    props: { top_rated },
  }
}