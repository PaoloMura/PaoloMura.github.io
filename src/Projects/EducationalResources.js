import { Link } from '@mui/material';
import { Image } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function EducationalResources() {
    var codeSnippet = 'from sketch import Window \nwin = Window(500, 500) \nwin.circle(colour=[215, 147, 229], centre=[250, 250], radius=200) \nwin.display()'
    return (
        <>
            <p>
                I took on a role with 
                <Link href='https://www.bristol.ac.uk/engineering/outreach/' target='_blank'> University of Bristol's Engineering Outreach </Link>
                to create educational resources for after-school coding clubs at local schools in Bristol.
            </p>
            <p>
                I spent several months over the summer liasing with representatives from the University as well as the schools to determine what approach to take.
                After multiple iterations of prototypes, I ultimately settled on a collection of six 'sketch' worksheets.
                These worksheets are accompanied by a small Python module called sketch.py, which is a wrapper for Pygame.
                Together, these resources lead kids through using Python code to create images from basic shapes.
            </p>
            <p>
                I designed the sketch module to be as simple to use as possible, while still providing kids with wide creative possibilities.
                With just four lines of code, you can draw a shape on the screen:
            </p>
            <SyntaxHighlighter language='Python' style={docco}>
                {codeSnippet}
            </SyntaxHighlighter>
            <Image fluid src='/images/educational-resources/circle.jpeg' />
            <p>
                The worksheets suggest ideas on how to use programming fundamentals (selection, iteration, arrays, etc.) with the sketch module to create more interesting images.
                These resources have been used with great success at Cotham School and have been useful to students with a wide range of Python abilities.
            </p>
            <Image fluid src='/images/educational-resources/examples.jpeg' />
        </>
    );
}

export default EducationalResources;