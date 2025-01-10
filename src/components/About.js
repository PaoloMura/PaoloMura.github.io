import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { aboutDescription } from '../data/staticText'


function About() {
  return (
    <div className='about about-mobile'>
      <Row>
        <Col xs={12} lg={6} className="about-img-container">
          <Image className='photo' src={require('../images/PhotoOfMe.jpeg')}/>
        </Col>
        <Col className="about-text-container">
          {
            aboutDescription.map((desc, idx) => <p key={idx}>{desc}</p>)
          }
        </Col>
      </Row>
    </div>
  );
}

export default About;
