//dependencies
const React = require('react')
const Def = require('../default')
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'


//places index
function index(data) {
    let placesFormatted = data.places.map((place) => {
        return(
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({length: 1}).map((_, idx) => 
                    <Col>
                        <Card bg={'dark'} style={{width: '18rem'}} text={'light'}>
                            <Card.Img variant="top" src={place.pic} alt={place.name}/>
                            <Card.Body>
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text>{place.cuisines}</Card.Text>
                                <Card.Text>Located in {place.city}, {place.state}.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                )}
            </Row>
        )
    })
    return(
        <Def>
            <main>
                <h1>Places Index</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index