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
            <Navbar fixed="bottom" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href='/'>R&R</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href='#about'>About Us</Nav.Link>
                                <Nav.Link href='#founders'>Meet The Creators</Nav.Link>
                            </Nav>
                    </Container>
                </Navbar> 
            <head>
                <title>Title</title>
                <script src="https://cdn.jsdelivr.net/npm/react-bootstrap/dist/react-bootstrap.min.js" integrity="sha256-RBXvJRV1Cegu22f4A5hCDHesQG024//DTBKClGz5SGo=" crossOrigin="anonymous"></script>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
                <Container fluid>
                    {html.children}
                </Container>
            </body>
        </html>
    )
}

module.exports = Def