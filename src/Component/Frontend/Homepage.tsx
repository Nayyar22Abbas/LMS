import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export const Homepage = () => {
  return (
    <>
      <div className='main-div' style={{ backgroundColor: '#e0e0e0', minHeight: '100vh', borderRadius: '20px', padding: '20px' }}>
        <div className='navbar' style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
          <h1 style={{ margin: '0' }}>Welcome To LMS</h1>
          <Nav variant="underline" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>


     
        </div>

        <div className='cards' style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', marginTop: '25%' }}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>

        {/* Copyright notice */}
        <div style={{ marginTop: '20px', textAlign: 'center', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          <p>© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};
