import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import Img from 'gatsby-image'

// props:
/* 
project = {
  title: title of project
  description: project description
  demoUrl: link to working example
  sourceUrl: link to github or source code
  image: image of project to show
}
*/

const ProjectCard = (props) => {
  const picture = props.project.image;
  console.log(picture);
  return (
    <Row className="my-3 pt-3">
      <Col>
        <Img title={props.project.title} alt={props.project.title} fluid={picture} />
      </Col>
      <Col className="p-2">
        <h2>{props.project.title}</h2>
        <div>{props.project.description}</div>
        <div className="mt-2">
          {props.project.demoUrl ? <Button href={props.project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</Button> : ''}
          {`  `}
          {props.project.sourceUrl ? <Button variant="outline-primary" href={props.project.sourceUrl} target="_blank" rel="noopener noreferrer">Source</Button> : ''}
        </div>
      </Col>
    </Row>
  )
}

export default ProjectCard;
