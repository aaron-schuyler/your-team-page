import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Schedule from './components/schedule.js'
import Announcements from './components/announcements.js'
import Volunteer from './components/volunteer.js'
import Nav from 'react-bootstrap/Nav'
import { Link, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <h1>{teamName}</h1>
        <Container className='p-3'>
          <Row>
            <Nav>
              <Nav.Item>
                <Link className='nav-link' to='/schedule'>Schedule</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' to='/announcements'>Announcements</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' to='/volunteer'>Volunteer</Link>
              </Nav.Item>
            </Nav>
          </Row>
        </Container>
        <Switch>
          <Route exact path='/'>
            <Redirect to={{ pathname: '/schedule' }} />
          </Route>
          <Route exact path='/schedule' component={Schedule} />
          <Route exact path='/announcements' component={Announcements} />
          <Route exact path='/volunteer' component={Volunteer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
const teamName = 'Bob Jones Academy'
export default App;
