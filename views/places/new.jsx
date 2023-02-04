//dependencies
const React = require('react')
const Def = require('../default')
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

//new places form
function new_form() {
    return(
        <Def>
            <main>
                <h1>Add a Place Worth Talking About!</h1>
                <Form method="POST" action="/places">
                    <Row className="mb-3">
                        <Form.Group as={Col} id="place">
                            <Form.Label>Place Name</Form.Label>
                            <Form.Control  id="name" name="name" required/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} id="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control id="city" name="city"/>
                        </Form.Group>

                        <Form.Group as={Col} id="state">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3" id="cuisines">
                        <Form.Group as={Col} id="cuisines">
                            <Form.Label>Cuisine Served</Form.Label>
                            <Form.Control id="cuisines" name="cuisines" placeholder="Cuisine" required/>
                        </Form.Group>
                        <Form.Group as={Col} id="pic">
                            <Form.Label>Place Picture</Form.Label>
                            <Form.Control type="url" id="pic" name="pic" /> 
                        </Form.Group>
                    </Row>
                    <Button variant="primary" type="submit">
                        Add Place
                    </Button>
                </Form>
            </main>
        </Def>
    )
}

module.exports = new_form
