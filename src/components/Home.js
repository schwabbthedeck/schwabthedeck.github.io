import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div className='home-page'>
      <Container>
        <Row>
          <Col xs lg={8}>
            <h1>Hello!</h1>
            <p>
              I'm Jane. I have been a software engineer and have full-stack experience. I am currently focused on front-end web development.
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