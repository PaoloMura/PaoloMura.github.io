import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Social({ link, icon }) {
  return (
    <div className='social'>
      <a href={link} target='_blank' rel='noreferrer'>
        {icon}
      </a>
    </div>
  )
}

export default function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col>
            <Social
              link='https://github.com/PaoloMura'
              icon=<GitHubIcon fontSize="large"/>
            />
          </Col>
          <Col>
            <Social
              link='https://www.linkedin.com/in/paolo-mura-00/'
              icon=<LinkedInIcon fontSize="large"/>
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
