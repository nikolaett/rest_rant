//dependencies
const React = require('react')
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

//default layout for pages
function Def (html) {
    return (
        <html>
            <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href='/'>R&R</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto navbar-nav text-uppercase ml-5 flex">
                            <Nav.Link href='/places'>Places</Nav.Link>
                            <Nav.Link href='/places/new'>Add a Place</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            <head>
                <title>Title</title>
                
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
                <div className="wrapper">
                    {html.children}
                </div>
            </body>
            <footer className="footer">
                <Navbar sticky="bottom" expand="lg">
                    <Container>
                        <Navbar.Brand href='/'>R&R</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Nav className="me-auto">
                                <Nav.Link href='#about'>About Us</Nav.Link>
                                <Nav.Link href='#founders'>Meet The Creators</Nav.Link>
                            </Nav>
                    </Container>
                </Navbar>
            </footer>
        </html>
    )
}

module.exports = Def