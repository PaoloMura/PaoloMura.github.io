import { Image } from 'react-bootstrap';

function BookingSystem() {
    return (
        <>
            <p>
                This project was my A Level Computer Science coursework.
                The task was very open-ended and aimed to showcase my grasp of programming as well as software development practices.
                This focused on analysis, design, development and testing of an application.
            </p>
            <p>
                Initially, I spent a significant amount of time attempting to create a driving simulation complete with AI cars, trained using machine learning.
                After many months making little progress—but learning a lot about C#, Unity and advanced computer science techniques—I gave into reason and switched to a more achievable task.
                I created a booking system for a generic swimming school since I worked as a swimming teacher in my free time.
            </p>
            <Image fluid src='/images/booking-system/EditChild.jpeg' />
            <p>
                The app consists of a front-end GUI built using Qt and a backend relational database in SQLite.
                Python was used throughout due to my teachers' familiarity with the language.
                Users are able to create accounts and login as a teacher or parent as well as edit account details at any time.
                Parents can book classes for multiple children and teachers can view booking details for classes and generate registers.
            </p>
            <Image fluid src='/images/booking-system/ClassesDatabase.jpeg' />
        </>
    );
}

export default BookingSystem;