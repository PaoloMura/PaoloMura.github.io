import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from '@mui/material'

function HPC() {
    return (
        <>
            <p>
                This project was the coursework for my fourth year High Performance Computing module.
                We were given some starter code written in C, which was a serial implementation of the 
                <Link href='https://en.wikipedia.org/wiki/Lattice_Boltzmann_methods' target='_blank'>
                    Lattice Boltzmann fluid dynamics simulation
                </Link>.
                The task was to improve the efficiency of this code in three stages:
            </p>
            <ol>
                <li>Serial optimisations</li>
                <li>Parallelise it across multiple cores using OpenMP</li>
                <li>Distribute it across multiple nodes using MPI</li>
            </ol>
            <p>
                We also had to analyse the performance of each iteration on Blue Crystal phase 4 (BCp4), the University's supercomputer.
            </p>
            <p>
                Initially, I performed compiler optimisations, loop fusion (collapsing separate functions under a single loop) and optimised complex arithemtic operations (such as divisions).
                This improved the efficiency of the serial version of the code.
            </p>
            <p>
                Next, I vectorised the code and applied OpenMP parallelism.
                This allowed the code to run in parallel across all 28 cores of a Blue Crystal node.
            </p>
            <p>
                Finally, I refactored to use MPI instead of OpenMP for parallelism.
                This allowed the code to be distributed via a halo exchange system, shown in the image below.
            </p>
            <Image fluid src='/images/hpc/halo-exchange.jpeg' className='image' />
            <p>
                Consider the kth rank (i.e. node), which has n+1 local rows.
                Its 0th and nth rows are used as "halo" regions; local copies of the adjacent rows belonging to the rank above and below.
                The kth rank only performs processing on the rows under its domain: 1 to n-1.
            </p>
            <p>
                The "halo exchange" involves echanging rows between adjacent ranks and is performed after each round of computation.
                In the diagram above, the kth rank sends a copy of its n-1th row above, while receiving a row from below, which it stores into its 0th row.
                Then, it sends a copy of its 1st row below, while receiving a row from above, which it stores into its nth row.
            </p>
            <p>
                The results showed a massive speed-up, with the parallel version being 94X faster when compared to the unoptimised code on a grid size of 256x256.
                The distributed version was 443X faster than the optimised serial code on an input grid size of 1024x1024.
            </p>
        </>
    )
}

export default HPC;
