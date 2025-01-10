import React from "react";
import { Image } from "react-bootstrap";

function Nexus() {
  return (
    <>
      <p>
        Nexus is a project I am currently developing in my spare time. It is a
        full-stack web application that aims to help you meet new people through
        mutual friends.
      </p>
      <p>
        I trialled the website in October 2024 with a small group of attendees.
        It was a great success and I received positive feedback, mostly praising
        the concept and the event itself.
      </p>
      <Image fluid src="/images/nexus/home-page.png" className="image" />
      <p>
        Very similar to Facebook events, it allows users to create an event and
        invite friends via an invite code. However, you can only invite two
        people. Each of those friends can then invite two more friends, and so
        on.
      </p>
      <p>
        Ultimately, this creates a network of people connected via mutual
        friends, which brings some key benefits:
      </p>
      <ul>
        <li>Safety: everyone is connected through a chain of trust.</li>
        <li>
          Things in common: everyone is likely to have common interests, or
          exist in similar social circles.
        </li>
        <li>
          Balance: low chance of cliques forming (everyone knows roughly the
          same number of people)
        </li>
        <li>Relaxed: each person has 1-3 friends already</li>
        <li>
          High chance of meeting new people: most of the attendees will be new
          to you
        </li>
      </ul>
      <Image fluid src="/images/nexus/dashboard.png" className="image" />
      <p>
        The website is built full-stack with Next.js, a PostgreSQL database,
        Auth0 for authentication and is hosted on Vercel. I have plans to
        develop the project further, adding features and ultimately building a
        mobile app for it using React Native.
      </p>
    </>
  );
}

export default Nexus;
