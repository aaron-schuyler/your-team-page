import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'


export default function Schedule() {
  const teamName = 'Bob Jones Academy'
  return (
    <Container className='p-3'>
      <Row>
        <Col className='border rounded p-3'>
          <h2>Games</h2>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Game</th>
                <th>Date</th>
                <th>Game Location</th>
                <th>Playing Against</th>
                <th>Game Type</th>
              </tr>
            </thead>
            <tbody>
              {
                games.sort((a, b) => a.startTime - b.startTime).map(game => {
                  let home = false
                  if (game.homeTeam == teamName) home = true
                  return (
                    <tr key={game.id}>
                      <td>{game.id}</td>
                      <td>{new Date(game.startTime).toLocaleString()}</td>
                      <td>TBD</td>
                      <td>{home ? game.awayTeam.organization.name : game.homeTeam.organization.name}</td>
                      <td>{home ? 'Home': 'Away'}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}


const games = [
            {
                id: 8,
                startTime: "2020-11-13T18:00:00Z",
                homeTeam: {
                    organization: {
                        name: "Shannon Forest Christian School"
                    }
                },
                awayTeam: {
                    organization: {
                        name: "Bob Jones Academy"
                    }
                }
            },
            {
                id: 30,
                startTime: "2020-11-19T18:00:00Z",
                homeTeam: {
                    organization: {
                        name: "Oakwood Christian School"
                    }
                },
                awayTeam: {
                    organization: {
                        name: "Bob Jones Academy"
                    }
                }
            },
            {
                id: 90,
                startTime: "2020-12-03T17:30:00Z",
                homeTeam: {
                    organization: {
                        name: "Oconee Christian Academy"
                    }
                },
                awayTeam: {
                    organization: {
                        name: "Bob Jones Academy"
                    }
                }
            },
            {
                id: 119,
                startTime: "2020-12-07T17:30:00Z",
                homeTeam: {
                    organization: {
                        name: "Hampton Park Christian School"
                    }
                },
                awayTeam: {
                    organization: {
                        name: "Bob Jones Academy"
                    }
                }
            },
            {
                id: 292,
                startTime: "2021-01-12T18:30:00Z",
                homeTeam: {
                    organization: {
                        name: "Westgate Christian School"
                    }
                },
                awayTeam: {
                    organization: {
                        name: "Bob Jones Academy"
                    }
                }
            }
        ]
