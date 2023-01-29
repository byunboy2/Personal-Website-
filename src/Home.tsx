import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";


const Home: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).webp')",
      }}
    >
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <p className="fw-bold" style={{ fontSize: "5em" }}>
                Hi, I'm Daniel!
                <br />
                Software Engineer
                <br />
                <i className="bi bi-geo-alt-fill"></i> Fullerton, CA
              </p>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <a href="https://github.com/byunboy2" className="nav-link">
                  <i className="bi bi-github">Github</i>
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-b-75895424a/"
                  className="nav-link"
                >
                  <i className="bi bi-linkedin">Linkedin</i>
                </a>
              </div>
            </CardTitle>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}

export default Home;
