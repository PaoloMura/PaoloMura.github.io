import { Link } from '@mui/material';
import { Stack } from 'react-bootstrap';
import projects from './projects.json'

function ProjectPage(props) {
    var project = projects.projects.find((x) => (x.page === props.project));
    return (
        <div className='project-page'>
            <h1 className='project-title'>{project.title}</h1>
            <h3 className='project-year'>({project.date})</h3>
            <Stack>
                {props.description}
            </Stack>
            <p>
                For a more detailed description of the project, check out the
            </p>
            <ul>
                {project.links.map((x) => (<li><Link href={x.link} target='_blank'>{x.text}</Link></li>))}
            </ul>
        </div>
    );
}

export default ProjectPage;
