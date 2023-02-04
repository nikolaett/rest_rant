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
                                <option>Select a State ...</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
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
