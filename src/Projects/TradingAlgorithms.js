import { Image } from 'react-bootstrap';
import { Link } from '@mui/material';

function TradingAlgorithms() {
    return (
        <>
            <p>
                This project was the coursework for my fourth year Internet Economics and Financial Technology unit.
                The task was to analyse the performance of a new trading algorithm called 
                <Link href='https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4153519' target='_blank'> PRDE </Link>
                and then extend this algorithm to improve its performance.
                I wrote a short academic paper that detailed my results.
            </p>
            <p>
                The PRDE trading algorithm adapts its strategy over time.
                It has two main parameters:
            </p>
            <ul>
                <li>F (a mutation factor)</li>
                <li>k (the population size)</li>
            </ul>
            <p>
                I ran many simulations of the PRDE algorithm using the 
                <Link href='https://github.com/davecliff/BristolStockExchange' target='_blank'> Bristol Stock Exchange</Link>
                , and then performed statistical analysis on these results.
                These tests were largely inconclusive due to noise and limited compute time for running the simulations.
                However, some results showed that small values of k were best, while F values centred around 1.0 gave highest profitability.
                In the following charts, PPS means 'Profit Per Second':
            </p>
            <Image fluid src='/images/trading-algorithms/PRDE_k.jpeg' />
            <Image fluid src='/images/trading-algorithms/PRDE_F.jpeg' />
            <p>
                I then extended PRDE by implementing an adaptive differential evolution algorithm called 
                <Link href='https://ieeexplore.ieee.org/document/5208221' target='_blank'> JADE</Link>
                . I named this algorithm PRAD (Parameterised-Response Adaptive Differential evolution).
                This algorithm continuously adapts its F parameter, rather than using one fixed value for the entire simulation.
                Analysis showed that this algorithm outperformed vanilla PRDE by a significant margin:
            </p>
            <Image fluid src='/images/trading-algorithms/PRADvsPRDE.jpeg' />
        </>
    );
}

export default TradingAlgorithms;