import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ArticleIcon from '@mui/icons-material/Article';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from '@mui/material';

function Social(props) {
    return (
      <div className='social'>
        {/* <div className='tooltiptext'>{props.text}</div> */}
        <Link href={props.link} target={props.target}>
          {props.icon}
        </Link>
      </div>
    );
}

function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col>
            <Social text='GitHub' link='https://github.com/PaoloMura' target='_blank' icon=<GitHubIcon fontSize="large"/> />
          </Col>
          <Col>
            <Social text='LinkedIn' link='https://www.linkedin.com/in/paolo-mura-00/' target='_blank' icon=<LinkedInIcon fontSize="large"/> />
          </Col>
          <Col>
            <Social text='CV' link='./cv' target='_self' icon=<ArticleIcon fontSize="large"/> />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
