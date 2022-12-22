import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  return (
    <div styles={{ backgroundImage: "url('https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img(20).webp')" }}>
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="fw-bold" style={{ fontSize: "5em" }}>
              Hi, I'm Daniel!<br/>
              Software Engineer<br/>
              <i class="bi bi-geo-alt-fill"></i> Fullerton, CA
            </p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
            <a href="https://github.com/byunboy2" class="nav-link"><i class="bi bi-github" ></i>Github</a>
            <a href="https://www.linkedin.com/in/daniel-b-75895424a/" class="nav-link"><i class="bi bi-linkedin"></i>Linkedin</a>
            </div>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
    </div>
  );
}

export default Home;


