import { Card, CardBody, CardTitle, CardText, Container } from "reactstrap";
import "./Portfolio.css";
import Jobly from "./static/images/Jobly.png";
import Warbler from "./static/images/Warbler.png";
import React from 'react';

function Portfolio() {
  return (
    <section className="col-md-4">
      <Card className="card">
        <CardBody>
          <CardTitle className="fw-bold text-center mb-3" style={{ fontSize: '1.5rem', textAlign: "center" }}>
            <h1 className="section-header">Technical Skills</h1>
          </CardTitle>
          <CardText style={{ fontSize: '1.2rem' }}>
            <Container className="dev-icons-container">
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/amazonwebservices/amazonwebservices-original.svg" alt="technology logo" />
                <h6>Amazon Web Services</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/css3/css3-original.svg" alt="technology logo" />
                <h6>CSS</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/express/express-original.svg" alt="technology logo" />
                <h6>Express</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="technology logo" />
                <h6>Flask</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/html5/html5-original.svg" alt="technology logo" />
                <h6>HTML</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/javascript/javascript-original.svg" alt="technology logo" />
                <h6>Javascript</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/jquery/jquery-original.svg" alt="technology logo" />
                <h6>jQuery</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/nodejs/nodejs-original.svg" alt="technology logo" />
                <h6>NodeJs</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/postgresql/postgresql-original.svg" alt="technology logo" />
                <h6>Postgresql</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/python/python-original.svg" alt="technology logo" />
                <h6>Python</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/react/react-original.svg" alt="technology logo" />
                <h6>React</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" alt="technology logo" />
                <h6>Sqlalchemy</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/typescript/typescript-original.svg" alt="technology logo" />
                <h6>Typescript</h6>
              </div>
            </Container>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>
            <h1 style={{ textAlign: 'center' }}>Jobly</h1>
          </CardTitle>
          <CardText>
            <Container>
              <div style={{ textAlign: 'center' }}>
                <img src={Jobly} ></img><br />
                <p>Jobly is a full stack application used to search for jobs. Built using React, Node, Express, PostgreSQL and Bootstrap</p>
                <div className="text-center">
                  <a href="https://react-jobly-frontend.onrender.com/" className="btn btn-secondary link-item">Demo</a>
                  <a href="https://github.com/trevorhudson/react-jobly-frontend" className="btn btn-secondary link-item">Front End</a>
                  <a href="https://github.com/byunboy2/Express-Jobly" className="btn btn-secondary link-item">Back End</a>
                </div>
              </div>
            </Container>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>
            <h1 style={{ textAlign: 'center' }}>Warbler</h1>
          </CardTitle>
          <CardText>
            <Container>
              <div style={{ textAlign: 'center' }}>
                <img src={Warbler} ></img><br />
                <p>Warbler is a full stack application that imitates Twitter. Built using Python, Flask, Bootstrap, HTML, CSS, SqlAlchemy and PostgreSQL</p>
                <div className="text-center">
                  <a href="https://warbler-3r1p.onrender.com/">Demo</a>
                  <a href="https://github.com/byunboy2/rithm-warbler-Daniel-" className="btn btn-secondary link-item">Back End</a>
                </div>
              </div>
            </Container>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}


export default Portfolio;