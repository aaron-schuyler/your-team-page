import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'


export default function Schedule() {
  const teamName = 'Bob Jones Academy'
  return (
    <Container className='p-3'>
      <Row>
        <Col className='border rounded p-3'>
          <h2>Volunteer</h2>
          <Form>
            <Row className='p-3'>
              <Col sm='6'>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      First Name
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type='text' />
                </InputGroup>
              </Col>
              <Col sm='6'>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Last Name
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type='text' />
                </InputGroup>
              </Col>
            </Row>
            <Row className='p-3'>
              <Col sm='6'>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Email Address
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type='email' />
                </InputGroup>
              </Col>
              <Col sm='6'>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Phone Number
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type='phone' />
                </InputGroup>
              </Col>
            </Row>
            <Row className='p-3'>
              <Col sm='6'>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Date
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type='date' />
                </InputGroup>
              </Col>
              <Col sm='6'>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      Volunteer Posiiton
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control as='select'>
                    <option disabled>Select One</option>
                    <option>Clock Operator</option>
                    <option>Consessions</option>
                    <option>Registration</option>
                  </Form.Control>
                </InputGroup>
              </Col>
            </Row>
            <Row className='p-3'>
              <Col className='text-right'><Button type='submit'>Submit</Button></Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
