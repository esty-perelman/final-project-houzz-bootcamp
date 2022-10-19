import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// function RowColLayoutColWidthBreakpointExample() {

 
function TableRequests() {

  const [requests, setRequests] = useState([
  {
    "_id": "631f1dc2ca4b12a93c6236f5",
    "requestNumber": 1,
    "sender": "tz0556769591@gmail.com",
    "subject": "how much?",
    "content": "I don't find the price of product 121",
    "status": false
  }
  ]);
   
  useEffect(() => 
  {
    initRequests().then(data => setRequests(data));
  }, []);

  const initRequests = async() => 
  {
    const response = await fetch('http://localhost:8080/requests');
    const data = await response.json();
    console.log('data: '+data);
    return data;
  }

  return (
    <Container>
        {requests.filter(req => req.status === false).map((r,index) => (
          // need do this evry 2 times
          <Row md={4}> 
            <Col> 
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title> {r.requestNumber} </Card.Title>
                  <Card.Subtitle> { r.subject} </Card.Subtitle>
                  <Card.Text> {r.content} </Card.Text>
                  <Card.Text><small className="text-muted"> { r.status.toString() }</small></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        ))}
      
      {requests.filter(req => req.status === true).map((r,index) => (
          // need do this evry 2 times
          <Row md={4}> 
            <Col> 
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title> {r.requestNumber} </Card.Title>
                  <Card.Subtitle> { r.subject} </Card.Subtitle>
                <Card.Text> {r.content} </Card.Text>
                <Card.Text><small className="text-muted"> { r.status.toString() }</small></Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        ))}
       
    </Container>
    
  )
}
export default TableRequests;