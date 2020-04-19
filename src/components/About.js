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
            {/* <p>Hey, I'm Jane and I am a developer</p>
            <p>Hey, I'm Jane and thanks for checking out my site. I am a developer based in Pittsburgh, Pennsylvania with over five years of programming experience.</p>
            <p>I took my programming skills from my Mechanical Engineering education and entered the software development arena. I started my career in teams that were creating custom software for content management systems. This software was largely built for SharePoint environments, so I have a strong skill set in programming in Microsoft technologies.</p>
            <p>My passion is in front-end development and creating a great user experience. However, I enjoy working with all kinds of technologies and have experience not only with HTML, CSS, JavaScript, but also in C#. And I'm always up to learn a new language or technology. Recently, I have been using React to build a lot of my </p>
            <p>My education is in Mechanical Engineering, so I'm also very comfortable and strong in mathematics. If you're looking for a math, science, or physics from high school to college levels, feel free to reach out as well. I love tutoring and teaching and inspiring students to unlock their full potential.</p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;