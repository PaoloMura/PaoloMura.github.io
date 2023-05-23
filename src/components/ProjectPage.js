import { Link } from '@mui/material';
import { Stack } from 'react-bootstrap';
import projects from '../data/projects.json'
import { useEffect, useState } from 'react'

export default function ProjectPage({ project }) {
  const myProject = projects.projects.find((x) => (x.page === project));

  const [Description, setDescription] = useState(null)

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const module = await import(`../Projects/${project}`);
        setDescription(module.default);
      } catch (error) {
        console.error('Error loading component:', error);
      }
    };

    loadComponent()
  }, [project])

  if (!Description) return <div>Loading...</div>;

  if (myProject === undefined) return (
    <div>Not found.</div>
  )

  return (
    <div className='project-page'>
      <h1 className='project-title'>{myProject.title}</h1>
      <h3 className='project-year'>({myProject.date})</h3>
      <Stack>
        {Description}
      </Stack>
      <p>
        For a more detailed description of the project, check out the
      </p>
      <ul>
        {myProject.links.map((x, idx) => (
          <li key={idx}>
            <Link href={x.link} target='_blank'>
              {x.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
