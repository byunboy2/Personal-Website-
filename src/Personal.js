import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Selfie from "./static/images/Selfie.jpeg";
import "./Personal.css"


function Personal() {
  return (
    <section className="col-md-4">
        <Card className="card">
        <CardBody>
          <CardTitle className="fw-bold text-center mb-3" style={{ fontSize: '1.5rem' ,textAlign:"center"}}>
            <h1 class="section header">About</h1>
          </CardTitle>
          <div style={{ width: "100%", textAlign: "center" }}>
            <img src={Selfie} alt="Profile Picture" style={{ display: "inline-block" }} />
          </div>
          <CardText style={{ fontSize: '1.2rem' }}>
            <p>
              I originally majored in the life sciences, but have been working as
              an accountant for the past several years. I worked with several
              software engineers at my previous jobs to improve workflows and was
              duly awed by the impact they made.
            </p>
            <p>
              From what I've observed, the field involves a lot of creativity,
              collaboration and problem solving. Plus it is constantly evolving
              so no day is ever the same and there are limitless amount of
              opportunities.
            </p>
            <p>
              It amazes me how people from all walks of life from different parts
              of the world could get together build and scale applications that
              makes a positive impact and solve challenging problems all at the
              comfort of their homes. Furthermore, I truly believe software
              engineering is an egalitarian career. All one really needs is a
              laptop, good internet and a drive to succeed in this field.
            </p>
            <p>
              Inspired by the potential, I quit my job and enrolled in Rithm
              School to become a software engineer.
            </p>
          </CardText>
        </CardBody>
        </Card>
    </section>
  );
}

export default Personal;