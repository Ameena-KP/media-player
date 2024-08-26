import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar className="bg-body-tertiary" style={{height:'100px',color:'wheat'}}>
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-youtube fa-4x" style={{color:"#8a0512"}}></i>
           
            {' '}
          <b> Media Player</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header