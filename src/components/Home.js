import React from 'react';
import './Home.css'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className='homepage'>
      <Container>
        <Row>
          <Col xs lg={6}>
            <h1>Jane Schwab</h1>
            <p>
              Hello! I'm Jane, a full-stack developer always looking to learn more.
            </p>
            <p>
              Explore my site and let me know what you think.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;