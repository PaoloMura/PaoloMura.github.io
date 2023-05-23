import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { aboutDescription } from '../data/staticText'


function About() {
  return (
    <div className='about about-mobile'>
        <Container>
            <Row>
                <Col>
                    <Image className='photo' src={require('../images/PhotoOfMe.jpeg')}/>
                </Col>
                <Col>
                  {
                    aboutDescription.map((desc, idx) => <p key={idx}>{desc}</p>)
                  }
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
