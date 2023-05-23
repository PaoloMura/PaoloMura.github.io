import { Badge, Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import projects from '../data/projects.json'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'
import ProjectPage from './ProjectPage'

function getTagType(tag) {
    switch (tag.type) {
        case 'Language':
            return 'primary';
        case 'Technology':
            return 'success';
        case 'Topic':
            return 'danger';
        default:
            return 'secondary';
    }
}

function Project({ page, title, tags, image, onSelected }) {
    const handleClick = () => {
        onSelected(page)
    }

    return (
        <Col className='project'>
            <Button variant='light' onClick={handleClick}>
                <Card>
                    <Card.Header>
                        {title}
                    </Card.Header>
                    <Card.Body>
                        {tags.map(
                          (tag, idx) => (
                            <div key={idx}>
                                <Badge pill bg={getTagType(tag)}>
                                    {tag.tag}
                                </Badge>
                                {' '}
                            </div>
                          )
                        )}
                    </Card.Body>
                    <Card.Img src={image}/>
                </Card>
            </Button>
        </Col>
    )
}

export default function Projects() {
    const [selected, setSelected] = useState(null)

    if (selected !== null) return (
      <div className='projects'>
        <Button
          variant='secondary'
          size='lg'
          onClick={() => setSelected(null)}
        >
            Back to all projects
        </Button>
        <ProjectPage project={selected}/>
      </div>
    )

    return (
        <div className='projects'>
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
