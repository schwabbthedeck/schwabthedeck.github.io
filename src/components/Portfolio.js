import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Portfolio.css';
import RandomWorkoutGeneratorImage from './images/RandomWorkoutGenerator.png';
import FancyTileImg from './images/FancyTileExampleScreenShot.png';
import AnnouncementsImg from './images/AnnouncementsWebPartScreenShot.png';
import FlowArtSite from './images/FlowArtWebSite.png';

function Portfolio() {
  return (
    <div className="portfolio">
      <Container>
        <Row>
          <Col>
            <h1>Portfolio</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Check out current and past projects of mine below.</p>
          </Col>
        </Row>
        <ProjectCard
          imagePath={RandomWorkoutGeneratorImage}
          name="Random Workout Generator"
          description="A little random workout generator I built to provide people workout inspiration. It was born from a friend working from home saying she was doing random workout exercises based on a card she drew from a deck. It was built with React and hosted on GitHub pages. I'm currently working on adding more features."
          destination="https://janeschwab.co/random-workout-generator/"
        />
        <ProjectCard
          imagePath={FancyTileImg}
          name="Fancy Tiles SharePoint Hosted Add-In"
          description="Fancy Tiles is a SharePoint Hosted Add-In to render styled tiles in a web part. The app file is available for download from the GitHub repository linked below. The readme file contains the instructions on how to install and configure the app. The design and development was all implemented by me."
          destination="https://github.com/schwabthedeck/FancyTiles"
        />
        <ProjectCard 
          imagePath={AnnouncementsImg}
          name="Announcements SharePoint Hosted Add-In"
          description="The Announcements Web Part is a SharePoint Hosted Add-In that is designed to render a SharePoint out of the box announcements list in a styled form. The app file is available for download from the GitHub repository linked below. The readme file contains instructions on how to install and configure the app and web part. The design and development was all implemented by me."
          destination="https://github.com/schwabthedeck/AnnouncementsWebPart"
        />
        <ProjectCard 
          imagePath={FlowArtSite}
          name="Artist Web Site"
          description="Website created for an artist that creates flow paint artwork in Pittsburgh, PA. Simple one page website."
          destination="https://www.flowcreativeanna.com/"
        />
      </Container>
    </div>
  );
}

class ProjectCard extends Component {
  render() {
    return (
      <Row className="card-row">
        <Col md={4} className="card-image-col">
          <Card.Img src={this.props.imagePath} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary" href={this.props.destination} target="_blank" rel="noopener noreferrer">
              Check it out!
           </Button>
          </Card.Body>
        </Col>
      </Row>
    );
  }
}

export default Portfolio;