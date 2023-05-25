import { Image } from 'react-bootstrap';

function MultiplayerGame() {
    return (
        <>
            <p>
                This project was the coursework for my fourth year team project.
                The task was to work in a group of seven to create a computer game.
                The only restrictions were that it had to be a web game and include a novel aspect.
            </p>
            <p>
                Having spent the year re-watching Doctor Who, I proposed that we make a multiplayer time-travel game to fulfill the 'novel' requirement.
                The finished game is unlike anything we've seen before: it's a multiplayer 3D web game where at any point, players are free to time-travel within elapsed time.
                Each player can time-travel whenever they like, irrespective and independently of other players.
            </p>
            <p>
                My main contributions to the project were:
            </p>
            <ul>
                <li>Conceptual ideation</li>
                <li>Project maintenance</li>
                <li>Algorithms and data structures for time-travel</li>
                <li>Test framework</li>
            </ul>
            <p>
                The way I implemented time-travel is by taking inspiration from existing replay systems.
                Many games have replay systems that capture the state of the game (e.g. player positions) at regular intervals.
                When the game is over, this stored state is read in order, allowing the computer to reconstruct events in the sequence that they occurred.
            </p>
            <Image fluid src='/images/multiplayer-game/DataStructure.jpeg' />
            <p>
                The Time Travel System (TTS) is a collection of C# data structures that facilitate time travel.
                At its core, it has an array where each item represents a frame of the game.
                As players move through time, they store their state at the frame they're at.
                Unlike regular games, players can time-travel.
                All this means is that they don't have to store their state at sequential frames in the array;
                they can jump ahead to future frames or revisit earlier frames.
            </p>
            <Image fluid src='/images/multiplayer-game/Ghosts.jpeg' />
            <p>
                As long as we keep track of which frame each player is currently visiting, we can determine which characters any individual player should see.
                This is done by looking up the that frame in the array.
                If there is already stored state there, this represents past versions of some players.
                The game then uses this state to recreate what these players were doing at that point in the past, visualised as 'ghost' versions of those characters.
            </p>
            <Image fluid src='/images/multiplayer-game/RealityManager.jpeg' />
            <p>
                We keep track of all players' currently perceived frame.
                So, if two players' perceived frames are the same, we can let them see and interact with each other (they're playing in the same time).
                Otherwise, we set them invisible to each other so that they can't interact.
            </p>
            <p>
                The project was a large and complex undertaking with the TTS making up a small fraction of the total project.
                I was responsible for maintaining documentation, UML diagrams and refactoring the codebase.
                I also implemented a testing framework specifically for analysing and debugging our TTS.
            </p>
            <Image fluid src='/images/multiplayer-game/UML.jpeg' />
        </>
    );
}

export default MultiplayerGame;