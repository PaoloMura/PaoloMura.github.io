import { Image } from 'react-bootstrap';

function VoronoiAR() {
    return (
        <>
            <p>
                This project was the group coursework for my second year Software Engineering Project unit.
                We were given a list of around 40 projects to choose from, each proposed by either a University department or external client.
                The unit leaders then allocated us into teams based on our preferences.
                I was put into a team of five to create an augmented reality (AR) app for the University's Department of Mathematics.
            </p>
            <p>
                I was in contact with two members of the department, Dr Marton Balazs and Professor Peter Green.
                We had regular meetings over the year to try and pin down the requirements and agree on realistic goals.
                The Fry Building (home of the Department of Mathematics) has a large voronoi pattern sculpture overlooking the courtyard.
                The sculpture itself is only a 2D slice of a three-dimensional voronoi pattern.
                Their request was that we produce an AR app that visitors could use to visualise the full 3D object.
            </p>
            <Image fluid src='/images/ar-app/VoronoiSculpture.jpeg' />
            <p>
                We developed the app in Android Studio using Java and ARCore, a Google library for augmented reality applications.
                My main contributions to the project were as follows:
            </p>
            <ul>
                <li>Main point of contact with the client;</li>
                <li>Performed all on-site testing;</li>
                <li>Redesigned the UI; and</li>
                <li>Contributed some significant ideas to the design.</li>
            </ul>
            <p>
                In reference to the last point, one such idea was to use an 'anchor' image.
                This was a small poster in a fixed location in the courtyard that we could scan to line up the CGI model to a known location.
                However, this proved to be quite unreliable, so my next suggestion was to add a feature where the user could manually align the model themselves.
                Although not the ideal solution, it did add an interactive elemenet to our app.
            </p>
        </>
    );
}

export default VoronoiAR;