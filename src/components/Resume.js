import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import resume from './JaneSchwabResume.pdf'

function Resume() {
  return (
    <div className='resume'>
      <Container>
        {/* TODO: add skill sets here? */}
        <Row>
          <Col>
            <h1>Resume</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              To download a PDF version of my resume, <a href={resume} target="_blank" rel="noopener noreferrer">click here</a>.
            </div>
          </Col>
        </Row>
        {/* Perkins Eastman */}
        <Row className="job-section">
          <Col>
            <h5>KRT SharePoint Developer</h5>
          </Col>
        </Row>
        <Row>
          <Col>Perkins Eastman, Pittsburgh, PA</Col>
          <Col>June 2019 - Present</Col>
        </Row>
        <Row>
          <Col>
            <ul>
              {/* TODO update wording here away from SharePoint. Mention design */}
              <li>Maintain custom intranet in SharePoint which consists of writing custom SharePoint functionality</li>
              <li>Design and develop custom SharePoint add-ins, forms, page layouts, pages, and display templates</li>
              <li>Fix bugs and update code inherited from previous phase projects</li>
              <li>Communicate with various teams to ensure all their requirements are met for their teams' sites</li>
            </ul>
          </Col>
        </Row>
        {/* Gimmal */}
        <Row className="job-section">
          <Col>
            <h5>Senior Consultant</h5>
          </Col>
        </Row>
        <Row>
          <Col>Gimmal, Houston, TX / Remote</Col>
          <Col>April 2017 - May 2019</Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Develop custom code solutions for clients, primarily based in and around SharePoint technologies</li>
              <li>Create custom UI interactions using HTML, CSS, and JavaScript catered to the client’s preferences </li>
              <li>Lead small projects for custom solutions, including a custom “connector” from Gimmal Software to third-party software </li>
              <li>Collaborate with project managers and clients to understand needs, incorporate regular feedback, and create desired outcomes</li>
              <li>Translate design documents and mockups into working pages and solutions  </li>
              <li>Train other consultants at Gimmal in installing products, troubleshooting issues, and writing customized code for their clients </li>
              <li>Contribute to Support Team to triage, research, and resolution of escalated support tickets</li>
              <li>Develop training references for custom developed modules</li>
              <li>Contributed to project task definition and estimates and managed and reported status accordingly</li>
            </ul>
          </Col>
        </Row>
        <Row className="job-section">
          <Col>
            <h5>Software Engineer</h5>
          </Col>
        </Row>
        <Row>
          <Col>Gimmal, Houston, TX</Col>
          <Col>November 2014 - April 2017</Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Worked alongside a team of project managers, architects, and other developers to engineer SharePoint software solutions and new Gimmal products  </li>
              <li>Translated mockups and wireframes by UX Designers into functional UI/UX SharePoint pages using  JavaScript, CSS and HTML  </li>
              <li>Used Microsoft.Net and C# to build services to interact with each client’s application  </li>
              <li>Assisted with ongoing product troubleshooting, including investigating and resolving reported bugs</li>
              <li>Ensured codebase integrity by working with development team members using Team Foundation Server</li>
            </ul>
          </Col>
        </Row>
        {/* Beach street */}
        <Row className="job-section">
          <Col>
            <h5>Junior Developer</h5>
          </Col>
        </Row>
        <Row>
          <Col>Beach Street Consulting, Chevy Chase, MD</Col>
          <Col>May 2014 - August 2014</Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Developed Documentum application, including Object Model, Cabinet/Folder Structure, and Java Methods implemented via Documentum Jobs</li>
              <li>Customized subversion repository, including creating and managing users and access levels</li>
              <li>Completed Beach Street Documentum 101 Training</li>
              <li>Completed EMC D2 training</li>
            </ul>
          </Col>
        </Row>
        {/* UNH Research */}
        <Row className="job-section">
          <Col>
            <h5>Research Assistant</h5>
          </Col>
        </Row>
        <Row>
          <Col>Mechanical Engineering Department, University of New Haven, West Haven, CT</Col>
          <Col>June 2011 - May 2012</Col>
        </Row>
        <Row>
          <Col>
            <ul>
              <li>Conducted Computational Fluid Dynamics (CFD) analysis to determine drag and lift forces of various objects ejected from a space vehicle during re-entry; parameters were used to establish flight trajectory and determine risk of collision with space vehicle</li>
              <li>Analyzed materials using geometry generation, set up simulations using ANSYS/Fluent, and processed and post-processed results</li>
              <li>Prepared and presented reports at research meetings with faculty, graduate researcher, and industry sponsor</li>
              <li>Presented work at the Annual Meeting of the American Physical Society, Division of Fluid Dynamics in Baltimore, MD, November 2011</li>
              <li>Project Sponsor: Pioneer Aerospace; Project Advisor: Dr. Maria-Isabel Carnasciali</li>
            </ul>
          </Col>
        </Row>
        <hr />
        {/* Education*/}
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        {/* Masters Degreee*/}
        <Row>
          <Col>
            <h5>M.S.E., Mechanical Engineering</h5>
          </Col>
        </Row>
        <Row>
          <Col>Johns Hopkins University, Baltimore, MD</Col>
          <Col>May 2014</Col>
        </Row>
        <Row>
          <Col>
            Area of Concentration: Fluid Mechanics
            {/* <p style={{ marginTop: "1rem" }}>
              <strong>Specialization:</strong>
              <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Tenetur quasi fugit accusamus officia sequi optio nulla,
              cupiditate in vitae natus odit nihil commodi corrupti mollitia
              necessitatibus iure eius praesentium? Fugit!
            </p> */}
          </Col>
        </Row>
        <br />
        {/* BS Degree */}
        <Row>
          <Col>
            <h5>B.S., Mechanical Engineering</h5>
          </Col>
        </Row>
        <Row>
          <Col>University of New Haven, West Haven, CT</Col>
          <Col>May 2012</Col>
        </Row>
        <Row>
          <Col>
            <p>Minor: Mathematics</p>
            {/* <p style={{ marginTop: "1rem" }}>
              <strong>Specialization:</strong>
              <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Tenetur quasi fugit accusamus officia sequi optio nulla,
              cupiditate in vitae natus odit nihil commodi corrupti mollitia
              necessitatibus iure eius praesentium? Fugit!
            </p> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;