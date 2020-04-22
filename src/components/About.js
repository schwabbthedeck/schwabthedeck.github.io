import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <div className='about-page'>
      <Container>
        <Row>
          <Col>
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col xs lg={8}>
            <p>Hi, I'm Jane, an experienced developer with a passion for user-centered solutions, both large and small. In my professional experience, which ranges from small business entrepreneurial endeavors to building and implementing larger scale solutions, I have learned that ease of use leads to more users being comfortable and engaging with the solutions efficiently and productively.</p>
            <p>While it was first highlighted in my engineering education, my strong problem solving abilities and practical intellectual curiosity are skills I have channeled and honed over the years as a developer. This has enabled me to help my clients craft a unique and stand-out first impression that best serves their own market spaces. I work with my clients to build strong and effective user-interfaces that showcases their product and mission in a way that best serves their brand. I firmly believe my clients and I are in a partnership, and I leverage my years of experience with my desire to assist a client in building a modern, efficient, and custom user-friendly web and application platform.</p>
            <p>If you’d like to learn more about how we can partner together to showcase your endeavors in a user-friendly web environment, I encourage you to <a href="/contact">contact me</a> with any questions—happy to help!</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;