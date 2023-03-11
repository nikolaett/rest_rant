//dependencies
const React = require('react')
const Def = require('../default')
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

//new places form
function new_form(data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert alert-danger" role="alert">
                {data.message}
            </h4>
        )
    }
    return(
        <Def>
            <main>
                <h1>Add a Place Worth Talking About!</h1>
                {message}
                <Form method="POST" action="/places">
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Place Name</Form.Label>
                            <Form.Control  id="name" name="name" required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Founded Year</Form.Label>
                            <Form.Control type="number" id="founded" name="founded" value={new Date().getFullYear()} />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control id="city" name="city"/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control id="state" name="state"/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Cuisine Served</Form.Label>
                            <Form.Control id="cuisines" name="cuisines" required/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Place Picture</Form.Label>
                            <Form.Control id="pic" name="pic" /> 
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
