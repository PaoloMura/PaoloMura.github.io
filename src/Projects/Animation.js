import { Image } from 'react-bootstrap';
import projects from '../data/projects.json';

function Quote(props) {
    return (
        <div className='quote'>
            <h5>"{props.quote}"</h5>
            <h6 className='quote-author'>- {props.author} (YouTube comment, {props.year})</h6>
        </div>
    )
}

function Animation() {
    var quotes = projects.projects.find((x) => (x.page === '/animation')).quotes;
    return (
        <>
            <p>
                One of my favourite hobbies is stop motion animation using Lego bricks.
                Although I dabbled with it as a kid, I only started seriously in late 2014.
                The Faculty of Classics at the University of Cambridge was running a video competition for introducing audiences to a topic set in the ancient world.
                I chose to create a stop motion animation of the journey of Odysseus from the sacking of Troy to his arrival at the palace of Alcinous.
                The video won first place and officially launched my passion for filmmaking.
            </p>
            <Quote quote={quotes[0].quote} author={quotes[0].author} year={quotes[0].year} />
            <Image fluid src='/images/animation/OdysseusJourney.jpeg' />
            <p>
                After this, I spent several years honing my skills, working on VFX using Adobe After Effects as well as developing my own pipeline for phonetic mouth animation.
                Over time, my animations became more fluid.
                In 2018, I decided to tackle my greatest project yet: a trilogy of historic fantasy short films.
            </p>
            <Quote quote={quotes[1].quote} author={quotes[1].author} year={quotes[1].year} />
            <p>
                I call it the Dragonslayer Trilogy, a comedy series inspired by the likes of Shrek and Monty Python and the Holy Grail.
                It is my magnum opus.
                In total, I believe I've spent well over 1,500 hours of work on the trilogy.
                Aside from some help with the voice acting, I took on all the production roles single-handedly, including set design, animation, VFX, editing and sound design.
            </p>
            <Image fluid src='/images/animation/DragonslayerTrilogy.jpeg' />
            <p>
                I continue to animate when I have free time and have many ideas for future projects and avenues of technical improvement for me to explore.
                All in all my channel has amassed over 18,000 views; two of my videos have won competitions run by the University of Cambridge and Science Oxford; and I've received nothing but positive reviews (even from all the strangers on the Internet!).
            </p>
            <Quote quote={quotes[2].quote} author={quotes[2].author} year={quotes[2].year} />
        </>
    );
}

export default Animation;