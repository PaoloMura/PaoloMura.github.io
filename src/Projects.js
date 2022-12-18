import { Badge, Col, Container, Image, Nav, Row, Stack } from "react-bootstrap";
import projects from './projects.json'

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

function Project(props) {
    return (
        <Col className='project'>
            <Nav.Link href={props.page}>
                <Stack gap={3}>
                    <h1>{props.title}</h1>
                    <h6>
                        {props.tags.map(
                            (tag) => (
                                <>
                                    <Badge pill bg={getTagType(tag)}>
                                        {tag.tag}
                                    </Badge>
                                    {' '}
                                </>
                            )
                        )}
                    </h6>
                    <Image fluid src={props.image}/>
                </Stack>
            </Nav.Link>
        </Col>
    )
}

function Projects() {
    return (
        <div>
            <Container>
                <Row>
                    {projects.projects.map((project) => (
                        <Project title={project.title} image={project.image} tags={project.tags} page={project.page} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Projects;
