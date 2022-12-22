import { Card, CardBody, CardTitle, CardText, Container } from "reactstrap";
import "./Portfolio.css";


function Portfolio() {
  return (
    <section className="col-md-4">
      <Card className="card">
        <CardBody>
          <CardTitle className="fw-bold text-center mb-3" style={{ fontSize: '1.5rem' }}>
            <h1 class="section-header">Technical Skills</h1>
          </CardTitle>
          <CardText style={{ fontSize: '1.2rem' }}>
            <Container className="dev-icons-container">
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/amazonwebservices/amazonwebservices-original.svg" />
                <h6>Amazon Web Services</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/css3/css3-original.svg" />
                <h6>CSS</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/express/express-original.svg" />
                <h6>Express</h6>
              </div>

              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                <h6>Flask</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/html5/html5-original.svg" />
                <h6>HTML</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/javascript/javascript-original.svg" />
                <h6>Javascript</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/jquery/jquery-original.svg" />
                <h6>jQuery</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/nodejs/nodejs-original.svg" />
                <h6>NodeJs</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/postgresql/postgresql-original.svg" />
                <h6>Postgresql</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/python/python-original.svg" />
                <h6>Python</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/react/react-original.svg" />
                <h6>React</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg" />
                <h6>Sqlalchemy</h6>
              </div>
              <div className="dev-icons">
                <img src="https://cdn.jsdelivr.net/npm/devicon-2.2@2.2.0/icons/typescript/typescript-original.svg" />
                <h6>Typescript</h6>
              </div>
            </Container>
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>
            <h1>Warbler</h1>
          </CardTitle>
          <CardText>
            <Container>

            </Container>
          </CardText>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <CardTitle>
            <h1>Jobly</h1>
          </CardTitle>
          <CardText>
            <Container>

            </Container>
          </CardText>
        </CardBody>
      </Card>


      <Card>
        <CardBody>
          <CardTitle>
            <h1>Friender</h1>
          </CardTitle>
          <CardText>
            <Container>

            </Container>
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}


export default Portfolio;