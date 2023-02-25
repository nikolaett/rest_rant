//dependencies
const React = require('react')
const Def = require('../default')
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

//places index
function index(data) {
    let placesFormatted = data.places.map((place) => {
        return(
            <div className="col-sm-6">
                <Card bg={'dark'} style={{width: '18rem'}} text={'light'} className="mb-3">
                    <Card.Img variant="top" src={place.pic} alt={place.name}/>
                        <Card.Body>
                            <Card.Title><a href={`/places/${place.id}`}>{place.name}</a></Card.Title>
                            <Card.Text className="mb-0">{place.cuisines}</Card.Text>
                            <Card.Text>Located in {place.city}, {place.state}.</Card.Text>
                        </Card.Body>
                </Card>
            </div>
        )
    })
    return(
        <Def>
            <main>
                <div>
                    <h1>Places</h1>
                </div>
                <div>
                    <Row xs={1} md={2} className="ms-3">
                            {placesFormatted}
                    </Row>
                </div>
            </main>
        </Def>
    )
}

module.exports = index