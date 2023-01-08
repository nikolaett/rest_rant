//dependencies
const React = require('react')
const Def = require('../default')
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

//places index
function index(data) {
    let placesFormatted = data.places.map((place) => {
        return(
            <div className="col-sm-6">
                <Row xs={1} md={2} className={"ms-3 pb-3"}>
                    <Col className="md-4">
                        <Card bg={'dark'} style={{width: '18rem'}} text={'light'} className={'h-100'}>
                            <Card.Img variant="top" src={place.pic} alt={place.name}/>
                            <Card.Body>
                                <Card.Title>{place.name}</Card.Title>
                                <Card.Text className="mb-0">{place.cuisines}</Card.Text>
                                <Card.Text>Located in {place.city}, {place.state}.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
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