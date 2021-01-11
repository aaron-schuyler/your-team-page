import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


export default function Schedule() {
  return (
    <Container className='p-3'>
      <Row>
        <Col className='border rounded p-3'>
          <h2>Announcements</h2>
          {
            announcements.map(announcement => {
              return <Card className='my-3' key={announcement.date}>
                <Card.Title>{announcement.title}</Card.Title>
                <Card.Subtitle>{announcement.date}</Card.Subtitle>
                <Card.Text>{announcement.content}</Card.Text>
              </Card>
            })
          }
        </Col>
      </Row>
    </Container>
  )
}

const announcements = [
  {
    title: 'Practice Rescheduled',
    content: 'Practice has been rescheduled to friday evening at 7PM.',
    date: 'Jan 1, 2021'
  },
  {
    title: 'Pizza Party',
    content: 'We are having a pizza party after practice this week.',
    date: 'Dec 17, 2020'
  },
  {
    title: 'Welcome to the new season',
    content: 'Welcome to the new season team, I hope you are ready to play.',
    date: 'Oct 10, 2020'
  }
]
