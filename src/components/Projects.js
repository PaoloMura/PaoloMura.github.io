import { Badge, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import projects from "../data/projects.json";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import ProjectPage from "./ProjectPage";

function getTagType(tag) {
  switch (tag.type) {
    case "Language":
      return "primary";
    case "Technology":
      return "success";
    case "Topic":
      return "danger";
    default:
      return "secondary";
  }
}

function Project({ page, title, tags, image, onSelected }) {
  const handleClick = () => {
    onSelected(page);
  };

  return (
    <Col sm={12} md={6} lg={4} className="project">
      <button onClick={handleClick} className="project-button">
        <Card className="project-card">
          <Card.Header>{title}</Card.Header>
          <Card.Body>
            <div className="tag-wrapper">
              {tags.map((tag, idx) => (
                <Badge key={idx} pill bg={getTagType(tag)}>
                  {tag.tag}
                </Badge>
              ))}
            </div>
          </Card.Body>
          <Card.Img src={image} />
        </Card>
      </button>
    </Col>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  if (selected !== null)
    return (
      <div className="projects">
        <Button variant="secondary" size="lg" onClick={() => setSelected(null)}>
          Back to all projects
        </Button>
        <ProjectPage project={selected} />
      </div>
    );

  return (
    <div className="projects">
      <Container>
        <Row>
          {projects.projects.map((project, idx) => (
            <Project
              key={idx}
              title={project.title}
              image={project.image}
              tags={project.tags}
              page={project.page}
              onSelected={setSelected}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
