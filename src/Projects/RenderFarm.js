import { Image } from 'react-bootstrap';

function RenderFarm() {
    return (
        <>
            <p>
                This project was the coursework for my fourth year Cloud Computing and Big Data unit.
                The challenge was to create a cloud application that could complete an embarassingly parallelisable task and we were given access to an AWS learner lab.
                I chose to create a render farm, which takes in a Blender project file and renders the animation into a finished MP4 video file.
            </p>
            <p>
                The application itself is constructed using the following AWS services:
            </p>
            <ul>
                <li>Lambda functions</li>
                <li>S3 buckets (for storing the input, output and intermediate files)</li>
                <li>DynamoDB (for storing a table of job statuses)</li>
                <li>EKS cluster (for carrying out the processing of jobs)</li>
                <li>SQS queue (for submitting jobs to the cluster)</li>
            </ul>
            <Image fluid src='/images/render-farm/RenderFarm.jpeg' />
            <p>
                The overall process is as follows:
            </p>
            <ol>
                <li>The client stores the Blender file in S3.</li>
                <li>The client submits a rendering job to the server.</li>
                <li>The server splits the job into batches (e.g. frames 1-3, 4-6, ...).</li>
                <li>The server sends the batches to the worker cluster.</li>
                <li>Each worker node processes a batch, rendering their assigned range of frames and storing results to S3.</li>
                <li>Once all batches are done, one worker node sequences the frames into a single MP4 file.</li>
            </ol>
            <p>
                On top of the obvious speedup that comes with parallelisation, the application also included scalability and fault tolerance.
                I used a Kubernetes horizontal pod autoscaler to increase the number of pods in the cluster when % CPU usage increased above a threshold.
                EKS is itself fault tolerant and I set the SQS queue to make job messages visible again after a timeout from when they were consumed.
                This allowed jobs to be rescheduled if a node failed to process its batch.
            </p>
            <Image fluid src='/images/render-farm/Scaling.jpeg' />
            <p>
                The red line represents % CPU usage.
                The blue line is the number of pods.
                The dashed green line is the threshold % CPU usage that determines whether to increase or decrease the number of pods.
            </p>
        </>
    );
}

export default RenderFarm;