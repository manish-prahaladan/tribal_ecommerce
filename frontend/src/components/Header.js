import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {

    return (
        <header>
            <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Simple Website</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home"><i className='fas fa-home' />Home</Nav.Link>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user' />Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/categories'>
                                <Nav.Link><i className='fas fa-list-alt' />Categories</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link><i className='fas fa-shopping-cart' />Cart</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}



export default Header
