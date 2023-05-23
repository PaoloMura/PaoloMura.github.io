import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import About from './About'
import PDF from './PDF'
import Projects from './Projects'

export default function Body () {
  return (
    <Tabs fill>
      <Tab eventKey='about' title='About' className='main-content'>
        <About/>
      </Tab>
      <Tab eventKey='projects' title='Projects' className='main-content'>
        <Projects/>
      </Tab>
      <Tab eventKey='cv' title='CV' className='main-content'>
        <PDF link='/Paolo-Mura-CV.pdf'/>
      </Tab>
    </Tabs>
  )
}
