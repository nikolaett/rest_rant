//dependencies
const React = require('react')
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

//default layout for pages
function Def (html) {
    return (
        <html>
            <header className="header">
                <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href='/'>R&R</Navbar.Brand>
                    </Container>
                </Navbar>
            </header>
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
                    </Container>
                </Navbar>
            </footer>
        </html>
    )
}

module.exports = Def