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
                            <Form.Control  id="name" name="name" defaultValue={data.place.name} required/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} id="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control id="city" name="city" defaultValue={data.place.city} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control id="state" name="state" defaultValue={data.place.state}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} id="cuisines">
                            <Form.Label>Cuisine Served</Form.Label>
                            <Form.Control id="cuisines" name="cuisines" defaultValue={data.place.cuisines} required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Place Picture</Form.Label>
                            <Form.Control id="pic" name="pic" defaultValue={data.place.pic} /> 
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Edit Place
                    </Button>
                </Form>
            </main>
        </Def>
    )
}

module.exports = edit_form