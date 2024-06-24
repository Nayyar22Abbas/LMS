import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Homepage = () => {
  return (
    <div className='main-div' style={{
      backgroundColor: '#e0e0e0',
      minHeight: '100vh',
      borderRadius: '20px',
      padding: '20px'
    }}>
      <div className='navbar' style={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px'
      }}>
        <h1 style={{ margin: '0' }}>Welcome To LMS</h1>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Categories</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="logout" >
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className='cards' style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        marginTop: '25%',

      }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Books List</Card.Title>
            <Card.Text>
              Here you will find all the Books that we have in stock
            </Card.Text>
            <Button variant="primary">BOOK LIST</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Borrowed Books</Card.Title>
            <Card.Text>
              Here you will see all the books that you borrowed
            </Card.Text>
            <Button variant="primary">BORROWED BOOKS</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Reserved Books</Card.Title>
            <Card.Text>
              List of books reserved by you
            </Card.Text>
            <Button variant="primary">Reserved Books list</Button>
          </Card.Body>
        </Card>
      </div>

      <div style={{
        marginTop: '20px',
        textAlign: 'center',
        borderTop: '1px solid #ccc',
        paddingTop: '10px'
      }}>
        <p>© 2024 Your Company Name. All rights reserved.</p>
      </div>
    </div>
  );
};
