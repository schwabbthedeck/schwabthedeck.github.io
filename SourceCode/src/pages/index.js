import React from "react"
import Layout from "../components/layout/Layout"

// import Hero from "../components/hero/Hero"
// import Summary from "../components/summary/Summary"
// import Projects from "../components/projects/Projects"

import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "../JaneSchwabResume.pdf" //Import you CV file here!
// import other from "/" //Import other downloadable here

//import bootstrap styles
import "../bootstrap/css/bootstrap.min.css"

//import my custom styles
import "./index.css"

export default () => (
  <div className="App">
    <Layout>
      {/* <Hero />
      <hr />
      <Summary />
      <hr />
      <Projects />
      <hr /> */}
      <MyJumbo 
        title={"Hi, I'm Jane!"}
        body={
          "If you're looking for a developer who loves a good challenge, or a STEM tutor who has a passion for inspiring students, look no further."
        }
      />

      {/* <MyJumbo
        body={
          "So you are looking for a professional, communicative & punctual software engineer who likes to keep productive."
        }
        body2={"I can also do this cool thing if that's... needed."}
        title={"tldr; About me."}
      /> */}
      <hr />
      <Container fluid>
        <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          <MyButton text={"Resume download"} URL={CV} />
          <MyButton text={"LinkedIn Profile"} URL="https://www.linkedin.com/in/jane-schwab-b7019538/" />
        </Row>
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <h5>I love Coffee. I mean, more than people normaly like coffee</h5>
            <br /> */}
            <p>
              I'm a developer based in Pittsburgh, Pennsylvania with five years of experience as a technical consultant. I'm currently working full-time as a SharePoint developer but also open to part-time work. Feel free to reach out to me if you have any kind of programming need.

              <br />
              <br />

              My passion is in front-end development and creating a great user experience. However, I enjoy working with all kinds of technologies and have experience not only with HTML, CSS, JavaScript, but also in C#. And I'm always up to learn a new language or technology.

              <br />
              <br />
              
              My education is in Mechanical Engineering, so I'm also very comfortable and strong in mathematics. If you're looking for a math, science, or physics from high school to college levels, feel free to reach out as well. I love tutoring and teaching and inspiring students to unlock their full potential.

              <br />
              <br />

              {/* I enjoy working with all different kinds of technologies. I have a passion for front-end development, and also have experiecne in .NET and C#. And I'm always up to learn a new language or technology. 
              <br />
              <br />
              I'm a quick learner and can learn on the fly to get the job done. I love digging in and solving problems. I don't take myself too seriously, love a good team setting, but always take my work professionally. 
              <br />
              <br /> */}
              {/* As a Senior Consultant at Gimmal, I filled the technical roles of projects. This included
              creating custom applications and interfaces for our clients in SharePoint.
              <br />
              <br /> */}
              {/* I was drawn to development through my mechnical engineering education. I started doing research
              during my undergraduate career around spacecraft re-entry. I was intrigued by the physics around
              the process along with the software being used to complete the calculations. From there, I persued a Master's Degree from Johns Hopkins in Mechanical Engineering with a
              focus in Fluid Mechanics. While completing my Master's degree, I worked on post-processing data from 
              fluid flow calculations in Python along with writing separate small programs doing numerical analysis. 
              <br />
              <br />*/}
              <strong>Proficient in:</strong> JavaScript (experience with React and  Node.js), HTML, CSS, C#, PowerShell, and SharePoint 2013/SharePoint 2016/SharePoint Online.  
              <br />
              <strong>Knowledgeable in:</strong> Python, MATLAB, and LaTeX. 
              <br />
              <strong>Familiarity and past experience with:</strong> C++, C, Java,  VBA, Ubuntu, Labview, Solidworks, AutoDesk Inventor, ANSYS/Fluent v13. 

            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the career section*/}
        <Row>
          <Col>
            <h3>Current employment</h3>
          </Col>
        </Row>
        <Row>
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
            <p style={{ marginTop: "1rem" }}>
              <ul style={{ listStyle: "disc" }}>
                <li>Maintain custom intranet in SharePoint</li>
                <li>Fix bugs and update code inherited from previous phase projects</li>
                <li>Design and develop cutsom pages</li>
                <li>Communicate with various teams throughout the company to ensure all their requirements are met for their teams' sites</li>
              </ul> 
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h3>Past work experience</h3>
          </Col>
        </Row>
        {/* Position number 1 */}
        <Row>
          <Col>
            <h5>Senior Consultant</h5>
          </Col>
        </Row>
        <Row>
          <Col>Gimmal, Houston, TX</Col>
          <Col>April 2017 - May 2019</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <ul style={{ listStyle: "disc" }}>
                <li>Develop custom code solutions for clients, primarily based in and around SharePoint technologies</li>
                <li>Create custom UI interactions using HTML, CSS, and JavaScript catered to the client’s preferences </li>
                <li>Lead small projects for custom solutions, including a custom “connector” from Gimmal Software to third-party software </li>
                <li>Collaborate with project managers and clients to understand needs, incorporate regular feedback, and create desired outcomes</li>
                <li>Translate design documents and mockups into working pages and solutions  </li>
                <li>Train other consultants at Gimmal in installing products, troubleshooting issues, and writing customized code for their clients </li>
                <li>Contribute to Support Team to triage, research, and resolution of escalated support tickets</li>
                <li>Develop training references for custom developed modules</li>
                <li>Contributed to project task definition and estimates and managed and reported status accordingly</li>
              </ul> 
            </p>
          </Col>
        </Row>
        <hr />
        {/* Gimmal Software Engineer */}
        <Row>
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
            <p style={{ marginTop: "1rem" }}>
              <ul style={{ listStyle: "disc" }}>
                <li>Worked alongside a team of project managers, architects, and other developers to engineer SharePoint software solutions and new Gimmal products  </li>
                <li>Translated mockups and wireframes by UX Designers into functional UI/UX SharePoint pages using  JavaScript, CSS and HTML  </li>
                <li>Used Microsoft.Net and C# to build services to interact with each client’s application  </li>
                <li>Assisted with ongoing product troubleshooting, including investigating and resolving reported bugs</li>
                <li>Ensured codebase integrity by working with development team members using Team Foundation Server</li>
              </ul> 
            </p>
          </Col>
        </Row>
        <hr />
        {/* Beach Street */}
        <Row>
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
            <p style={{ marginTop: "1rem" }}>
              <ul style={{ listStyle: "disc" }}>
                <li>Developed Documentum application, including Object Model, Cabinet/Folder Structure, and Java Methods implemented via Documentum Jobs</li>
                <li>Customized subversion repository, including creating and managing users and access levels</li>
                <li>Completed Beach Street Documentum 101 Training</li>
                <li>Completed EMC D2 training</li>
              </ul>
            </p>
          </Col>
        </Row>
        <hr />
        {/* UNH Research */}
        <Row>
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
            <p style={{ marginTop: "1rem" }}>
              <ul style={{ listStyle: "disc" }}>
                <li>Conducted Computational Fluid Dynamics (CFD) analysis to determine drag and lift forces of various objects ejected from a space vehicle during re-entry; parameters were used to establish flight trajectory and determine risk of collision with space vehicle</li>
                <li>Analyzed materials using geometry generation, set up simulations using ANSYS/Fluent, and processed and post-processed results</li>
                <li>Prepared and presented reports at research meetings with faculty, graduate researcher, and industry sponsor</li>
                <li>Presented work at the Annual Meeting of the American Physical Society, Division of Fluid Dynamics in Baltimore, MD, November 2011</li>
                <li>Project Sponsor: Pioneer Aerospace; Project Advisor: Dr. Maria-Isabel Carnasciali</li>
              </ul>
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the education section*/}
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
    </Layout>
  </div>
)
