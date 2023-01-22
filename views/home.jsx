//dependencies
const React = require('react')
const Def = require('./default')
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

//Home Page
function home() {
    return(
        <Def>
            <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href='/'>R&R</Navbar.Brand>
                </Container>
            </Navbar>
        </Def> 
    )
}

module.exports = home