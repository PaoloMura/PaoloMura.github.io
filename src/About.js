import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function About() {
  return (
    <div className='about about-mobile'>
        <h1 className='title'>Paolo Mura</h1>
        <Container>
            <Row>
                <Col>
                    <Image className='photo' src={require('./images/PhotoOfMe.jpeg')}/>
                </Col>
                <Col>
                    <p>
                        I am a final year student studying Computer Science at the University of Bristol.
                        My interests in the field include machine learning, AI, computer vision and computer graphics.
                        I also enjoy pursuing a deep understanding of algorithms, data structures and software engineering techniques.
                    </p>
                    <p>
                        I built this website using ReactJS and introduce a selection of my favourite projects.
                        Among these are coursework from University and school as well as personal projects.
                    </p>
                    <p>
                        Outside of Computer Science, my main hobbies and interests are swimming, martial arts, piano and stop motion animation.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default About;
