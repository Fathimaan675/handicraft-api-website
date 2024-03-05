import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar  from 'react-bootstrap/Navbar';


import Nav from 'react-bootstrap/Nav';
function Header() {
  return (
   <>
   <div className='header1'>krafti</div>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav className="ms-auto bg-dark">
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href="/cart">view cart</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        
   </>
  )
}

export default Header