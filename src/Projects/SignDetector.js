import { Image } from 'react-bootstrap';

function SignDetector() {
    return (
        <>
            <p>
                This project was the coursework for my third year Image Processing and Computer Vision unit.
                The task was to create a "No Entry" sign detector.
                We were allowed to use OpenCV's classifier training application with the Viola-Jones face detector algorithm.
                Beyond this, we had to implement our own methods using C++ and limited OpenCV functionality to extend this detector and improve performance.
            </p>
            <p>
                To measure performance, I used the true positive rate (TPR) and F1-score.
                In the context of sign detection, TPR tells us how many signs the algorithm correctly identified.
                F1-score is a metric that also takes the false positives into account (i.e. the number of times the detector falsely tells us there's a sign when there actually isn't).
                Both metrics range from 0 (poor) to 1 (great).
            </p>
            <p>
                The Viola-Jones detector works by using a feature (a simple pattern that it looks for in an image).
                If there's a region within the image that closely resembles this feature, it considers it a match and detects this region as being a No Entry sign.
                I used OpenCV's classifier training application to determine the best feature to use, based on a small set of labelled test data.
            </p>
            <Image fluid src='/images/sign-detector/Result1.jpeg' />
            <p>
                The red boxes indicate the ground truth (where I manually chose what constituted a No Entry sign).
                The green boxes indicate what the detector output as a No Entry sign.
            </p>
            <p>
                By itself, the Viola-Jones detector gave poor performance.
                The TPR was ~0.35, likely due to the limited training data set.
                The F1-score was ~0.22 because of a large number of instances where it detected a region with a horizontal bar.
                In other words, the feature was too simplistic and was picking up a lot of false positives.
            </p>
            <Image fluid src='/images/sign-detector/HoughTransform.jpeg' />
            <p>
                I then implemented my own version of the Hough Transform algorithm, adapted for circle detection.
                The algorithm works as follows:
            </p>
            <ol>
                <li>Given an original image X.</li>
                <li>Create a new image Y, drawing pixels whenever there's a significant change in colour (i.e. draw the edges).</li>
                <li>Draw lines perpendicular to the gradient of these edge lines.</li>
                <li>Find pixels where a significant number of these lines intersect; it's likely to be the centre of a circle.</li>
                <li>Claim that you've found a circle here and draw a bounding box on the original image.</li>
            </ol>
            <p>
                I also created another simple detection layer that determined if the colour ratio red:white was approximately as expected for No Entry signs.
                Finally, I combined these three algorithms together in the following way:
            </p>
            <ol>
                <li>Check if the Viola-Jones detector finds a possible sign X.</li>
                <li>Check if the Hough Circle detector finds a possible sign Y.</li>
                <li>If (X and Y are in the same region) and (the colour ratio is good) then return found.</li>
                <li>If (Y) and (the colour ratio is good) then return found.</li>
            </ol>
            <Image fluid src='/images/sign-detector/Result2.jpeg' />
            <p>
                Although not perfect, the results were much better, with a TPR of ~0.61 and F1-score of ~0.67.
                The number of false positives were almost completely reduced to zero.
            </p>
        </>
    );
}

export default SignDetector;