//dependencies
const React = require('react');
const Def = require('../default');
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

//edit form
function edit_form(data) {
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>
                <Form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <Row className="mb-3">
                        <Form.Group as={Col} id="name">
                            <Form.Label>Place Name</Form.Label>
                            <Form.Control  id="name" name="name" value={data.place.name} required/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} id="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control id="city" name="city" value={data.place.city} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control id="state" name="state" value={data.place.state}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} id="cuisines">
                            <Form.Label>Cuisine Served</Form.Label>
                            <Form.Control id="cuisines" name="cuisines" value={data.place.cuisines} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Place Picture</Form.Label>
                            <Form.Control id="pic" name="pic" value={data.place.pic} /> 
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Founding Year</Form.Label>
                            <Form.Control id="founded" name="founded" value={data.place.founded} />
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Update Place
                    </Button>
                </Form>
            </main>
        </Def>
    )
}

module.exports = edit_form