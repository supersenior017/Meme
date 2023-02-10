import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import threeCharacters from "../../images/three_characters.png";
import "./Projects.css";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
import UpcomingCards from "../UpcomingCards/UpcomingCards";
import { useDispatch, useSelector } from "react-redux";
import { loadLaunchInfo } from "../../store/reducer/launch_reducer";
import { projIds } from "../../store/reducer/launch_reducer/projectInitialStates";

function Projects(props) {
  const allProjects = useSelector((state) => state.launch);
  const connected = useSelector((state) => state.web3.connected);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (connected) {
        for (let i = 0; i < projIds.length; ++i) {
          dispatch(loadLaunchInfo(projIds[i]));
        }
      }
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  });
  const liveLaunches = [],
    completedLaunches = [],
    upcomingLaunches = [];

  projIds.forEach((val) => {
    const launchCard = (
      <Col lg={4} md={6}>
        <Link key={val} to={`/dashboard/celebrity-nfts/${val}`}>
          <Cards projDetails={allProjects[val]} />
        </Link>
      </Col>
    );
    if (allProjects[val].isFinished) completedLaunches.push(launchCard);
    else if (allProjects[val].startTime * 1000 < Date.now())
      liveLaunches.push(launchCard);
    else upcomingLaunches.push(launchCard);
  });
  return (
    <div>
      <div className="project-banner-container">
        <div className="banner-container-content">
          <div>
            <h2>NFT Launchpad</h2>
            <p>View upcoming projects and our past launches</p>
          </div>
          <div className="banner-img">
            <img src={threeCharacters} alt="Rocket" />
          </div>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <h2 className="projects-launchTitle">Upcoming Launches</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="p-4">
          <Col lg={4} md={6}>
            <UpcomingCards />
          </Col>
          <Col lg={4} md={6}>
            <UpcomingCards />
          </Col>
          {upcomingLaunches}
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <h2 className="projects-launchTitle">LIVE Launches</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="p-4">{liveLaunches}</Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <div>
              <h2 className="projects-launchTitle">Completed Launches</h2>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="p-4">
          {completedLaunches}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
