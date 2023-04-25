import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto"> 
          
          <NavDropdown title="Filmes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Populares</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Em cartaz</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">top rated</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Lançamento</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho