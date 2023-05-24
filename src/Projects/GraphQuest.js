import React from 'react'
import Image from 'react-bootstrap/Image'

export default function GraphQuest () {
  return (
    <>
      <p>
        The title of my dissertation was "Designing a Framework for Generating Graph Theory Questions for Education".
        My solution was a website written in React with a Flask backend.
        It works in conjunction with a Python package I developed called "graphquest".
      </p>
      <p>
        There were no existing solutions I came across that allowed teachers to automate the generation of practice questions for graph theory.
        Some similar websites exist that provide automatic question generation, questions for graph theory and graph visualisation, but none covered all bases.
      </p>
      <p>
        My graphquest Python package can be installed by teachers with pip.
        It allows them to extend base classes that represent generic question types
        (such as multiple choice or select a path in the graph).
        They are free to use the power of Python with external graph theory libraries to define their own specific question types
        (such as "find an Euler walk in a given graph").
      </p>
      <Image fluid src="/images/graph-quest/architecture.jpg"/>
      <p>
        The teacher may then upload their question classes in Python scripts to the Graph Quest website.
        The website allows them to combine their questions into "topics" and share these with their students via a topic code.
      </p>
      <Image fluid src="/images/graph-quest/teacher-page.jpg"/>
      <p>
        When the student accesses the website via this code, the Flask backend generates the data for the questions using the teacher's scripts
        and the React frontend renders the display (including handling the graph visualisation via the Cytoscape.js library).
      </p>
      <Image fluid src="/images/graph-quest/student-page.jpg"/>
      <p>
        Ultimately, my solution provides teachers with a framework for generating practice questions by writing code.
        This allows them to focus on the logic of the question, without having to concern themselves with the front-end
        display or graph visualisation.
        The entire solution is modular at several layers, resulting in a highly extensible product.
      </p>
    </>
  )
}
